import type BudgetRepository from "../budgetRepository";
import { BudgetEntityConverter } from "../entity/converters";
import { BudgetSummaryModel } from "./models";

export const findBudgets: BudgetRepository["findAll"] = async () => {
  const found = await BudgetSummaryModel.find().select("-expenses");
  return found.map(BudgetEntityConverter.toDomain);
};

export const deleteBudget: BudgetRepository["delete"] = async (budgetId) => {
  const deleted = await BudgetSummaryModel.deleteOne({ id: budgetId.value });
  return { deleted: deleted.deletedCount > 0 };
};

const BudgetMongoRepository = (): BudgetRepository => ({
  findAll: findBudgets,
  delete: deleteBudget,
});

export default BudgetMongoRepository;
