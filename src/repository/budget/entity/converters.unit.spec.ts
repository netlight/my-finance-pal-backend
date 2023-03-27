import { type Budget } from "src/domain/budget.js";
import Limit from "src/domain/limit.js";
import UUID from "src/domain/uuid.js";
import type BudgetEntity from "./budgetEntity.js";
import { BudgetEntityConverter } from "./converters.js";

const testId = "2d223edd-f5a0-472b-945f-c0e0d60476f0";

describe("converters", () => {
  beforeAll(() => {});
  it("converts budget entity successfully", async () => {
    // GIVEN
    const testBudgetEntity: BudgetEntity = {
      id: testId,
      name: "My Budget",
      limit: 250,
      spent: 0,
    };
    const expectedBudgetDomain: Budget = {
      ...testBudgetEntity,
      id: new UUID(testBudgetEntity.id),
      limit: new Limit(testBudgetEntity.limit),
    };

    // WHEN
    const convertedBudget = BudgetEntityConverter.toDomain(testBudgetEntity);

    // THEN
    expect(convertedBudget).toEqual(expectedBudgetDomain);
  });
});
