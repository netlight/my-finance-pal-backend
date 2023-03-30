import { type Budget } from "../../domain/budget";

interface BudgetRepository {
  findAll: () => Promise<Budget[]>;
}

export default BudgetRepository;
