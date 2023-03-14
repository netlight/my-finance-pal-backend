import { Router } from "express";
import type BudgetUseCases from "../../usecase/budget/BudgetUseCases.js";
import createBudget from "./create-budget.js";

const paths = {
  CREATE_BUDGET: "/",
};

const BudgetRouter = (budgetUseCases: BudgetUseCases): Router => {
  const router = Router();
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post(paths.CREATE_BUDGET, createBudget(budgetUseCases));

  return router;
};

export default BudgetRouter;
