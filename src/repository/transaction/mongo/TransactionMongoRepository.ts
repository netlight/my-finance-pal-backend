import type TransactionRepository from "../transactionRepository.js";
import { TransactionConverter } from "../entity/converters.js";
import { BudgetSummaryModel } from "../../budget/mongo/models.js";
import { TransactionsModel } from "./models.js";

export const findAllTransactionsForBudget: TransactionRepository["findAllForBudget"] =
  async (budgetId) => {
    const budgetTransactions = await TransactionsModel.findOne({
      id: budgetId.value,
    });
    if (budgetTransactions !== null) {
      return budgetTransactions.transactions.map(TransactionConverter.toDomain);
    }
  };

export const insertTransaction: TransactionRepository["insert"] = async (
  budgetId,
  spent,
  transaction
) => {
  const transactionEntity = TransactionConverter.toEntity(transaction);
  const updatedSummary = await BudgetSummaryModel.findOneAndUpdate(
    { id: budgetId.value },
    {
      $set: { spent },
      $push: { transactions: transactionEntity },
    },
    { returnDocument: "after" }
  );
  const updatedTransaction = updatedSummary?.transactions.find(
    (t) => t.id === transaction.id.value
  );
  if (updatedTransaction !== undefined) {
    return TransactionConverter.toDomain(updatedTransaction);
  }
};

const TransactionMongoRepository = (): TransactionRepository => ({
  findAllForBudget: findAllTransactionsForBudget,
  insert: insertTransaction,
});

export default TransactionMongoRepository;
