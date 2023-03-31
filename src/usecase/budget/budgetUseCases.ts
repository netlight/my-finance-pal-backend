import {
  type Budget,
  type BudgetId,
  type BudgetSummary,
  type NewBudget,
} from "../../domain/budget";

interface BudgetUseCases {
  createBudget: (newBudget: NewBudget) => Promise<Budget>;
  getBudgetSummary: (budgetId: BudgetId) => Promise<BudgetSummary | undefined>;
  getBudgets: () => Promise<Budget[]>;
  deleteBudget: (budgetId: BudgetId) => Promise<{ deleted: boolean }>;
}

export default BudgetUseCases;
