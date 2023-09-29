import type BudgetUseCases from "./budgetUseCases";
import {
  type Budget,
  type BudgetId,
  type BudgetSummary,
  type NewBudget,
} from "../../domain/budget";
import type BudgetSummaryRepository from "../../repository/budget/budgetSummaryRepository";
import UUID from "../../domain/uuid";
import type BudgetRepository from "../../repository/budget/budgetRepository";

/*
 * "Classic" OOP approach of creating an implementation of the BudgetService
 * Instead of a functional approach of modularising the service, we have one
 * big class that holds all functionality. This can be more familiar and
 * straightforward, but has the disadvantage of requiring you to specify
 * all dependencies of all functions, although you might only be interested in
 * a single function with a single dependency. E.g. createBudget only cares
 * about some repository function that inserts the new budget summary.
 */
class ClassicBudgetService implements BudgetUseCases {
  constructor(
    private readonly budgetSummaryRepo: BudgetSummaryRepository,
    private readonly budgetRepo: BudgetRepository
  ) {}

  async createBudget(newBudget: NewBudget): Promise<Budget> {
    let budgetSummary: BudgetSummary = {
      ...newBudget,
      id: new UUID(),
      spent: 0,
      expenses: [],
    };
    budgetSummary = await this.budgetSummaryRepo.insert(budgetSummary);

    return {
      id: budgetSummary.id,
      spent: budgetSummary.spent,
      name: budgetSummary.name,
      limit: budgetSummary.limit,
      startDate: budgetSummary.startDate,
      endDate: budgetSummary.endDate,
    };
  }

  async deleteBudget(budgetId: BudgetId): Promise<{ deleted: boolean }> {
    return await this.budgetRepo.delete(budgetId);
  }

  async getBudgetSummary(
    budgetId: BudgetId
  ): Promise<BudgetSummary | undefined> {
    return await this.budgetSummaryRepo.find(budgetId);
  }

  async getBudgets(): Promise<Budget[]> {
    return await this.budgetRepo.findAll();
  }
}

export default ClassicBudgetService;
