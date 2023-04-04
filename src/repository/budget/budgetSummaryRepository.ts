import { type BudgetId, type BudgetSummary } from "../../domain/budget";

interface BudgetSummaryRepository {
  // TODO 3. add insert function
  find: (budgetId: BudgetId) => Promise<BudgetSummary | undefined>;
}

export default BudgetSummaryRepository;
