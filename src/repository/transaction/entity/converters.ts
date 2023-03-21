import { type Transaction } from "../../../domain/transaction.js";
import UUID from "../../../domain/uuid.js";
import type TransactionEntity from "./transactionEntity.js";

export const TransactionConverter = {
  toEntity: (domain: Transaction): TransactionEntity => ({
    id: domain.id.value,
    description: domain.description,
    amount: domain.amount,
    date: domain.date,
  }),
  toDomain: (entity: TransactionEntity): Transaction => ({
    id: new UUID(entity.id),
    description: entity.description,
    amount: entity.amount,
    date: entity.date,
  }),
};
