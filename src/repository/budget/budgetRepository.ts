import { type Budget } from "../../domain/budget.js";

interface BudgetRepository {
  findAll: () => Promise<Budget[]>;
}

export default BudgetRepository;
