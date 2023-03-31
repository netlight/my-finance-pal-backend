import { type NewExpenseDto, type ExpenseDto } from "./expense";
import { type NewExpense, type Expense } from "../../../domain/expense";

export const NewExpenseDtoConverter = {
  toDomain: (dto: NewExpenseDto): NewExpense => ({
    description: dto.description,
    date: new Date(dto.date),
    amount: dto.amount,
  }),
};

export const ExpenseDtoConverter = {
  toDto: (domain: Expense): ExpenseDto => ({
    id: domain.id.value,
    amount: domain.amount,
    description: domain.description,
    date: domain.date.toISOString(),
  }),
};
