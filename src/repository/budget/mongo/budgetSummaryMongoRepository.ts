import type BudgetSummaryRepository from "../budgetSummaryRepository";
import { BudgetSummaryEntityConverter } from "../entity/converters";
import { type BudgetId } from "../../../domain/budget";
import { BudgetSummaryModel } from "./models";

// TODO 4. add insertBudgetSummary function

export const findBudgetSummary: BudgetSummaryRepository["find"] = async (
  budgetId: BudgetId
) => {
  const found = await BudgetSummaryModel.findOne({ id: budgetId.value });
  if (found != null) {
    return BudgetSummaryEntityConverter.toDomain(found);
  }
};

const BudgetSummaryMongoRepository = (): BudgetSummaryRepository => ({
  // TODO 5. add insertBudgetSummary to repository
  find: findBudgetSummary,
});

export default BudgetSummaryMongoRepository;
