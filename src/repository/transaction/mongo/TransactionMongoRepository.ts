import type TransactionRepository from "../transactionRepository.js";
import { TransactionEntityConverter } from "../entity/converters.js";
import { BudgetSummaryModel } from "../../budget/mongo/models.js";
import type BudgetSummaryEntity from "../../budget/entity/budgetSummaryEntity.js";

export const findAllTransactionsForBudget: TransactionRepository["findAllForBudget"] =
  async (budgetId) => {
    const budgetTransactions: Pick<BudgetSummaryEntity, "transactions"> | null =
      await BudgetSummaryModel.findOne({
        id: budgetId.value,
      }).select("transactions");
    if (budgetTransactions !== null) {
      return budgetTransactions.transactions.map(
        TransactionEntityConverter.toDomain
      );
    }
  };

export const insertTransaction: TransactionRepository["insert"] = async (
  budgetId,
  spent,
  transaction
) => {
  const transactionEntity = TransactionEntityConverter.toEntity(transaction);
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
    return TransactionEntityConverter.toDomain(updatedTransaction);
  }
};

const TransactionMongoRepository = (): TransactionRepository => ({
  findAllForBudget: findAllTransactionsForBudget,
  insert: insertTransaction,
});

export default TransactionMongoRepository;
