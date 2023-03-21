import type BudgetRepository from "../budgetRepository.js";
import { BudgetEntityConverter } from "../entity/converters.js";
import { BudgetSummaryModel } from "./models.js";

export const findBudgets: BudgetRepository["findAll"] = async () => {
  const found = await BudgetSummaryModel.find().select("-transactions");
  return found.map(BudgetEntityConverter.toDomain);
};

const BudgetMongoRepository = (): BudgetRepository => ({
  findAll: findBudgets,
});

export default BudgetMongoRepository;
