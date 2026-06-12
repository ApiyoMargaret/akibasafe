#!/bin/bash

# This creates a patch file - run it
cat > app/hooks/useAkibaSafe.patch << 'PATCH'
  const saveShortTerm = async (kesAmount: number) => {
    setLoading(true);
    try {
      const bitika = await mockBitikaPurchase(kesAmount);
      const stableValue = await mockSubmarineSwap(bitika.satsReceived);
      // Fix: Convert stable value back to KES correctly
      // 100 sats = ~1 KES (based on rate)
      const stableKES = Math.floor(stableValue / 20); // Changed from 100 to 20
      
      setState(prev => ({
        ...prev,
        shortTermBalance: prev.shortTermBalance + stableKES
      }));
PATCH

echo "Run this command to apply the fix:"
echo "sed -i 's/const stableKES = Math.floor(stableValue \/ 100);/const stableKES = Math.floor(stableValue \/ 20);/g' app/hooks/useAkibaSafe.ts"
