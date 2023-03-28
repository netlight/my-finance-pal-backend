import { type BudgetSummary, type NewBudget } from "src/domain/budget";
import Limit from "src/domain/limit";
import { createBudget } from "./budgetService";
import type BudgetUseCases from "./budgetUseCases";

describe("budgetService", () => {
  it("calls the create function with the correct object", async () => {
    // GIVEN
    const newBudget: NewBudget = { name: "My Budget", limit: new Limit(250) };
    const expectedBudgetSummary: Omit<BudgetSummary, "id"> = {
      ...newBudget,
      spent: 0,
      transactions: [],
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
