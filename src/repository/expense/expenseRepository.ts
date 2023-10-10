import { type Expense } from "../../domain/expense";
import { type BudgetId } from "../../domain/budget";

interface ExpenseRepository {
  findAllForBudget: (budgetId: BudgetId) => Promise<Expense[] | undefined>;
  insert: (
    budgetId: BudgetId,
    spent: number,
    expense: Expense,
  ) => Promise<Expense | undefined>;
}

export default ExpenseRepository;
