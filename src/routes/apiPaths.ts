import { type operations, type paths } from "../../generated/api";

// Typesafe constant holding all REST endpoint paths based on the OpenAPI specification
const apiPaths: Record<keyof operations, keyof paths> = {
  createBudget: "/budgets",
  getBudgets: "/budgets",
  getBudgetSummary: "/budgets/{budgetId}/summary",
  deleteBudget: "/budgets/{budgetId}",
  createExpense: "/budgets/{budgetId}/expenses",
};

export default apiPaths;
