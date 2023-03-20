import express from "express";
import helmet from "helmet";
import environment from "./config/environment.js";
import expressLogger from "./logging/expressLogger.js";
import ApiRouter from "./routes/apiRouter.js";
import BudgetService from "./usecase/budget/budgetService.js";
import BudgetMongoRepository from "./repository/budget/budgetMongoRepository.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const API_ROOT = "/api";

app.use(expressLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (environment.isProd) {
  app.use(helmet());
}

const budgetUseCases = BudgetService(BudgetMongoRepository());
app.use(API_ROOT, ApiRouter(budgetUseCases));

app.use(errorHandler);

export default app;
