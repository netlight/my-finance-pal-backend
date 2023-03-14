import { type NextFunction, type Request, type Response } from "express";
import type BudgetUseCases from "../../usecase/budget/BudgetUseCases.js";
import { NewBudgetConverter, type NewBudgetDto } from "./dto/budget.js";
import { StatusCodes } from "http-status-codes";

const createBudget =
  (budgetUseCases: BudgetUseCases) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dto: NewBudgetDto = req.body;
      const newBudget = NewBudgetConverter.toDomain(dto);
      const createdBudget = await budgetUseCases.createBudget(newBudget);

      res.status(StatusCodes.CREATED).json(createdBudget);
    } catch (error) {
      next(error);
    }
  };

export default createBudget;
