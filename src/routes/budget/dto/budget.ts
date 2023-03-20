import { type components } from "../../../../generated/api.js";
import { type Budget, type NewBudget } from "../../../domain/budget.js";
import { toDate } from "../../../util/date.js";
import { TransactionConverter } from "./transaction.js";

export type BudgetDto = components["schemas"]["Budget"];
export type NewBudgetDto = components["schemas"]["NewBudget"];

export const NewBudgetConverter = {
  toDomain: (dto: NewBudgetDto): NewBudget => ({
    name: dto.name,
    amount: dto.amount,
    startDate: toDate(dto.startDate),
    endDate: toDate(dto.endDate),
  }),
};

export const BudgetConverter = {
  toDto: (domain: Budget): BudgetDto => ({
    id: domain.id.uuid,
    amount: domain.amount,
    name: domain.name,
    startDate: domain.startDate?.toISOString(),
    endDate: domain.endDate?.toISOString(),
    transactions: domain.transactions.map((transaction) =>
      TransactionConverter.toDto(transaction)
    ),
  }),
};
