import type BudgetSummaryRepository from "../../repository/budget/budgetSummaryRepository";
import type BudgetUseCases from "./budgetUseCases";
import type BudgetRepository from "../../repository/budget/budgetRepository";
import { type Budget, type BudgetSummary } from "../../domain/budget";
import UUID from "../../domain/uuid";

// TODO 6. specify the type of CreateBudgetUseCase
// TODO 7. implement the createBudget use case function

export const getBudgetSummary: (
  findBudget: BudgetSummaryRepository["find"],
) => BudgetUseCases["getBudgetSummary"] = (findBudget) => async (budgetId) => {
  return await findBudget(budgetId);
};

export const getBudgets: (
  findBudgets: BudgetRepository["findAll"],
) => BudgetUseCases["getBudgets"] = (findAll) => async () => {
  return await findAll();
};

export const deleteBudget: (
  deleteFromPersistence: BudgetRepository["delete"],
) => BudgetUseCases["deleteBudget"] =
  (deleteFromPersistence) => async (budgetId) => {
    return await deleteFromPersistence(budgetId);
  };

const BudgetService: (
  budgetSummaryRepo: BudgetSummaryRepository,
  budgetRepo: BudgetRepository,
) => BudgetUseCases = (budgetSummaryRepo, budgetRepo) => ({
  // TODO 8. add createBudget use case to the service
  getBudgetSummary: getBudgetSummary(budgetSummaryRepo.find),
  getBudgets: getBudgets(budgetRepo.findAll),
  deleteBudget: deleteBudget(budgetRepo.delete),
});

export default BudgetService;
