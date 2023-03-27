import { type Transaction } from "../../domain/transaction";
import { type BudgetId } from "../../domain/budget";

interface TransactionRepository {
  findAllForBudget: (budgetId: BudgetId) => Promise<Transaction[] | undefined>;
  insert: (
    budgetId: BudgetId,
    spent: number,
    transaction: Transaction
  ) => Promise<Transaction | undefined>;
}

export default TransactionRepository;
