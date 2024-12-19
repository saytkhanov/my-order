import { makeAutoObservable } from 'mobx';
import { IOrder } from './types';

export class OrderStore {
  orders: IOrder[] = [];


  constructor() {
    makeAutoObservable(this);
  }

  setOrders(orders: IOrder[]) {
    this.orders = orders;
  }

  addOrder(order: IOrder) {
    if (!this.orders.find((o) => o.id === order.id)) {
      this.orders = [order, ...this.orders];
    }
  }

  updateOrder(updated: IOrder) {
    this.orders = this.orders.map((o) => (o.id === updated.id ? updated : o));
  }
}
