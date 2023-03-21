import mongoose from "mongoose";
import type BudgetSummaryEntity from "../../budget/entity/budgetSummaryEntity.js";
import budgetSummarySchema from "../../budget/mongo/schema/budgetSummarySchema.js";

export const TransactionsModel = mongoose.model<
  Pick<BudgetSummaryEntity, "transactions" | "id">
>("Transactions", budgetSummarySchema, "budgets");
