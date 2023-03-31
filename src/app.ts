import express from "express";
import helmet from "helmet";
import environment from "./config/environment";
import expressLogger from "./logging/expressLogger";
import ApiRouter from "./routes/apiRouter";
import BudgetService from "./usecase/budget/budgetService";
import { errorHandler } from "./middleware/errorHandler";
import BudgetMongoRepository from "./repository/budget/mongo/budgetMongoRepository";
import BudgetSummaryMongoRepository from "./repository/budget/mongo/budgetSummaryMongoRepository";
import ExpenseService from "./usecase/expense/expenseService";
import ExpenseMongoRepository from "./repository/expense/mongo/ExpenseMongoRepository";
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
const expenseUseCases = ExpenseService(ExpenseMongoRepository());
app.use(ApiRouter(budgetUseCases, expenseUseCases));

app.use(errorHandler);

export default app;
