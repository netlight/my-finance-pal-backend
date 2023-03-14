import { type Budget } from "../../models/Budget.js";

interface BudgetRepository {
  insertBudget: (budget: Budget) => Promise<Budget>;
}

export default BudgetRepository;
