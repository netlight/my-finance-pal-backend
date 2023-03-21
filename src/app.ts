import express from "express";
import helmet from "helmet";
import environment from "./config/environment.js";
import expressLogger from "./logging/expressLogger.js";
import ApiRouter from "./routes/apiRouter.js";
import BudgetService from "./usecase/budget/budgetService.js";
import { errorHandler } from "./middleware/errorHandler.js";
import BudgetMongoRepository from "./repository/budget/mongo/budgetMongoRepository.js";
import BudgetSummaryMongoRepository from "./repository/budget/mongo/budgetSummaryMongoRepository.js";
import TransactionService from "./usecase/transaction/transactionService.js";
import TransactionMongoRepository from "./repository/transaction/mongo/TransactionMongoRepository.js";
import OpenApiValidator from "express-openapi-validator";

const app = express();
const API_ROOT = "/";

app.use(expressLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (environment.isProd) {
  app.use(helmet());
}

app.use(
  OpenApiValidator.middleware({
    apiSpec: new URL(`../api/my-finance-pal.yml`, import.meta.url).pathname,
    validateRequests: true,
    validateResponses: true,
  })
);

const budgetUseCases = BudgetService(
  BudgetSummaryMongoRepository(),
  BudgetMongoRepository()
);
const transactionUseCases = TransactionService(TransactionMongoRepository());
app.use(API_ROOT, ApiRouter(budgetUseCases, transactionUseCases));

app.use(errorHandler);

export default app;
