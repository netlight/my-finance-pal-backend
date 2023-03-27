import { type Transaction } from "../../../domain/transaction";
import UUID from "../../../domain/uuid";
import type TransactionEntity from "./transactionEntity";

export const TransactionEntityConverter = {
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
