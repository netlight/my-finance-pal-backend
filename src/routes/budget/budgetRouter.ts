import { type Request, type Response, Router } from "express";
import type BudgetUseCases from "../../usecase/budget/budgetUseCases";
import asyncHandler from "express-async-handler";
import { StatusCodes } from "http-status-codes";
import {
  BudgetDtoConverter,
  BudgetSummaryDtoConverter,
} from "./dto/converters";
import toExpressPath from "../toExpressPath";
import UUID from "../../domain/uuid";
import apiPaths from "../apiPaths";

// TODO 4.1. - add a request handler for creating budgets

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

export const deleteBudget =
  (deleteBudget: BudgetUseCases["deleteBudget"]) =>
  async (req: Request, res: Response): Promise<void> => {
    const budgetId = new UUID(req.params.budgetId);
    const deleteResult = await deleteBudget(budgetId);
    res.sendStatus(
      deleteResult.deleted ? StatusCodes.NO_CONTENT : StatusCodes.NOT_FOUND,
    );
  };

const BudgetRouter = (budgetUseCases: BudgetUseCases): Router => {
  const router = Router();
  // TODO 4.2. - add the "createBudget" request handler as a new endpoint to the router
  router.get(
    toExpressPath(apiPaths.getBudgets),
    asyncHandler(getBudgets(budgetUseCases.getBudgets)),
  );
  router.get(
    toExpressPath(apiPaths.getBudgetSummary),
    asyncHandler(getBudgetSummary(budgetUseCases.getBudgetSummary)),
  );
  router.delete(
    toExpressPath(apiPaths.deleteBudget),
    asyncHandler(deleteBudget(budgetUseCases.deleteBudget)),
  );

  return router;
};

export default BudgetRouter;
