import type BudgetRepository from "./BudgetRepository.js";
import insertBudget from "./lib/insert-budget.js";

class BudgetMongoRepository implements BudgetRepository {
  insertBudget: BudgetRepository["insertBudget"];

  constructor() {
    this.insertBudget = insertBudget();
  }
}

export default BudgetMongoRepository;
