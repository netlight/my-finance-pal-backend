import mongoose, { Schema } from "mongoose";
import type BudgetSummaryEntity from "../../entity/budgetSummaryEntity";
import expenseSchema from "../../../expense/mongo/schema/expenseSchema";

const Types = Schema.Types;

const budgetSummarySchema = new mongoose.Schema<BudgetSummaryEntity>(
  {
    id: Types.UUID,
    name: Types.String,
    limit: Types.Number,
    spent: Types.Number,
    startDate: Types.Date,
    endDate: Types.Date,
    expenses: [expenseSchema],
  },
  { strict: true, timestamps: true, versionKey: false }
);

export default budgetSummarySchema;
