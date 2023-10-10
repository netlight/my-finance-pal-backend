import type BudgetSummaryRepository from "../../repository/budget/budgetSummaryRepository";
import type BudgetUseCases from "./budgetUseCases";
import type BudgetRepository from "../../repository/budget/budgetRepository";

// TODO 3.2. - specify the type of a new function "createBudget"
// TODO 3.3. - implement the "createBudget" use case function

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
  // TODO 3.4. - add the "createBudget" use case function to the service
  getBudgetSummary: getBudgetSummary(budgetSummaryRepo.find),
  getBudgets: getBudgets(budgetRepo.findAll),
  deleteBudget: deleteBudget(budgetRepo.delete),
});

export default BudgetService;
