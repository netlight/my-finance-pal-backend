import mongoose, { Schema } from "mongoose";
import type TransactionEntity from "../entity/transactionEntity.js";

const Types = Schema.Types;

const transactionSchema = new mongoose.Schema<TransactionEntity>({
  id: Types.UUID,
  description: Types.String,
  amount: Types.Number,
  date: Types.Date,
});

export default transactionSchema;
