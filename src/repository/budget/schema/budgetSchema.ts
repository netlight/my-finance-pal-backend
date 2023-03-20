import mongoose, { Schema } from "mongoose";
import transactionSchema from "./transactionSchema.js";
import type BudgetEntity from "../entity/budgetEntity.js";

const Types = Schema.Types;

const budgetSchema = new mongoose.Schema<BudgetEntity>({
  id: Types.UUID,
  name: Types.String,
  amount: Types.Number,
  startDate: Types.Date,
  endDate: Types.Date,
  transactions: [transactionSchema],
});

export default budgetSchema;
