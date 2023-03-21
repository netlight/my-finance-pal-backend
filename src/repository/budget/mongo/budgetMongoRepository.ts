import type BudgetRepository from "../budgetRepository.js";
import { BudgetConverter } from "../entity/converters.js";
import { BudgetModel } from "./models.js";

export const findBudgets: BudgetRepository["findAll"] = async () => {
  const found = await BudgetModel.find().select("-transactions");
  return found.map(BudgetConverter.toDomain);
};

const BudgetMongoRepository = (): BudgetRepository => ({
  findAll: findBudgets,
});

export default BudgetMongoRepository;
