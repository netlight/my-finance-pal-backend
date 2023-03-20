import { Router } from "express";
import BudgetRouter from "./budget/budgetRouter.js";
import type BudgetUseCases from "../usecase/budget/budgetUseCases.js";

const paths = {
  BUDGETS: "/budgets",
};

const ApiRouter = (budgetUseCases: BudgetUseCases): Router => {
  const router = Router();
  router.use(paths.BUDGETS, BudgetRouter(budgetUseCases));

  return router;
};

export default ApiRouter;
