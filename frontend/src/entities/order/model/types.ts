export interface IOrder {
  id: number;
  amountTokens: number;
  amountDollars: number;
  status: 'Processing' | 'Completed';
  createdAt: string;
}

export enum InputMode {
  Tokens = 'tokens',
  Dollars = 'dollars',
}
