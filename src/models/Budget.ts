import { v4 as uuidv4 } from "uuid";
import { type Transaction } from "./Transaction.js";

export class BudgetId {
  uuid: string;

  constructor() {
    this.uuid = uuidv4();
  }
}

export interface NewBudget {
  name: string;
  amount: number;
  startDate?: Date;
  endDate?: Date;
}

export interface Budget extends NewBudget {
  id: BudgetId;
  transactions: Transaction[];
}
