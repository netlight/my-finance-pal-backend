import mongoose, { Schema } from "mongoose";
import type TransactionEntity from "../../entity/transactionEntity";

const Types = Schema.Types;

const transactionSchema = new mongoose.Schema<TransactionEntity>(
  {
    id: Types.UUID,
    description: Types.String,
    amount: Types.Number,
    date: Types.Date,
  },
  { strict: true, _id: false }
);

export default transactionSchema;
