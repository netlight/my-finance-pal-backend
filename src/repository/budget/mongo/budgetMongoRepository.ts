import type BudgetRepository from "../budgetRepository.js";
import { BudgetEntityConverter } from "../entity/converters.js";
import { BudgetModel } from "./models.js";

export const findBudgets: BudgetRepository["findAll"] = async () => {
  const found = await BudgetModel.find().select("-transactions");
  return found.map(BudgetEntityConverter.toDomain);
};

const BudgetMongoRepository = (): BudgetRepository => ({
  findAll: findBudgets,
});

export default BudgetMongoRepository;
