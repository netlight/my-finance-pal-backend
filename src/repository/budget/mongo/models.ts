import mongoose from "mongoose";
import budgetSummarySchema from "./schema/budgetSummarySchema.js";
import type BudgetSummaryEntity from "../entity/budgetSummaryEntity.js";
import type BudgetEntity from "../entity/budgetEntity.js";

export const BudgetSummaryModel = mongoose.model<BudgetSummaryEntity>(
  "BudgetSummary",
  budgetSummarySchema,
  "budgets"
);

const FullBudgetModel = mongoose.model<BudgetEntity>(
  "Budget",
  budgetSummarySchema,
  "budgets"
);
type ReadonlyBudgetModel = Pick<typeof FullBudgetModel, "find">;

export const BudgetModel: ReadonlyBudgetModel = FullBudgetModel;
