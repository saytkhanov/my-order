import { FC, ReactNode, useEffect } from 'react';
import { socket } from '@/shared/lib/socket/socket';
import { IOrder } from '@/entities/order/model/types';
import { useStore } from '@/shared/lib/store';

export const SocketProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { orderStore, tokenRateStore } = useStore();

  useEffect(() => {
    socket.on('tokenRate', (rate: string) => {
      tokenRateStore.setRate(parseFloat(rate));
    });

    socket.on('orderList', (orders: IOrder[]) => {
      orderStore.setOrders(orders);
    });

    socket.on('newOrder', (order: IOrder) => {
      orderStore.addOrder(order);
    });

    socket.on('orderUpdated', (order: IOrder) => {
      orderStore.updateOrder(order);
    });

    return () => {
      socket.off('tokenRate');
      socket.off('orderList');
      socket.off('newOrder');
      socket.off('orderUpdated');
    };
  }, [orderStore, tokenRateStore]);

  return children;
};
