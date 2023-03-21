import type UUID from "./uuid.js";

export type TransactionId = UUID;

export interface NewTransaction {
  description: string;
  amount: number;
  date: Date;
}

export interface Transaction extends NewTransaction {
  id: TransactionId;
}
