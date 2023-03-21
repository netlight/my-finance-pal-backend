import type BudgetSummaryRepository from "../budgetSummaryRepository.js";
import { BudgetSummaryConverter } from "../entity/converters.js";
import { type BudgetId } from "../../../domain/budget.js";
import { BudgetSummaryModel } from "./models.js";

export const insertBudgetSummary: BudgetSummaryRepository["insert"] = async (
  summary
) => {
  const summaryEntity = BudgetSummaryConverter.toEntity(summary);
  const summaryModel = new BudgetSummaryModel(summaryEntity);
  const updatedSummary = await summaryModel.save();
  return BudgetSummaryConverter.toDomain(updatedSummary);
};

export const findBudgetSummary: BudgetSummaryRepository["find"] = async (
  budgetId: BudgetId
) => {
  const found = await BudgetSummaryModel.findOne({ id: budgetId.value });
  if (found != null) {
    return BudgetSummaryConverter.toDomain(found);
  }
};

const BudgetSummaryMongoRepository = (): BudgetSummaryRepository => ({
  insert: insertBudgetSummary,
  find: findBudgetSummary,
});

export default BudgetSummaryMongoRepository;
