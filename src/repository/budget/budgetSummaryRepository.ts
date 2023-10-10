import { type BudgetId, type BudgetSummary } from "../../domain/budget";

interface BudgetSummaryRepository {
  // TODO 2.2 - add a function "insert" for inserting a new BudgetSummary
  find: (budgetId: BudgetId) => Promise<BudgetSummary | undefined>;
}

export default BudgetSummaryRepository;
