import { type Budget, type BudgetId } from "../../domain/budget";

interface BudgetRepository {
  findAll: () => Promise<Budget[]>;
  delete: (id: BudgetId) => Promise<{ deleted: boolean }>;
}

export default BudgetRepository;
