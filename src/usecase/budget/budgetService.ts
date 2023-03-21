import { type BudgetSummary } from "../../domain/budget.js";
import type BudgetSummaryRepository from "../../repository/budget/budgetSummaryRepository.js";
import type BudgetUseCases from "./budgetUseCases.js";
import UUID from "../../domain/uuid.js";
import type BudgetRepository from "../../repository/budget/budgetRepository.js";

export const createBudget: (
  insertBudget: BudgetSummaryRepository["insert"]
) => BudgetUseCases["createBudget"] = (insertBudget) => async (newBudget) => {
  const budgetSummary: BudgetSummary = {
    ...newBudget,
    id: new UUID(),
    spent: 0,
    transactions: [],
  };
  return await insertBudget(budgetSummary);
};

export const getBudgetSummary: (
  findBudget: BudgetSummaryRepository["find"]
) => BudgetUseCases["getBudgetSummary"] = (findBudget) => async (budgetId) => {
  return await findBudget(budgetId);
};

export const getBudgets: (
  findBudgets: BudgetRepository["findAll"]
) => BudgetUseCases["getBudgets"] = (findAll) => async () => {
  return await findAll();
};

const BudgetService: (
  budgetSummaryRepo: BudgetSummaryRepository,
  budgetRepo: BudgetRepository
) => BudgetUseCases = (budgetSummaryRepo, budgetRepo) => ({
  createBudget: createBudget(budgetSummaryRepo.insert),
  getBudgetSummary: getBudgetSummary(budgetSummaryRepo.find),
  getBudgets: getBudgets(budgetRepo.findAll),
});

export default BudgetService;
