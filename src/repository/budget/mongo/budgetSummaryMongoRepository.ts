import type BudgetSummaryRepository from "../budgetSummaryRepository";
import { BudgetSummaryEntityConverter } from "../entity/converters";
import { type BudgetId } from "../../../domain/budget";
import { BudgetSummaryModel } from "./models";

export const insertBudgetSummary: BudgetSummaryRepository["insert"] = async (
  summary
) => {
  const summaryEntity = BudgetSummaryEntityConverter.toEntity(summary);
  const summaryModel = new BudgetSummaryModel(summaryEntity);
  const updatedSummary = await summaryModel.save();
  return BudgetSummaryEntityConverter.toDomain(updatedSummary);
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
