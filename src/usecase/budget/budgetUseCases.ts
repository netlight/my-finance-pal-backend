import { type Budget, type NewBudget } from "../../domain/budget.js";

interface BudgetUseCases {
  createBudget: (newBudget: NewBudget) => Promise<Budget>;
}

export default BudgetUseCases;
