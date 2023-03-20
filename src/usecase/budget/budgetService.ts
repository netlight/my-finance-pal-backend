import { type Budget, BudgetId } from "../../domain/budget.js";
import type BudgetRepository from "../../repository/budget/budgetRepository.js";
import type BudgetUseCases from "./budgetUseCases.js";

export const createBudget: (
  repo: BudgetRepository
) => BudgetUseCases["createBudget"] = (repo) => async (newBudget) => {
  const budget: Budget = {
    id: new BudgetId(),
    transactions: [],
    ...newBudget,
  };
  return await repo.insertBudget(budget);
};

const BudgetService: (repo: BudgetRepository) => BudgetUseCases = (repo) => ({
  createBudget: createBudget(repo),
});

export default BudgetService;
