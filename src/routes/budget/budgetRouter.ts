import {
  type NextFunction,
  type Request,
  type Response,
  Router,
} from "express";
import type BudgetUseCases from "../../usecase/budget/budgetUseCases.js";
import asyncHandler from "express-async-handler";
import { BudgetConverter, NewBudgetConverter, type NewBudgetDto } from "./dto/budget.js";
import { StatusCodes } from "http-status-codes";

const paths = {
  CREATE_BUDGET: "/",
};

export const createBudget =
  (budgetUseCases: BudgetUseCases) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dto: NewBudgetDto = req.body;
      const newBudget = NewBudgetConverter.toDomain(dto);
      const createdBudget = await budgetUseCases.createBudget(newBudget);

      res
        .status(StatusCodes.CREATED)
        .json(BudgetConverter.toDto(createdBudget));
    } catch (error) {
      next(error);
    }
  };

const BudgetRouter = (budgetUseCases: BudgetUseCases): Router => {
  const router = Router();
  router.post(paths.CREATE_BUDGET, asyncHandler(createBudget(budgetUseCases)));

  return router;
};

export default BudgetRouter;
