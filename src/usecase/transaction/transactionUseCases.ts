import { type BudgetId } from "../../domain/budget.js";
import {
  type NewTransaction,
  type Transaction,
} from "../../domain/transaction.js";

interface TransactionUseCases {
  addNewTransactionToBudget: (
    budgetId: BudgetId,
    newTransaction: NewTransaction
  ) => Promise<Transaction | undefined>;
}

export default TransactionUseCases;
