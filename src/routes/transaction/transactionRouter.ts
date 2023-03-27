import type TransactionUseCases from "../../usecase/transaction/transactionUseCases";
import { type Request, type Response, Router } from "express";
import {
  NewTransactionDtoConverter,
  TransactionDtoConverter,
} from "./dto/converters";
import UUID from "../../domain/uuid";
import { StatusCodes } from "http-status-codes";
import toExpressPath from "../toExpressPath";
import apiPaths from "../apiPaths";
import asyncHandler from "express-async-handler";

export const createTransaction =
  (addTransactionToBudget: TransactionUseCases["addNewTransactionToBudget"]) =>
  async (req: Request, res: Response): Promise<void> => {
    const newTransactionDto = req.body;
    const budgetId: string = req.params.budgetId;
    const newTransaction =
      NewTransactionDtoConverter.toDomain(newTransactionDto);
    const transaction = await addTransactionToBudget(
      new UUID(budgetId),
      newTransaction
    );
    if (transaction === undefined) {
      res.sendStatus(StatusCodes.NOT_FOUND);
    } else {
      res
        .status(StatusCodes.CREATED)
        .json(TransactionDtoConverter.toDto(transaction));
    }
  };

const TransactionRouter = (
  transactionUseCases: TransactionUseCases
): Router => {
  const router = Router();
  router.post(
    toExpressPath(apiPaths.createTransaction),
    asyncHandler(
      createTransaction(transactionUseCases.addNewTransactionToBudget)
    )
  );

  return router;
};

export default TransactionRouter;
