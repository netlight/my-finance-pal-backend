import { type Budget } from "../../domain/budget.js";

interface BudgetRepository {
  insertBudget: (budget: Budget) => Promise<Budget>;
}

export default BudgetRepository;
