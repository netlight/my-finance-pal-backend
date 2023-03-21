import { Router } from "express";
import BudgetRouter from "./budget/budgetRouter.js";
import type BudgetUseCases from "../usecase/budget/budgetUseCases.js";
import TransactionRouter from "./transaction/transactionRouter.js";
import type TransactionUseCases from "../usecase/transaction/transactionUseCases.js";

const ApiRouter = (
  budgetUseCases: BudgetUseCases,
  transactionUseCases: TransactionUseCases
): Router => {
  const router = Router();
  router.use(BudgetRouter(budgetUseCases));
  router.use(TransactionRouter(transactionUseCases));

  return router;
};

export default ApiRouter;
