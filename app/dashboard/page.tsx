'use client';

import React, { useState } from 'react';
import { Shield, Settings, Coins, PiggyBank, Send, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useAkibaSafe } from '../hooks/useAkibaSafe';
import { formatKES, formatSats } from '../utils/helpers';

export default function Dashboard() {
  const { state, loading, saveShortTerm, saveLongTerm, spendFromShortTerm } = useAkibaSafe();
  const [amount, setAmount] = useState(500);
  const [phone, setPhone] = useState('');
  const [spendAmount, setSpendAmount] = useState(100);

  return (
    <main className="min-h-screen p-4 pb-20">
      <div className="max-w-2xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex justify-between items-center mb-6 pt-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="p-2 bg-white/5 rounded-xl hover:bg-white/10 transition border border-white/10">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-emerald-500" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  AkibaSafe
                </h1>
                <p className="text-xs text-gray-400">Your Bitcoin Savings App</p>
              </div>
            </div>
          </div>
          <Link href="/settings" className="p-2 bg-white/5 rounded-xl hover:bg-white/10 transition border border-white/10">
            <Settings className="w-5 h-5" />
          </Link>
        </div>

        {/* Hero */}
        <div className="mb-6 text-center">
          <p className="text-gray-300 text-lg font-semibold">Your money never disappears</p>
          <p className="text-gray-500 text-sm">You control your Bitcoin. Total transparency.</p>
        </div>

        {/* Balance Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-emerald-500/10 rounded-xl">
              <Coins className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
              <p className="text-xs text-gray-400">Spendable (Stable)</p>
              <p className="text-xl font-bold text-white">{formatKES(state.shortTermBalance)}</p>
            </div>
            <div className="text-center p-3 bg-blue-500/10 rounded-xl">
              <PiggyBank className="w-5 h-5 text-blue-500 mx-auto mb-2" />
              <p className="text-xs text-gray-400">Bitcoin Savings</p>
              <p className="text-xl font-bold text-white">{formatSats(state.longTermSats + state.coldStorageSats)}</p>
            </div>
          </div>
          {state.coldStorageSats > 0 && (
            <div className="mt-3 text-xs text-center text-gray-500">
              🔒 {formatSats(state.coldStorageSats)} in cold storage
            </div>
          )}
        </div>

        {/* Save Section */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-4">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">Save Money</h2>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
            className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white text-lg mb-4 focus:outline-none focus:border-emerald-500"
            placeholder="Amount in KES"
          />
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => saveShortTerm(amount)}
              disabled={loading || amount <= 0}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl py-3 font-semibold transition"
            >
              Short Term (Stable)
            </button>
            <button
              onClick={() => saveLongTerm(amount)}
              disabled={loading || amount <= 0}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl py-3 font-semibold transition"
            >
              Long Term (Bitcoin)
            </button>
          </div>
          <div className="mt-3 text-xs text-center text-gray-500">
            Short term: Stable value • Long term: Bitcoin appreciation
          </div>
        </div>

        {/* Spend Section */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-4">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">Send via Tando</h2>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="07XX XXX XXX"
            className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white mb-3 focus:outline-none focus:border-emerald-500"
          />
          <input
            type="number"
            value={spendAmount}
            onChange={(e) => setSpendAmount(Math.max(0, Number(e.target.value)))}
            className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white mb-4 focus:outline-none focus:border-emerald-500"
            placeholder="Amount in KES"
          />
          <button
            onClick={() => {
              if (!phone.match(/^07\d{8}$/)) {
                alert('Enter valid phone number (07XXXXXXXX)');
                return;
              }
              spendFromShortTerm(phone, spendAmount);
            }}
            disabled={loading || !phone || spendAmount <= 0 || state.shortTermBalance < spendAmount}
            className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl py-3 font-semibold transition flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send to M-PESA
          </button>
          <div className="mt-3 text-xs text-center text-gray-500">
            Available: {formatKES(state.shortTermBalance)}
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">Recent Activity</h2>
          {state.transactions.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No transactions yet</p>
          ) : (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {state.transactions.slice(0, 10).map((tx) => (
                <div key={tx.id} className="text-sm p-2 bg-white/5 rounded-lg">
                  {tx.description}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trust Badge */}
        <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center">
          <p className="text-emerald-400 font-semibold text-sm">
            ✓ Full self-custody • Your money never disappears • Total transparency
          </p>
        </div>
      </div>
    </main>
  );
}
