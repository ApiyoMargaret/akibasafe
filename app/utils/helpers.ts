export const formatKES = (amount: number): string => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatSats = (sats: number): string => {
  if (sats >= 1000000) return `${(sats / 1000000).toFixed(2)}M sats`;
  if (sats >= 1000) return `${(sats / 1000).toFixed(1)}K sats`;
  return `${sats} sats`;
};

export const formatTimeAgo = (date: Date): string => {
  const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

export const generateSeedPhrase = (): string => {
  const wordlist = [
    'abandon', 'ability', 'able', 'above', 'absent', 'absorb', 'abstract', 'absurd',
    'abuse', 'access', 'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic',
    'acquire', 'across', 'actress', 'actual', 'adapt', 'addict', 'address', 'adjust'
  ];
  const shuffled = [...wordlist].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 12).join(' ');
};
