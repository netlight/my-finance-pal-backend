import { type BudgetId, type BudgetSummary } from "../../domain/budget";

interface BudgetSummaryRepository {
  insert: (summary: BudgetSummary) => Promise<BudgetSummary>;
  find: (budgetId: BudgetId) => Promise<BudgetSummary | undefined>;
}

export default BudgetSummaryRepository;
