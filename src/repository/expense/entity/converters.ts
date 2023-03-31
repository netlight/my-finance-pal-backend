import { type Expense } from "../../../domain/expense";
import UUID from "../../../domain/uuid";
import type ExpenseEntity from "./expenseEntity";

export const ExpenseEntityConverter = {
  toEntity: (domain: Expense): ExpenseEntity => ({
    id: domain.id.value,
    description: domain.description,
    amount: domain.amount,
    date: domain.date,
  }),
  toDomain: (entity: ExpenseEntity): Expense => ({
    id: new UUID(entity.id),
    description: entity.description,
    amount: entity.amount,
    date: entity.date,
  }),
};
