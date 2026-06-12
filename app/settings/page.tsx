'use client';

import React from 'react';
import { ArrowLeft, Copy, Download, Trash2, Home } from 'lucide-react';
import Link from 'next/link';
import { useAkibaSafe } from '../hooks/useAkibaSafe';
import { toast } from 'sonner';

export default function SettingsPage() {
  const { state, clearAllData, exportData } = useAkibaSafe();

  const copySeed = () => {
    navigator.clipboard.writeText(state.seedPhrase);
    toast.success('Seed phrase copied');
  };

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-6 pt-4">
          <Link href="/dashboard" className="p-2 bg-white/5 rounded-xl border border-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <Link href="/" className="p-2 bg-white/5 rounded-xl border border-white/10 ml-auto">
            <Home className="w-5 h-5" />
          </Link>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-4">
          <h2 className="font-semibold text-white mb-3">Your Recovery Phrase</h2>
          <p className="text-xs text-gray-400 mb-3">Write this down. Keep it safe.</p>
          <div className="bg-black/50 rounded-xl p-4 border border-white/10">
            <div className="grid grid-cols-3 gap-2 mb-3">
              {state.seedPhrase.split(' ').map((word, i) => (
                <div key={i} className="text-xs font-mono bg-white/5 p-2 rounded text-center">
                  {i+1}. {word}
                </div>
              ))}
            </div>
            <button
              onClick={copySeed}
              className="w-full py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition flex items-center justify-center gap-2"
            >
              <Copy className="w-4 h-4" />
              Copy to clipboard
            </button>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <button
            onClick={exportData}
            className="w-full py-3 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-emerald-400 font-semibold hover:bg-emerald-500/30 transition flex items-center justify-center gap-2 mb-3"
          >
            <Download className="w-4 h-4" />
            Export Backup
          </button>
          <button
            onClick={() => {
              if (confirm('⚠️ This will erase ALL your data. Are you sure?')) {
                clearAllData();
                window.location.href = '/';
              }
            }}
            className="w-full py-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 font-semibold hover:bg-red-500/30 transition flex items-center justify-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Clear All Data
          </button>
        </div>
      </div>
    </main>
  );
}
