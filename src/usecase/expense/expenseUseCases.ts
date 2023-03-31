import { type BudgetId } from "../../domain/budget";
import { type NewExpense, type Expense } from "../../domain/expense";

interface ExpenseUseCases {
  addToBudget: (
    budgetId: BudgetId,
    newExpense: NewExpense
  ) => Promise<Expense | undefined>;
}

export default ExpenseUseCases;
