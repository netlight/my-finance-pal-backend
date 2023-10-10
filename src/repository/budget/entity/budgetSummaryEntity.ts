import type ExpenseEntity from "../../expense/entity/expenseEntity";

/*
TODO 2.1 - have a look at the entity.
  Why might this be a good/bad idea when modeling the data for MongoDB?
  What would you change for an SQL db?
  What other approach could we have chosen for modeling for NoSQL?
*/

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
