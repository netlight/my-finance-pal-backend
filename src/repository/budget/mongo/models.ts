import mongoose from "mongoose";
import budgetSummarySchema from "./schema/budgetSummarySchema";
import type BudgetSummaryEntity from "../entity/budgetSummaryEntity";

export const BudgetSummaryModel = mongoose.model<BudgetSummaryEntity>(
  "BudgetSummary",
  budgetSummarySchema,
  "budget-summaries"
);
