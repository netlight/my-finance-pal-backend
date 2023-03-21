import {
  type Budget,
  type BudgetId,
  type BudgetSummary,
  type NewBudget,
} from "../../domain/budget.js";

interface BudgetUseCases {
  createBudget: (newBudget: NewBudget) => Promise<Budget>;
  getBudgetSummary: (budgetId: BudgetId) => Promise<BudgetSummary | undefined>;
  getBudgets: () => Promise<Budget[]>;
}

export default BudgetUseCases;
