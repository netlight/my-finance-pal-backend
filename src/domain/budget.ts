import type UUID from "./uuid.js";
import type Limit from "./limit.js";
import { type Transaction } from "./transaction.js";

export type BudgetId = UUID;

export interface NewBudget {
  name: string;
  limit: Limit;
  startDate?: Date;
  endDate?: Date;
}

export interface Budget extends NewBudget {
  id: BudgetId;
  spent: number;
}

export interface BudgetSummary extends Budget {
  transactions: Transaction[];
}
