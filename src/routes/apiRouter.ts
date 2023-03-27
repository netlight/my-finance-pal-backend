import { Router } from "express";
import BudgetRouter from "./budget/budgetRouter";
import type BudgetUseCases from "../usecase/budget/budgetUseCases";
import TransactionRouter from "./transaction/transactionRouter";
import type TransactionUseCases from "../usecase/transaction/transactionUseCases";

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
