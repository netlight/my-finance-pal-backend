import { type operations, type paths } from "../../generated/api";

const apiPaths: Record<keyof operations, keyof paths> = {
  createBudget: "/budgets",
  getBudgets: "/budgets",
  getBudgetSummary: "/budgets/{budgetId}/summary",
  deleteBudget: "/budgets/{budgetId}",
  createTransaction: "/budgets/{budgetId}/transactions",
};

export default apiPaths;
