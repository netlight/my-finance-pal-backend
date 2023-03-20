import type BudgetRepository from "./budgetRepository.js";
import { BudgetConverter } from "./entity/converters.js";
import { BudgetModel } from "./models.js";

export const insertBudget: BudgetRepository["insertBudget"] = async (
  budget
) => {
  const entity = BudgetConverter.toEntity(budget);
  const model = new BudgetModel(entity);
  const saved = await model.save();
  return BudgetConverter.toDomain(saved);
};

const BudgetMongoRepository: () => BudgetRepository = () => ({
  insertBudget,
});

export default BudgetMongoRepository;
