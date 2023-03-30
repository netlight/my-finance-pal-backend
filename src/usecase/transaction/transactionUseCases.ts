import { type BudgetId } from "../../domain/budget";
import {
  type NewTransaction,
  type Transaction,
} from "../../domain/transaction";

interface TransactionUseCases {
  addNewTransactionToBudget: (
    budgetId: BudgetId,
    newTransaction: NewTransaction
  ) => Promise<Transaction | undefined>;
}

export default TransactionUseCases;
