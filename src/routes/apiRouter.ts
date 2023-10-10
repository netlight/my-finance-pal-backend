import { Router } from "express";
import BudgetRouter from "./budget/budgetRouter";
import type BudgetUseCases from "../usecase/budget/budgetUseCases";
import ExpenseRouter from "./expense/expenseRouter";
import type ExpenseUseCases from "../usecase/expense/expenseUseCases";

// Express router bundling all individual routes of our app
const ApiRouter = (
  budgetUseCases: BudgetUseCases,
  expenseUseCases: ExpenseUseCases,
): Router => {
  const router = Router();
  router.use(BudgetRouter(budgetUseCases));
  router.use(ExpenseRouter(expenseUseCases));

  return router;
};

export default ApiRouter;
