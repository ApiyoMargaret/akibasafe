export interface Transaction {
  id: string;
  type: 'save_short' | 'save_long' | 'spend' | 'auto_sweep' | 'loop_in';
  amountKES?: number;
  amountSats?: number;
  description: string;
  timestamp: Date;
  toPhone?: string;
}

export interface UserState {
  shortTermBalance: number;
  longTermSats: number;
  coldStorageSats: number;
  seedPhrase: string;
  transactions: Transaction[];
}
