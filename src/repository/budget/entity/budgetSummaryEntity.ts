import type ExpenseEntity from "../../expense/entity/expenseEntity";

interface BudgetSummaryEntity {
  id: string;
  name: string;
  limit: number;
  spent: number;
  startDate?: Date;
  endDate?: Date;
  expenses: ExpenseEntity[];
}

export default BudgetSummaryEntity;
