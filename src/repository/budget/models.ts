import mongoose from "mongoose";
import budgetSchema from "./schema/budgetSchema.js";
import transactionSchema from "./schema/transactionSchema.js";
import type BudgetEntity from "./entity/budgetEntity.js";
import type TransactionEntity from "./entity/transactionEntity.js";

export const BudgetModel = mongoose.model<BudgetEntity>("Budget", budgetSchema);
export const TransactionModel = mongoose.model<TransactionEntity>(
  "Transaction",
  transactionSchema
);
