'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Bitcoin, Coins, Send, ArrowRight, CheckCircle, Zap, Lock, TrendingUp, Phone } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-blue-500/10 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span className="text-sm text-emerald-400">Full Self-Custody • Bitcoin Powered</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Your Money Never<br />Disappears
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              AkibaSafe gives you full control of your savings on the Bitcoin blockchain. 
              Total transparency. Zero hidden fees. Your keys, your coins.
            </p>
            
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition transform hover:scale-105"
            >
              Save Now <ArrowRight className="w-5 h-5" />
            </Link>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-500" />
                <span>Self-Custody</span>
              </div>
              <div className="flex items-center gap-2">
                <Bitcoin className="w-4 h-4 text-emerald-500" />
                <span>Bitcoin Backed</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>M-PESA Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How AkibaSafe Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coins className="w-8 h-8 text-emerald-500" />
            </div>
            <div className="text-2xl font-bold text-emerald-500 mb-2">1</div>
            <h3 className="text-xl font-semibold mb-2">Save in KES</h3>
            <p className="text-gray-400">
              Deposit any amount from KES 100 via M-PESA through our Bitika integration.
              Your money is instantly converted to Bitcoin.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-blue-500 mb-2">2</div>
            <h3 className="text-xl font-semibold mb-2">Auto-Secured</h3>
            <p className="text-gray-400">
              Funds automatically move to cold storage when you reach 100,000 sats.
              Bank-grade security with full self-custody.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-amber-500" />
            </div>
            <div className="text-2xl font-bold text-amber-500 mb-2">3</div>
            <h3 className="text-xl font-semibold mb-2">Spend Anytime</h3>
            <p className="text-gray-400">
              Send to any M-PESA number instantly via Tando. No conversion needed.
              Save in Bitcoin, spend in shillings.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="glass rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose AkibaSafe?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Full Transparency</h3>
                <p className="text-gray-400 text-sm">Every transaction is logged on Bitcoin's blockchain. You can verify your balance anytime.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Self-Custody</h3>
                <p className="text-gray-400 text-sm">You hold the private keys. No bank, no company can freeze or lose your money.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Dual Savings Strategy</h3>
                <p className="text-gray-400 text-sm">Short-term stable value + Long-term Bitcoin appreciation. Best of both worlds.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Instant Spending</h3>
                <p className="text-gray-400 text-sm">Send to any M-PESA number via Tando. Your Bitcoin becomes spendable in seconds.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Auto-Sweep Security</h3>
                <p className="text-gray-400 text-sm">Funds automatically move to cold storage. Protection from hacks and theft.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Bitcoin Appreciation</h3>
                <p className="text-gray-400 text-sm">Historically 60%+ annual returns. Your savings grow, not shrink with inflation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Traditional Savings vs AkibaSafe</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-6 border border-red-500/20">
            <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">Traditional Savings</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 border-b border-white/10">
                <span>Who holds your money?</span>
                <span className="text-red-400">Bank/Company</span>
              </div>
              <div className="flex justify-between items-center p-2 border-b border-white/10">
                <span>Can funds disappear?</span>
                <span className="text-red-400">Yes - No transparency</span>
              </div>
              <div className="flex justify-between items-center p-2 border-b border-white/10">
                <span>Can you verify balance?</span>
                <span className="text-red-400">No - Just a promise</span>
              </div>
              <div className="flex justify-between items-center p-2 border-b border-white/10">
                <span>Withdrawal restrictions?</span>
                <span className="text-red-400">Yes - Limits & freezes</span>
              </div>
              <div className="flex justify-between items-center p-2">
                <span>Returns</span>
                <span className="text-red-400">2-5% (Below inflation)</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-emerald-500/20">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4 text-center">AkibaSafe</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 border-b border-white/10">
                <span>Who holds your money?</span>
                <span className="text-emerald-400">You (Self-custody)</span>
              </div>
              <div className="flex justify-between items-center p-2 border-b border-white/10">
                <span>Can funds disappear?</span>
                <span className="text-emerald-400">No - Blockchain verified</span>
              </div>
              <div className="flex justify-between items-center p-2 border-b border-white/10">
                <span>Can you verify balance?</span>
                <span className="text-emerald-400">Yes - Public ledger</span>
              </div>
              <div className="flex justify-between items-center p-2 border-b border-white/10">
                <span>Withdrawal restrictions?</span>
                <span className="text-emerald-400">No - 24/7 access</span>
              </div>
              <div className="flex justify-between items-center p-2">
                <span>Returns</span>
                <span className="text-emerald-400">Bitcoin appreciation (60%+ historically)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 mb-16">
        <div className="glass rounded-2xl p-8 md:p-12 text-center bg-gradient-to-r from-emerald-500/10 to-blue-500/10">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Savings?</h2>
          <p className="text-gray-300 mb-8">
            Join thousands of Kenyans saving in Bitcoin with total transparency.
            Your money never disappears.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition transform hover:scale-105"
          >
            Start Saving Now <ArrowRight className="w-5 h-5" />
          </Link>
          
          <div className="mt-6 text-xs text-gray-500">
            <p>🔒 Full self-custody • No hidden fees • Bitcoin secured</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        <p>AkibaSafe - Your Bitcoin Savings App</p>
        <p className="mt-1">Demo prototype with mock integrations • Self-custody mode</p>
      </footer>
    </main>
  );
}
