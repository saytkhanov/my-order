import React, { FC, ReactNode } from 'react';
import { rootStore, StoreContext } from '@/shared/lib/store';

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};
