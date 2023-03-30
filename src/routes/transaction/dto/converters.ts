import { type NewTransactionDto, type TransactionDto } from "./transaction";
import {
  type NewTransaction,
  type Transaction,
} from "../../../domain/transaction";

export const NewTransactionDtoConverter = {
  toDomain: (dto: NewTransactionDto): NewTransaction => ({
    description: dto.description,
    date: new Date(dto.date),
    amount: dto.amount,
  }),
};

export const TransactionDtoConverter = {
  toDto: (domain: Transaction): TransactionDto => ({
    id: domain.id.value,
    amount: domain.amount,
    description: domain.description,
    date: domain.date.toISOString(),
  }),
};
