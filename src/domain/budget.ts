import type UUID from "./uuid";
import type Limit from "./limit";
import { type Expense } from "./expense";

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
  expenses: Expense[];
}
