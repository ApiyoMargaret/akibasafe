export interface BitikaResponse {
  success: boolean;
  satsReceived: number;
  txId: string;
}

export interface TandoResponse {
  success: boolean;
  message: string;
  mpesaReceipt: string;
}

export const mockBitikaPurchase = async (kesAmount: number): Promise<BitikaResponse> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  // FIXED: Changed from 22 to 20
  const satsReceived = Math.floor(kesAmount * 20);
  return {
    success: true,
    satsReceived,
    txId: `bitika_${Date.now()}`
  };
};

export const mockSubmarineSwap = async (satsAmount: number): Promise<number> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Keep 0.5% fee
  const stableValue = Math.floor(satsAmount * 0.995);
  return stableValue;
};

export const mockLoopOut = async (satsAmount: number): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return true;
};

export const mockLoopIn = async (satsAmount: number): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return true;
};

export const mockTandoSpend = async (phoneNumber: string, amountKES: number): Promise<TandoResponse> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return {
    success: true,
    message: `KES ${amountKES} sent to ${phoneNumber}`,
    mpesaReceipt: `TANDO${Date.now()}`
  };
};
