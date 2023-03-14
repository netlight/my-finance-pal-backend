import { Router } from "express";
import type BudgetUseCases from "../usecase/budget/BudgetUseCases.js";
import BudgetRouter from "./budget/BudgetRouter.js";

const paths = {
  BUDGETS: "/budgets",
};

const ApiRouter = (budgetUseCases: BudgetUseCases): Router => {
  const router = Router();
  router.use(paths.BUDGETS, BudgetRouter(budgetUseCases));

  return router;
};

export default ApiRouter;
