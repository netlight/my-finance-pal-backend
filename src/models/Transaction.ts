import { v4 as uuidv4 } from "uuid";

export class TransactionId {
  uuid: string;

  constructor() {
    this.uuid = uuidv4();
  }
}

export interface Transaction {
  id: TransactionId;
  description: string;
  amount: number;
  date: Date;
}
