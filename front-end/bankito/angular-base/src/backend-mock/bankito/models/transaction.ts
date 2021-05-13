export interface Transaction {
  id: string;
  value: number;
  date: string;
  fromAccount: string;
  toAccount: string;
}

export interface Balance {
  in: number;
  out: number;
  total: number;
}
