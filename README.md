# AkibaSafe - Your Money Never Disappears

![AkibaSafe Banner](https://img.shields.io/badge/Bitcoin-Savings-orange)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8)

**AkibaSafe** is a decentralized Bitcoin savings application that gives you full control of your money. Unlike traditional savings apps where funds can disappear without trace, AkibaSafe provides total transparency through Bitcoin blockchain technology.

## Table of Contents

- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Features](#features)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Problem Statement

Every day, thousands of Kenyans lose money in digital savings platforms. Users save for months, but when they try to withdraw, their balances show zero. Customer support gives vague answers: "system error," "technical glitch," or silence. The money simply disappears.

### Gaps in Existing Systems

| Gap | Problem |
|-----|---------|
| No transparency | Users cannot verify where their money is held |
| Centralized control | Banks/companies hold all funds - single point of failure |
| No proof of reserves | Users cannot independently verify their balance exists |
| Withdrawal restrictions | Platforms can freeze or limit access to your own money |
| Poor returns | Interest rates below inflation (losing purchasing power) |

## Solution

**AkibaSafe turns "trust me" into "verify me."**

Your money is stored on the Bitcoin blockchain - a public, immutable ledger where every transaction is visible and verifiable. You hold your own private keys. No bank, no company, no middleman can touch your funds.

### Key Differentiators

| Feature | Traditional Savings | AkibaSafe |
|---------|-------------------|-----------|
| Who holds your money? | Bank/Company | **You (Self-custody)** |
| Can funds disappear? | Yes - No transparency | **No - Blockchain verified** |
| Can you verify balance? | No - Just a promise | **Yes - Public ledger** |
| Withdrawal restrictions? | Yes - Limits & freezes | **No - 24/7 access** |
| Returns | 2-5% (Below inflation) | **Bitcoin appreciation (60%+ historically)** |

## Features

### Core Features

- **Self-Custody**: You hold your 12-word recovery phrase. Your keys, your coins.
- * Total Transparency**: Every transaction logged on Bitcoin's blockchain - fully verifiable
- ** Dual Savings Strategy**:
  - Short-term: Stable value for daily spending (converted to stablecoins)
  - Long-term: Bitcoin accumulation for wealth growth
- ** Auto-Sweep to Cold Storage**: Funds automatically move to offline storage at 100,000 sats threshold
- **Tando Integration**: Spend Bitcoin directly to any M-PESA number without converting
- **Bitika Integration**: Buy Bitcoin instantly via M-PESA starting from KES 10
- **Activity Log**: Complete transaction history with timestamps
- ** Mobile Responsive**: Works perfectly on all devices

### Security Features

- 12-word seed phrase backup
- Non-custodial wallet architecture
- Cold storage for long-term savings
- LocalStorage persistence (no cloud storage of keys)

## How It Works

### 3-Step Process

1. **Save in KES**
   - Enter amount (from KES 100)
   - Choose Short-term (stable) or Long-term (Bitcoin)
   - Bitika converts your KES to Bitcoin instantly

2. **Auto-Secured**
   - Bitcoin sits in your Lightning wallet for spending
   - Auto-sweep moves funds to cold storage at 100,000+ sats
   - Bank-grade security with self-custody

3. **Spend Anytime**
   - Send to any M-PESA number via Tando
   - No conversion needed - save in Bitcoin, spend in shillings
   - Instant settlement to mobile money

### Visual Flow
User saves KES → Bitika converts to BTC → Funds in Lightning wallet
↓
Below 100K sats? → Keep in Lightning (spendable)
↓
Above 100K sats? → Auto-sweep to Cold Storage (secure)
↓
User wants to spend? → Send via Tando → M-PESA

text

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (Glass morphism) |
| Icons | Lucide React |
| Notifications | Sonner |
| State Management | React Hooks + LocalStorage |
| APIs (Mock) | Bitika, Tando, Submarine swaps |

## Installation

### Prerequisites
money
- Node.js 18+ installed
- npm or yarn package manager

### Steps

```bash
# Clone the repository
git clone https://github.com/ApiyoMargaret/akibasafe.git

# Navigate to project directory
cd akibasafe

# Install dependencies
npm install

# Run development server
npm run dev
Open http://localhost:3000 to see the app.

🎮 Usage
For Users
Landing Page: Read about how AkibaSafe works

Click "Save Now": Enter the dashboard

Save Money:

Enter amount (e.g., 500 KES)

Click "Short Term" for stable value

Click "Long Term" for Bitcoin accumulation

Spend Money:

Enter M-PESA number (07XXXXXXXX)

Enter amount

Click "Send to M-PESA"

View Activity: Check recent transactions in the log

Manage Wallet: Go to Settings to see your seed phrase and backup data

Project Structure
text
akibasafe/
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # Main savings dashboard
│   ├── settings/
│   │   └── page.tsx          # Wallet management
│   ├── hooks/
│   │   └── useAkibaSafe.ts   # Core application logic
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   ├── utils/
│   │   ├── helpers.ts        # Formatting utilities
│   │   └── mockApis.ts       # Mock Bitika/Tando APIs
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── public/                    # Static assets
├── package.json               # Dependencies
├── tailwind.config.js        # Tailwind configuration
└── README.md                  # Documentation
 Future Roadmap
Real Bitika API integration

Real Tando API integration

Lightning Network node connection

Multi-currency support (USD, EUR)

Recurring savings plans

Savings goals and targets

Referral program

Mobile app (React Native)

 License
This project is for hackathon demonstration purposes. All mock APIs are for demo only.
 Acknowledgments
Bitika for enabling KES → BTC purchases

Tando for enabling BTC → M-PESA spending

Bitcoin blockchain for transparency and security

Support
For issues or questions, please open an issue on GitHub or contact the team.

Built with ❤️ for the Bitcoin Hackathon 2026

Your money never disappears. Full self-custody. Total transparency.
