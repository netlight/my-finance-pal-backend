import { createBudget } from "./budgetService.js";
import type BudgetUseCases from "./budgetUseCases.js";
import type BudgetSummaryRepository from "../../repository/budget/budgetSummaryRepository.js";
import { BudgetSummary, type NewBudget } from "../../domain/budget.js";
import Limit from "../../domain/limit.js";
import BudgetService from "./budgetService.js";

describe("budgetService", () => {
  
  beforeAll(() => {});
  it("calls the create function with the correct object", async () => {
    const newBudget: NewBudget = { name: "My Budget", limit: new Limit(250) };
    const expectedBudgetSummary: BudgetSummary = {...newBudget, spent: 0, transactions: [], id: ''}
    (createBudget: BudgetUseCases["createBudget"]) => (newBudget) =>
  });
});
