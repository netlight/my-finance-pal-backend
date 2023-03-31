import type ExpenseRepository from "../../repository/expense/expenseRepository";
import type ExpenseUseCases from "./expenseUseCases";
import { type Expense } from "../../domain/expense";
import UUID from "../../domain/uuid";
import currency from "currency.js";

const addNewExpenseToBudget: (
  findAll: ExpenseRepository["findAllForBudget"],
  insert: ExpenseRepository["insert"]
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
    return await insert(budgetId, updatedSpent, expense);
  };

const calculateSpent = (expenses: Expense[], newExpense: Expense): number =>
  expenses.reduce(
    (prev, curr) => prev.add(curr.amount),
    currency(newExpense.amount)
  ).value;

const ExpenseService: (
  expenseRepository: ExpenseRepository
) => ExpenseUseCases = (expenseRepository) => ({
  addToBudget: addNewExpenseToBudget(
    expenseRepository.findAllForBudget,
    expenseRepository.insert
  ),
});

export default ExpenseService;
