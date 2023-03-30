import {
  type Budget,
  type BudgetSummary,
  type NewBudget,
} from "../../../domain/budget";
import Limit from "../../../domain/limit";
import { toDate, toIsoDate } from "../../../util/date";
import {
  type BudgetDto,
  type BudgetSummaryDto,
  type NewBudgetDto,
} from "./budget";
import { TransactionDtoConverter } from "../../transaction/dto/converters";

export const NewBudgetDtoConverter = {
  toDomain: (dto: NewBudgetDto): NewBudget => ({
    name: dto.name,
    limit: new Limit(dto.limit),
    startDate: toDate(dto.startDate),
    endDate: toDate(dto.endDate),
  }),
};

export const BudgetDtoConverter = {
  toDto: (domain: Budget): BudgetDto => ({
    id: domain.id.value,
    limit: domain.limit.amount,
    spent: domain.spent,
    name: domain.name,
    startDate: toIsoDate(domain.startDate),
    endDate: toIsoDate(domain.endDate),
  }),
};

export const BudgetSummaryDtoConverter = {
  toDto: (domain: BudgetSummary): BudgetSummaryDto => ({
    id: domain.id.value,
    limit: domain.limit.amount,
    spent: domain.spent,
    name: domain.name,
    startDate: toIsoDate(domain.startDate),
    endDate: toIsoDate(domain.endDate),
    transactions: domain.transactions.map(TransactionDtoConverter.toDto),
  }),
};
