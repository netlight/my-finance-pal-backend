import {
  type Transaction,
  TransactionId,
} from "../../../domain/transaction.js";
import type TransactionEntity from "./transactionEntity.js";
import { type Budget, BudgetId } from "../../../domain/budget.js";
import type BudgetEntity from "./budgetEntity.js";

export const TransactionConverter = {
  toEntity: (domain: Transaction): TransactionEntity => ({
    id: domain.id.uuid,
    description: domain.description,
    amount: domain.amount,
    date: domain.date,
  }),
  toDomain: (entity: TransactionEntity): Transaction => ({
    id: new TransactionId(entity.id),
    description: entity.description,
    amount: entity.amount,
    date: entity.date,
  }),
};

export const BudgetConverter = {
  toEntity: (domain: Budget): BudgetEntity => ({
    id: domain.id.uuid,
    name: domain.name,
    amount: domain.amount,
    startDate: domain.startDate,
    endDate: domain.endDate,
    transactions: domain.transactions.map(TransactionConverter.toEntity),
  }),
  toDomain: (entity: BudgetEntity): Budget => ({
    id: new BudgetId(entity.id),
    name: entity.name,
    amount: entity.amount,
    startDate: entity.startDate,
    endDate: entity.endDate,
    transactions: entity.transactions.map(TransactionConverter.toDomain),
  }),
};
