import type TransactionEntity from "../../transaction/entity/transactionEntity.js";

interface BudgetSummaryEntity {
  id: string;
  name: string;
  limit: number;
  spent: number;
  startDate?: Date;
  endDate?: Date;
  transactions: TransactionEntity[];
}

export default BudgetSummaryEntity;
