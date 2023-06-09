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

// add a winston express logger middleware to log traffic and other events emitted by express
app.use(expressLogger);
// Enable JSON body parsing
app.use(express.json());
// allow parsing of URL encoded payloads
app.use(express.urlencoded({ extended: true }));

// add some additional security on PROD by setting some important HTTP headers automatically
if (environment.isProd) {
  app.use(helmet());
}

// validate payloads based on our OpenAPI specification. Fails if something
// does not meet the contract that we have defined and returns a verbose error
// message specifying what exactly is the problem
app.use(
  OpenApiValidator.middleware({
    apiSpec: path.join(__dirname, "..", "api", "my-finance-pal.yml"),
    // validate incoming requests
    validateRequests: true,
    // also validate our responses to the clients
    validateResponses: true,
  })
);

// Instantiate dependencies and pass them to the respective components needed for our use cases
const budgetUseCases = BudgetService(
  BudgetSummaryMongoRepository(),
  BudgetMongoRepository()
);
const expenseUseCases = ExpenseService(ExpenseMongoRepository());
app.use(ApiRouter(budgetUseCases, expenseUseCases));

// IMPORTANT! Always add an error handler to avoid unexpected crashes of the app!
// If not caught, every exception will lead to Node.js terminating the process!
// Also place the error handler at the end of your app configuration as this should
// be the last middleware that is called, so we can handle any error that might occur before!
app.use(errorHandler);

export default app;
