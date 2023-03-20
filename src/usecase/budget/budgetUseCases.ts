import { type Budget, BudgetId, type NewBudget } from "../../domain/budget.js";

interface BudgetUseCases {
  createBudget: (newBudget: NewBudget) => Promise<Budget>;
  getBudget: (budgetId: BudgetId) => Promise<Budget | undefined>;
}

export default BudgetUseCases;
