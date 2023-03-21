import { type Budget, type BudgetSummary } from "../../../domain/budget.js";
import type BudgetSummaryEntity from "./budgetSummaryEntity.js";
import UUID from "../../../domain/uuid.js";
import Limit from "../../../domain/limit.js";
import type BudgetEntity from "./budgetEntity.js";
import { TransactionEntityConverter } from "../../transaction/entity/converters.js";

export const BudgetEntityConverter = {
  toDomain: (entity: BudgetEntity): Budget => ({
    id: new UUID(entity.id),
    name: entity.name,
    limit: new Limit(entity.limit),
    spent: entity.spent,
    startDate: entity.startDate,
    endDate: entity.endDate,
  }),
};

export const BudgetSummaryEntityConverter = {
  toEntity: (domain: BudgetSummary): BudgetSummaryEntity => ({
    id: domain.id.value,
    name: domain.name,
    limit: domain.limit.amount,
    spent: domain.spent,
    startDate: domain.startDate,
    endDate: domain.endDate,
    transactions: domain.transactions.map(TransactionEntityConverter.toEntity),
  }),
  toDomain: (entity: BudgetSummaryEntity): BudgetSummary => ({
    id: new UUID(entity.id),
    name: entity.name,
    limit: new Limit(entity.limit),
    spent: entity.spent,
    startDate: entity.startDate,
    endDate: entity.endDate,
    transactions: entity.transactions.map(TransactionEntityConverter.toDomain),
  }),
};
