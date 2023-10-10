import type ExpenseRepository from "../../repository/expense/expenseRepository";
import type ExpenseUseCases from "./expenseUseCases";
import { type Expense } from "../../domain/expense";
import UUID from "../../domain/uuid";
import currency from "currency.js";

const addNewExpenseToBudget: (
  findAll: ExpenseRepository["findAllForBudget"],
  insert: ExpenseRepository["insert"],
) => ExpenseUseCases["addToBudget"] =
  (findAll, insert) => async (budgetId, newExpense) => {
    const existingExpenses = await findAll(budgetId);
    if (existingExpenses === undefined) {
      return;
    }
    const expense: Expense = {
      ...newExpense,
      id: new UUID(),
    };
    const updatedSpent = calculateSpent(existingExpenses, expense);

    /*
    Here we could also check if updatedSpent > budget.limit, but
    we will omit this for now. It might also be a valid use case
    that one spends more than they set as their limit
    ==> clarification with business required
    The same goes for a transaction date, that is not within the
    boundaries of the budget.
     */

    return await insert(budgetId, updatedSpent, expense);
  };

const calculateSpent = (expenses: Expense[], newExpense: Expense): number =>
  expenses.reduce(
    (prev, curr) => prev.add(curr.amount),
    currency(newExpense.amount),
  ).value;

const ExpenseService: (
  expenseRepository: ExpenseRepository,
) => ExpenseUseCases = (expenseRepository) => ({
  addToBudget: addNewExpenseToBudget(
    expenseRepository.findAllForBudget,
    expenseRepository.insert,
  ),
});

export default ExpenseService;
