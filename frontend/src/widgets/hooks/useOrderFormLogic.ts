import { useEffect } from 'react';
import { TokenRateStore } from '@/entities/tokenRate/model/tokenRate.store';
import { OrderStore } from '@/entities/order/model/order.store';
import { InputMode } from '@/entities/order/model/types';

interface UseOrderFormLogicProps {
  inputMode: InputMode;
  setInputMode: (mode: InputMode) => void;
  tokenAmount: string;
  setTokenAmount: (value: string) => void;
  dollarAmount: string;
  setDollarAmount: (value: string) => void;
  tokenRateStore: TokenRateStore;
  orderStore: OrderStore;
}

export const useOrderFormLogic = ({
  inputMode,
  tokenAmount,
  setTokenAmount,
  dollarAmount,
  setDollarAmount,
  tokenRateStore,
}: UseOrderFormLogicProps) => {
  useEffect(() => {
    if (inputMode === InputMode.Tokens && tokenAmount) {
      const tokens = parseFloat(tokenAmount);
      if (!isNaN(tokens)) {
        setDollarAmount((tokens * tokenRateStore.rate).toFixed(2));
      }
    }

    if (inputMode === InputMode.Dollars && dollarAmount) {
      const dollars = parseFloat(dollarAmount);
      if (!isNaN(dollars) && tokenRateStore.rate !== 0) {
        setTokenAmount((dollars / tokenRateStore.rate).toFixed(6));
      }
    }
  }, [
    inputMode,
    tokenAmount,
    dollarAmount,
    tokenRateStore.rate,
    setDollarAmount,
    setTokenAmount,
  ]);
};
