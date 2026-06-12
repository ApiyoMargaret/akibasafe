'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';

// Types
interface Transaction {
  id: string;
  type: 'save_short' | 'save_long' | 'spend' | 'auto_sweep' | 'loop_in';
  amountKES?: number;
  amountSats?: number;
  description: string;
  timestamp: Date;
  toPhone?: string;
}

interface UserState {
  shortTermBalance: number;
  longTermSats: number;
  coldStorageSats: number;
  seedPhrase: string;
  transactions: Transaction[];
}

// Mock API functions
const mockBitikaPurchase = async (kesAmount: number): Promise<{ satsReceived: number }> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  // FIXED: Changed from 22 to 20
  const satsReceived = Math.floor(kesAmount * 20);
  return { satsReceived };
};

const mockSubmarineSwap = async (satsAmount: number): Promise<number> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  // 0.5% fee
  return Math.floor(satsAmount * 0.995);
};

const mockLoopOut = async (satsAmount: number): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return true;
};

const mockLoopIn = async (satsAmount: number): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return true;
};

const mockTandoSpend = async (phoneNumber: string, amountKES: number): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return true;
};

// Helper functions
const formatKES = (amount: number): string => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const formatSats = (sats: number): string => {
  if (sats >= 1000000) return `${(sats / 1000000).toFixed(2)}M sats`;
  if (sats >= 1000) return `${(sats / 1000).toFixed(1)}K sats`;
  return `${sats} sats`;
};

const generateSeedPhrase = (): string => {
  const wordlist = [
    'abandon', 'ability', 'able', 'above', 'absent', 'absorb', 'abstract', 'absurd',
    'abuse', 'access', 'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic',
    'acquire', 'across', 'actress', 'actual', 'adapt', 'addict', 'address', 'adjust'
  ];
  const shuffled = [...wordlist].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 12).join(' ');
};

const STORAGE_KEY = 'akibasafe_state';

const initialState: UserState = {
  shortTermBalance: 0,
  longTermSats: 0,
  coldStorageSats: 0,
  seedPhrase: '',
  transactions: []
};

export const useAkibaSafe = () => {
  const [state, setState] = useState<UserState>(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setState({
        ...parsed,
        transactions: parsed.transactions.map((t: any) => ({
          ...t,
          timestamp: new Date(t.timestamp)
        }))
      });
    } else {
      const newSeed = generateSeedPhrase();
      setState(prev => ({ ...prev, seedPhrase: newSeed }));
    }
  }, []);

  useEffect(() => {
    if (state.seedPhrase) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const addTransaction = (tx: Omit<Transaction, 'id' | 'timestamp'>) => {
    const newTx: Transaction = {
      ...tx,
      id: Date.now().toString(),
      timestamp: new Date()
    };
    setState(prev => ({
      ...prev,
      transactions: [newTx, ...prev.transactions].slice(0, 50)
    }));
    return newTx;
  };

  const saveShortTerm = async (kesAmount: number) => {
    if (kesAmount <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }
    
    setLoading(true);
    try {
      const bitika = await mockBitikaPurchase(kesAmount);
      const stableValue = await mockSubmarineSwap(bitika.satsReceived);
      // FIXED: Changed from /100 to /20 for correct conversion
      const stableKES = Math.floor(stableValue / 20);
      
      setState(prev => ({
        ...prev,
        shortTermBalance: prev.shortTermBalance + stableKES
      }));
      
      addTransaction({
        type: 'save_short',
        amountKES: kesAmount,
        amountSats: bitika.satsReceived,
        description: `Saved ${formatKES(kesAmount)} → ${formatSats(bitika.satsReceived)} sats (stable)`
      });
      
      toast.success(`Saved ${formatKES(kesAmount)} successfully!`);
    } catch (error) {
      toast.error('Transaction failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const saveLongTerm = async (kesAmount: number) => {
    if (kesAmount <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }
    
    setLoading(true);
    try {
      const bitika = await mockBitikaPurchase(kesAmount);
      
      setState(prev => {
        const newLongTerm = prev.longTermSats + bitika.satsReceived;
        return {
          ...prev,
          longTermSats: newLongTerm
        };
      });
      
      addTransaction({
        type: 'save_long',
        amountKES: kesAmount,
        amountSats: bitika.satsReceived,
        description: `Saved ${formatKES(kesAmount)} → ${formatSats(bitika.satsReceived)} sats to Lightning`
      });
      
      toast.success(`Added ${formatSats(bitika.satsReceived)} to your savings!`);
      
      setTimeout(() => {
        checkAutoSweep();
      }, 500);
    } catch (error) {
      toast.error('Transaction failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const checkAutoSweep = async () => {
    const threshold = 100000;
    
    if (state.longTermSats >= threshold) {
      setLoading(true);
      try {
        const satsToSweep = state.longTermSats;
        await mockLoopOut(satsToSweep);
        
        setState(prev => ({
          ...prev,
          longTermSats: 0,
          coldStorageSats: prev.coldStorageSats + satsToSweep
        }));
        
        addTransaction({
          type: 'auto_sweep',
          amountSats: satsToSweep,
          description: `Auto-sweep: ${formatSats(satsToSweep)} moved to cold storage`
        });
        
        toast.success(`${formatSats(satsToSweep)} secured in cold storage!`);
      } catch (error) {
        toast.error('Auto-sweep failed');
      } finally {
        setLoading(false);
      }
    }
  };

  const spendFromShortTerm = async (phoneNumber: string, amountKES: number) => {
    if (!phoneNumber.match(/^07\d{8}$/)) {
      toast.error('Enter valid phone number (07XXXXXXXX)');
      return false;
    }
    
    if (state.shortTermBalance < amountKES) {
      toast.error('Insufficient balance');
      return false;
    }
    
    setLoading(true);
    try {
      await mockTandoSpend(phoneNumber, amountKES);
      
      setState(prev => ({
        ...prev,
        shortTermBalance: prev.shortTermBalance - amountKES
      }));
      
      addTransaction({
        type: 'spend',
        amountKES: amountKES,
        description: `Spent ${formatKES(amountKES)} to ${phoneNumber}`,
        toPhone: phoneNumber
      });
      
      toast.success(`Sent ${formatKES(amountKES)} to ${phoneNumber}`);
      return true;
    } catch (error) {
      toast.error('Payment failed');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const spendFromLongTerm = async (phoneNumber: string, amountSats: number) => {
    if (!phoneNumber.match(/^07\d{8}$/)) {
      toast.error('Enter valid phone number (07XXXXXXXX)');
      return false;
    }
    
    const totalSats = state.longTermSats + state.coldStorageSats;
    if (totalSats < amountSats) {
      toast.error('Insufficient savings');
      return false;
    }
    
    setLoading(true);
    try {
      let newLongTerm = state.longTermSats;
      let newColdStorage = state.coldStorageSats;
      
      if (state.longTermSats < amountSats) {
        const neededFromCold = amountSats - state.longTermSats;
        await mockLoopIn(neededFromCold);
        newLongTerm = state.longTermSats + neededFromCold;
        newColdStorage = state.coldStorageSats - neededFromCold;
        
        addTransaction({
          type: 'loop_in',
          amountSats: neededFromCold,
          description: `Moved ${formatSats(neededFromCold)} from cold storage`
        });
      }
      
      const kesEquivalent = Math.floor(amountSats / 20);
      await mockTandoSpend(phoneNumber, kesEquivalent);
      
      setState(prev => ({
        ...prev,
        longTermSats: newLongTerm - amountSats,
        coldStorageSats: newColdStorage
      }));
      
      addTransaction({
        type: 'spend',
        amountSats: amountSats,
        description: `Spent ${formatSats(amountSats)} (≈${formatKES(kesEquivalent)}) to ${phoneNumber}`,
        toPhone: phoneNumber
      });
      
      toast.success(`Spent ${formatSats(amountSats)} successfully!`);
      return true;
    } catch (error) {
      toast.error('Payment failed');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const clearAllData = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState({
      ...initialState,
      seedPhrase: generateSeedPhrase()
    });
    toast.success('All data cleared');
  };

  const exportData = () => {
    const data = {
      ...state,
      transactions: state.transactions.map(t => ({
        ...t,
        timestamp: t.timestamp.toISOString()
      }))
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `akibasafe-backup-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Backup downloaded');
  };

  return {
    state,
    loading,
    saveShortTerm,
    saveLongTerm,
    spendFromShortTerm,
    spendFromLongTerm,
    clearAllData,
    exportData
  };
};
