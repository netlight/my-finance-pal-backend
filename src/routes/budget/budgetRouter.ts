import { type Request, type Response, Router } from "express";
import type BudgetUseCases from "../../usecase/budget/budgetUseCases";
import asyncHandler from "express-async-handler";
import { type NewBudgetDto } from "./dto/budget";
import { StatusCodes } from "http-status-codes";
import {
  BudgetDtoConverter,
  BudgetSummaryDtoConverter,
  NewBudgetDtoConverter,
} from "./dto/converters";
import toExpressPath from "../toExpressPath";
import UUID from "../../domain/uuid";
import apiPaths from "../apiPaths";

export const createBudget =
  (createBudget: BudgetUseCases["createBudget"]) =>
  async (req: Request, res: Response): Promise<void> => {
    const dto: NewBudgetDto = req.body;
    const newBudget = NewBudgetDtoConverter.toDomain(dto);
    const createdBudget = await createBudget(newBudget);

    res
      .status(StatusCodes.CREATED)
      .json(BudgetDtoConverter.toDto(createdBudget));
  };

export const getBudgets =
  (getBudgets: BudgetUseCases["getBudgets"]) =>
  async (req: Request, res: Response): Promise<void> => {
    const budgets = await getBudgets();
    res.status(StatusCodes.OK).json(budgets.map(BudgetDtoConverter.toDto));
  };

export const getBudgetSummary =
  (getBudgetSummary: BudgetUseCases["getBudgetSummary"]) =>
  async (req: Request, res: Response): Promise<void> => {
    const budgetId: string = req.params.budgetId;
    const budgetSummary = await getBudgetSummary(new UUID(budgetId));
    if (budgetSummary === undefined) {
      res.sendStatus(StatusCodes.NOT_FOUND);
    } else {
      res
        .status(StatusCodes.OK)
        .json(BudgetSummaryDtoConverter.toDto(budgetSummary));
    }
  };

const BudgetRouter = (budgetUseCases: BudgetUseCases): Router => {
  const router = Router();
  router.post(
    toExpressPath(apiPaths.createBudget),
    asyncHandler(createBudget(budgetUseCases.createBudget))
  );
  router.get(
    toExpressPath(apiPaths.getBudgets),
    asyncHandler(getBudgets(budgetUseCases.getBudgets))
  );
  router.get(
    toExpressPath(apiPaths.getBudgetSummary),
    asyncHandler(getBudgetSummary(budgetUseCases.getBudgetSummary))
  );

  return router;
};

export default BudgetRouter;
