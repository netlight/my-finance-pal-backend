import express from "express";
import helmet from "helmet";
import environment from "./config/environment";
import expressLogger from "./logging/expressLogger";
import ApiRouter from "./routes/apiRouter";
import BudgetService from "./usecase/budget/budgetService";
import { errorHandler } from "./middleware/errorHandler";
import BudgetMongoRepository from "./repository/budget/mongo/budgetMongoRepository";
import BudgetSummaryMongoRepository from "./repository/budget/mongo/budgetSummaryMongoRepository";
import TransactionService from "./usecase/transaction/transactionService";
import TransactionMongoRepository from "./repository/transaction/mongo/TransactionMongoRepository";
import * as OpenApiValidator from "express-openapi-validator";
import * as path from "path";

const app = express();

app.use(expressLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (environment.isProd) {
  app.use(helmet());
}

app.use(
  OpenApiValidator.middleware({
    apiSpec: path.join(__dirname, "..", "api", "my-finance-pal.yml"),
    validateRequests: true,
    validateResponses: true,
  })
);

const budgetUseCases = BudgetService(
  BudgetSummaryMongoRepository(),
  BudgetMongoRepository()
);
const transactionUseCases = TransactionService(TransactionMongoRepository());
app.use(ApiRouter(budgetUseCases, transactionUseCases));

app.use(errorHandler);

export default app;
