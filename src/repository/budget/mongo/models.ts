import mongoose from "mongoose";
import budgetSummarySchema from "./schema/budgetSummarySchema.js";
import type BudgetSummaryEntity from "../entity/budgetSummaryEntity.js";

export const BudgetSummaryModel = mongoose.model<BudgetSummaryEntity>(
  "BudgetSummary",
  budgetSummarySchema,
  "budgets"
);
