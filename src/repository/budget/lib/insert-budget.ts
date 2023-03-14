import { type Budget } from "../../../models/Budget.js";

const insertBudget =
  () =>
  async (budget: Budget): Promise<Budget> => {
    return budget;
  };

export default insertBudget;
