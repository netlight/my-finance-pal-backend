import { type Budget, type BudgetId } from "../../domain/budget.js";

interface BudgetRepository {
  insertBudget: (budget: Budget) => Promise<Budget>;
  findBudget: (budget: BudgetId) => Promise<Budget | undefined>;
}

export default BudgetRepository;
