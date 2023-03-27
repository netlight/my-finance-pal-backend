import type TransactionRepository from "../../repository/transaction/transactionRepository";
import type TransactionUseCases from "./transactionUseCases";
import { type Transaction } from "../../domain/transaction";
import UUID from "../../domain/uuid";
import currency from "currency.js";

const addNewTransactionToBudget: (
  findAll: TransactionRepository["findAllForBudget"],
  insert: TransactionRepository["insert"]
) => TransactionUseCases["addNewTransactionToBudget"] =
  (findAll, insert) => async (budgetId, newTransaction) => {
    const existingTransactions = await findAll(budgetId);
    if (existingTransactions === undefined) {
      return;
    }
    const transaction: Transaction = {
      ...newTransaction,
      id: new UUID(),
    };
    const updatedSpent = calculateSpent(existingTransactions, transaction);
    return await insert(budgetId, updatedSpent, transaction);
  };

const calculateSpent = (
  transactions: Transaction[],
  newTransaction: Transaction
): number =>
  transactions.reduce(
    (prev, curr) => prev.add(curr.amount),
    currency(newTransaction.amount)
  ).value;

const TransactionService: (
  transactionRepo: TransactionRepository
) => TransactionUseCases = (transactionRepo) => ({
  addNewTransactionToBudget: addNewTransactionToBudget(
    transactionRepo.findAllForBudget,
    transactionRepo.insert
  ),
});

export default TransactionService;
