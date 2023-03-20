import {
  type Budget,
  type BudgetId,
  type NewBudget,
} from "../../domain/budget.js";

interface BudgetUseCases {
  createBudget: (newBudget: NewBudget) => Promise<Budget>;
  getBudget: (budgetId: BudgetId) => Promise<Budget | undefined>;
  getBudgets: () => Promise<Budget[]>;
}

export default BudgetUseCases;
