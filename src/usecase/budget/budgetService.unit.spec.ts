import type BudgetUseCases from "./budgetUseCases.js";
import { type BudgetSummary, type NewBudget } from "../../domain/budget.js";
import Limit from "../../domain/limit.js";
import { createBudget } from "./budgetService.js";

describe("budgetService", () => {
  beforeAll(() => {});
  it("calls the create function with the correct object", async () => {
    const newBudget: NewBudget = { name: "My Budget", limit: new Limit(250) };
    const expectedBudgetSummary: Omit<BudgetSummary, "id"> = {
      ...newBudget,
      spent: 0,
      transactions: [],
    };
    const insertBudgetMock = jest.fn();
    const testSubject: BudgetUseCases["createBudget"] =
      createBudget(insertBudgetMock);
    insertBudgetMock.mockImplementation((budgetSummary) => budgetSummary);

    const insertedBudgetSummary = await testSubject(newBudget);

    expect(insertedBudgetSummary).toEqual(
      expect.objectContaining(expectedBudgetSummary)
    );
  });
});
