import express from "express";
import helmet from "helmet";
import environment from "./config/environment.js";
import expressLogger from "./logging/express-logger.js";
import ApiRouter from "./routes/ApiRouter.js";
import BudgetUseCases from "./usecase/budget/BudgetUseCases.js";
import BudgetMongoRepository from "./repository/budget/BudgetMongoRepository.js";
import { errorHandler } from "./middleware/error-handler.js";

const app = express();
const API_ROOT = "/api";

app.use(expressLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (environment.isProd) {
  app.use(helmet());
}

const budgetRepository = new BudgetMongoRepository();
const budgetUseCases = new BudgetUseCases(budgetRepository);
app.use(API_ROOT, ApiRouter(budgetUseCases));

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.use(errorHandler);

export default app;
