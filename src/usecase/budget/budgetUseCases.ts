import {
  type Budget,
  type BudgetId,
  type BudgetSummary,
  type NewBudget,
} from "../../domain/budget";

interface BudgetUseCases {
  /**
   * Creates a new budget
   * @param newBudget The new budget to be created
   */
  createBudget: (newBudget: NewBudget) => Promise<Budget>;
  /**
   * Gets the summary of a budget including all expenses
   * @param budgetId The ID of the budget to fetch
   */
  getBudgetSummary: (budgetId: BudgetId) => Promise<BudgetSummary | undefined>;
  /**
   * Gets a list of all budgets (without expenses)
   */
  getBudgets: () => Promise<Budget[]>;
  /**
   * Deletes a budget including all related expenses
   * @param budgetId The ID of the budget to delete
   */
  deleteBudget: (budgetId: BudgetId) => Promise<{ deleted: boolean }>;
}

export default BudgetUseCases;
