import createBudget from "./lib/create-budget.js";
import { type Budget, type NewBudget } from "../../models/Budget.js";
import type BudgetRepository from "../../repository/budget/BudgetRepository.js";

class BudgetUseCases {
  createBudget: (budget: NewBudget) => Promise<Budget>;

  constructor(budgetRepository: BudgetRepository) {
    this.createBudget = createBudget(budgetRepository);
  }
}

export default BudgetUseCases;
