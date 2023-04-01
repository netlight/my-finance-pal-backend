import { type BudgetId } from "../../domain/budget";
import { type NewExpense, type Expense } from "../../domain/expense";

interface ExpenseUseCases {
  /**
   * Adds a new expense to an existing budget
   * @param budgetId The ID of the budget for which the expense should be added
   * @param newExpense The new expense to be added
   */
  addToBudget: (
    budgetId: BudgetId,
    newExpense: NewExpense
  ) => Promise<Expense | undefined>;
}

export default ExpenseUseCases;
