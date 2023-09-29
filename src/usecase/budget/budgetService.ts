import type BudgetSummaryRepository from "../../repository/budget/budgetSummaryRepository";
import type BudgetUseCases from "./budgetUseCases";
import type BudgetRepository from "../../repository/budget/budgetRepository";
import { type Budget, type BudgetSummary } from "../../domain/budget";
import UUID from "../../domain/uuid";

export const createBudget: (
  insertBudgetSummary: BudgetSummaryRepository["insert"],
) => BudgetUseCases["createBudget"] =
  (insertBudgetSummary) => async (newBudget) => {
    // We could also create a class for our domain objects and put functionalities s.a.
    // Budget.createFrom(newBudget) and BudgetSummary.getBudget() there
    let budgetSummary: BudgetSummary = {
      ...newBudget,
      id: new UUID(),
      spent: 0,
      expenses: [],
    };
    budgetSummary = await insertBudgetSummary(budgetSummary);
    const createdBudget: Budget = {
      id: budgetSummary.id,
      spent: budgetSummary.spent,
      name: budgetSummary.name,
      limit: budgetSummary.limit,
      startDate: budgetSummary.startDate,
      endDate: budgetSummary.endDate,
    };

    return createdBudget;
  };

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
  createBudget: createBudget(budgetSummaryRepo.insert),
  getBudgetSummary: getBudgetSummary(budgetSummaryRepo.find),
  getBudgets: getBudgets(budgetRepo.findAll),
  deleteBudget: deleteBudget(budgetRepo.delete),
});

export default BudgetService;
