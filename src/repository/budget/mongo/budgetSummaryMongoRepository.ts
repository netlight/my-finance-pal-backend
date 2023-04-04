import type BudgetSummaryRepository from "../budgetSummaryRepository";
import { BudgetSummaryEntityConverter } from "../entity/converters";
import { type BudgetId } from "../../../domain/budget";
import { BudgetSummaryModel } from "./models";

export const insertBudgetSummary: BudgetSummaryRepository["insert"] = async (
  budgetSummary
) => {
  const budgetSummaryEntity =
    BudgetSummaryEntityConverter.toEntity(budgetSummary);
  const budgetSummaryModel = new BudgetSummaryModel(budgetSummaryEntity);
  const insertedSummary = await budgetSummaryModel.save();

  return BudgetSummaryEntityConverter.toDomain(insertedSummary);
};

export const findBudgetSummary: BudgetSummaryRepository["find"] = async (
  budgetId: BudgetId
) => {
  const found = await BudgetSummaryModel.findOne({ id: budgetId.value });
  if (found != null) {
    return BudgetSummaryEntityConverter.toDomain(found);
  }
};

const BudgetSummaryMongoRepository = (): BudgetSummaryRepository => ({
  insert: insertBudgetSummary,
  find: findBudgetSummary,
});

export default BudgetSummaryMongoRepository;
