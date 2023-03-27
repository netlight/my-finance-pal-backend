import type BudgetRepository from "../budgetRepository";
import { BudgetEntityConverter } from "../entity/converters";
import { BudgetSummaryModel } from "./models";

export const findBudgets: BudgetRepository["findAll"] = async () => {
  const found = await BudgetSummaryModel.find().select("-transactions");
  return found.map(BudgetEntityConverter.toDomain);
};

const BudgetMongoRepository = (): BudgetRepository => ({
  findAll: findBudgets,
});

export default BudgetMongoRepository;
