import { v4 as uuidv4 } from "uuid";
import { type Transaction } from "./transaction.js";

export class BudgetId {
  uuid: string;

  constructor(uuid?: string) {
    this.uuid = uuid ?? uuidv4();
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
