import { type components } from "../../../../generated/api.js";
import { type Transaction } from "../../../domain/transaction.js";

export type TransactionDto = components["schemas"]["Transaction"];

export const TransactionConverter = {
  toDto: (domain: Transaction): TransactionDto => ({
    id: domain.id.uuid,
    amount: domain.amount,
    description: domain.description,
    date: domain.date.toISOString(),
  }),
};
