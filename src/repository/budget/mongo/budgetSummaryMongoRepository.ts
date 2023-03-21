import type BudgetSummaryRepository from "../budgetSummaryRepository.js";
import { BudgetSummaryEntityConverter } from "../entity/converters.js";
import { type BudgetId } from "../../../domain/budget.js";
import { BudgetSummaryModel } from "./models.js";

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
