import { createBudget } from "./budgetService";
import type BudgetUseCases from "./budgetUseCases";
import { type BudgetSummary, type NewBudget } from "../../domain/budget";
import Limit from "../../domain/limit";

describe("budgetService", () => {
  it("calls the create function with the correct object", async () => {
    // GIVEN
    const newBudget: NewBudget = { name: "My Budget", limit: new Limit(250) };
    const expectedBudgetSummary: Omit<BudgetSummary, "id"> = {
      ...newBudget,
      spent: 0,
      expenses: [],
    };
    const insertBudgetMock = jest.fn();
    insertBudgetMock.mockImplementation((budgetSummary) => budgetSummary);

    const createBudgetUseCase: BudgetUseCases["createBudget"] =
      createBudget(insertBudgetMock);

    // WHEN
    const insertedBudgetSummary = await createBudgetUseCase(newBudget);

    // THEN
    expect(insertedBudgetSummary).toEqual(
      expect.objectContaining(expectedBudgetSummary)
    );
  });
});
