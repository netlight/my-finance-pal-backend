import { type BudgetSummary } from "../../domain/budget";
import type BudgetSummaryRepository from "../../repository/budget/budgetSummaryRepository";
import type BudgetUseCases from "./budgetUseCases";
import UUID from "../../domain/uuid";
import type BudgetRepository from "../../repository/budget/budgetRepository";

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

export const deleteBudget: (
  deleteFromPersistence: BudgetRepository["delete"]
) => BudgetUseCases["deleteBudget"] =
  (deleteFromPersistence) => async (budgetId) => {
    return await deleteFromPersistence(budgetId);
  };

const BudgetService: (
  budgetSummaryRepo: BudgetSummaryRepository,
  budgetRepo: BudgetRepository
) => BudgetUseCases = (budgetSummaryRepo, budgetRepo) => ({
  createBudget: createBudget(budgetSummaryRepo.insert),
  getBudgetSummary: getBudgetSummary(budgetSummaryRepo.find),
  getBudgets: getBudgets(budgetRepo.findAll),
  deleteBudget: deleteBudget(budgetRepo.delete),
});

export default BudgetService;
