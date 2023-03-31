import type UUID from "./uuid";

export type ExpenseId = UUID;

export interface NewExpense {
  description: string;
  amount: number;
  date: Date;
}

export interface Expense extends NewExpense {
  id: ExpenseId;
}
