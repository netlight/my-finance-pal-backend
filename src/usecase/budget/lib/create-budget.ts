import type BudgetRepository from "../../../repository/budget/BudgetRepository.js";
import {
  type Budget,
  BudgetId,
  type NewBudget,
} from "../../../models/Budget.js";

const createBudget =
  (repo: BudgetRepository) =>
  async (newBudget: NewBudget): Promise<Budget> => {
    const budget: Budget = {
      id: new BudgetId(),
      transactions: [],
      ...newBudget,
    };
    return await repo.insertBudget(budget);
  };

export default createBudget;
