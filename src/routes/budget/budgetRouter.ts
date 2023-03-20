import {
  type NextFunction,
  type Request,
  type Response,
  Router,
} from "express";
import type BudgetUseCases from "../../usecase/budget/budgetUseCases.js";
import asyncHandler from "express-async-handler";
import {
  BudgetConverter,
  NewBudgetConverter,
  type NewBudgetDto,
} from "./dto/budget.js";
import { StatusCodes } from "http-status-codes";
import { BudgetId } from "../../domain/budget.js";

const paths = {
  CREATE_BUDGET: "/",
  GET_BUDGET: "/:budgetId",
};

export const createBudget =
  (createBudget: BudgetUseCases["createBudget"]) =>
  async (req: Request, res: Response): Promise<void> => {
    const dto: NewBudgetDto = req.body;
    const newBudget = NewBudgetConverter.toDomain(dto);
    const createdBudget = await createBudget(newBudget);

    res.status(StatusCodes.CREATED).json(BudgetConverter.toDto(createdBudget));
  };

export const getBudget =
  (getBudget: BudgetUseCases["getBudget"]) =>
  async (req: Request, res: Response): Promise<void> => {
    const budgetId = new BudgetId(req.params.budgetId);
    const budget = await getBudget(budgetId);
    if (budget !== undefined) {
      res.status(StatusCodes.OK).json(BudgetConverter.toDto(budget));
    } else {
      res.sendStatus(StatusCodes.NOT_FOUND);
    }
  };

const BudgetRouter = (budgetUseCases: BudgetUseCases): Router => {
  const router = Router();
  router.post(
    paths.CREATE_BUDGET,
    asyncHandler(createBudget(budgetUseCases.createBudget))
  );
  router.get(
    paths.GET_BUDGET,
    asyncHandler(getBudget(budgetUseCases.getBudget))
  );

  return router;
};

export default BudgetRouter;
