import { type Transaction } from "../../domain/transaction.js";
import { type BudgetId } from "../../domain/budget.js";

interface TransactionRepository {
  findAllForBudget: (budgetId: BudgetId) => Promise<Transaction[] | undefined>;
  insert: (
    budgetId: BudgetId,
    spent: number,
    transaction: Transaction
  ) => Promise<Transaction | undefined>;
}

export default TransactionRepository;
