interface BudgetEntity {
  id: string;
  name: string;
  limit: number;
  spent: number;
  startDate?: Date;
  endDate?: Date;
}

export default BudgetEntity;
