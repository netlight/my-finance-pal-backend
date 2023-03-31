import type ExpenseUseCases from "../../usecase/expense/expenseUseCases";
import { type Request, type Response, Router } from "express";
import { NewExpenseDtoConverter, ExpenseDtoConverter } from "./dto/converters";
import UUID from "../../domain/uuid";
import { StatusCodes } from "http-status-codes";
import toExpressPath from "../toExpressPath";
import apiPaths from "../apiPaths";
import asyncHandler from "express-async-handler";

export const createExpense =
  (addExpenseToBudget: ExpenseUseCases["addToBudget"]) =>
  async (req: Request, res: Response): Promise<void> => {
    const newExpenseDto = req.body;
    const budgetId: string = req.params.budgetId;
    const newExpense = NewExpenseDtoConverter.toDomain(newExpenseDto);
    const expense = await addExpenseToBudget(new UUID(budgetId), newExpense);
    if (expense === undefined) {
      res.sendStatus(StatusCodes.NOT_FOUND);
    } else {
      res.status(StatusCodes.CREATED).json(ExpenseDtoConverter.toDto(expense));
    }
  };

const ExpenseRouter = (expenseUseCases: ExpenseUseCases): Router => {
  const router = Router();
  router.post(
    toExpressPath(apiPaths.createExpense),
    asyncHandler(createExpense(expenseUseCases.addToBudget))
  );

  return router;
};

export default ExpenseRouter;
