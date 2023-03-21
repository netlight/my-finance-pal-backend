import mongoose from "mongoose";
import budgetSchema from "./schema/budgetSchema.js";
import type BudgetSummaryEntity from "../entity/budgetSummaryEntity.js";
import type BudgetEntity from "../entity/budgetEntity.js";

export const BudgetSummaryModel = mongoose.model<BudgetSummaryEntity>(
  "BudgetSummary",
  budgetSchema,
  "budgets"
);

const FullBudgetModel = mongoose.model<BudgetEntity>(
  "Budget",
  budgetSchema,
  "budgets"
);
type ReadonlyBudgetModel = Pick<typeof FullBudgetModel, "find">;

export const BudgetModel: ReadonlyBudgetModel = FullBudgetModel;
