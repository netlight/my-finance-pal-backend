import { type Budget, BudgetId } from "../../domain/budget.js";
import type BudgetRepository from "../../repository/budget/budgetRepository.js";
import type BudgetUseCases from "./budgetUseCases.js";

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

const BudgetService: (repo: BudgetRepository) => BudgetUseCases = (repo) => ({
  createBudget: createBudget(repo.insertBudget),
  getBudget: getBudget(repo.findBudget),
});

export default BudgetService;
