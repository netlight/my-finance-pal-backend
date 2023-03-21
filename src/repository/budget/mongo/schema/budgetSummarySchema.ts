import mongoose, { Schema } from "mongoose";
import type BudgetSummaryEntity from "../../entity/budgetSummaryEntity.js";
import transactionSchema from "../../../transaction/mongo/schema/transactionSchema.js";

const Types = Schema.Types;

const budgetSummarySchema = new mongoose.Schema<BudgetSummaryEntity>(
  {
    id: Types.UUID,
    name: Types.String,
    limit: Types.Number,
    spent: Types.Number,
    startDate: Types.Date,
    endDate: Types.Date,
    transactions: [transactionSchema],
  },
  { strict: true, timestamps: true }
);

export default budgetSummarySchema;
