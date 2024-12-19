import { createContext, useContext } from 'react';
import { OrderStore } from '@/entities/order/model/order.store';
import { TokenRateStore } from '@/entities/tokenRate/model/tokenRate.store';

type RootStore = {
  orderStore: OrderStore;
  tokenRateStore: TokenRateStore;
};

const orderStore = new OrderStore();
const tokenRateStore = new TokenRateStore();

export const rootStore: RootStore = {
  orderStore,
  tokenRateStore,
};

export const StoreContext = createContext<RootStore>(rootStore);

export const useStore = () => useContext(StoreContext);
