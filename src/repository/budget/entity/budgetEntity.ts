import type TransactionEntity from "./transactionEntity.js";

interface BudgetEntity {
  id: string;
  name: string;
  amount: number;
  startDate?: Date;
  endDate?: Date;
  transactions: TransactionEntity[];
}

export default BudgetEntity;
