import { makeAutoObservable } from 'mobx';

export class TokenRateStore {
  rate: number = 100;

  constructor() {
    makeAutoObservable(this);
  }

  setRate(newRate: number) {
    this.rate = newRate;
  }
}
