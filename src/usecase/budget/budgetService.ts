import { type Budget, BudgetId } from "../../domain/budget.js";
import type BudgetRepository from "../../repository/budget/budgetRepository.js";
import type BudgetUseCases from "./budgetUseCases.js";
import { findBudget } from "../../repository/budget/budgetMongoRepository.js";

export const createBudget: (
  insertBudget: BudgetRepository["insertBudget"]
) => BudgetUseCases["createBudget"] = (insertBudget) => async (newBudget) => {
  const budget: Budget = {
    id: new BudgetId(),
    transactions: [],
    ...newBudget,
  };
  return await insertBudget(budget);
};

export const getBudget: (
  findBudget: BudgetRepository["findBudget"]
) => BudgetUseCases["getBudget"] = (findBudget) => async (budgetId) => {
  return await findBudget(budgetId);
};

export const getBudgets: (
  findBudgets: BudgetRepository["findBudgets"]
) => BudgetUseCases["getBudgets"] = (findBudgets) => async () => {
  return await findBudgets();
};

const BudgetService: (repo: BudgetRepository) => BudgetUseCases = (repo) => ({
  createBudget: createBudget(repo.insertBudget),
  getBudget: getBudget(repo.findBudget),
  getBudgets: getBudgets(repo.findBudgets),
});

export default BudgetService;
