import mongoose from "mongoose";
import type BudgetSummaryEntity from "../../budget/entity/budgetSummaryEntity.js";
import budgetSchema from "../../budget/mongo/schema/budgetSchema.js";

export const TransactionsModel = mongoose.model<
  Pick<BudgetSummaryEntity, "transactions" | "id">
>("Transactions", budgetSchema, "budgets");
