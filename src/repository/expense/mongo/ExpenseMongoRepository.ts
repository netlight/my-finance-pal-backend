import type ExpenseRepository from "../expenseRepository";
import { ExpenseEntityConverter } from "../entity/converters";
import { BudgetSummaryModel } from "../../budget/mongo/models";
import type BudgetSummaryEntity from "../../budget/entity/budgetSummaryEntity";

export const findAllExpensesForBudget: ExpenseRepository["findAllForBudget"] =
  async (budgetId) => {
    const budgetExpenses: Pick<BudgetSummaryEntity, "expenses"> | null =
      await BudgetSummaryModel.findOne({
        id: budgetId.value,
      }).select("expenses");
    if (budgetExpenses !== null) {
      return budgetExpenses.expenses.map(ExpenseEntityConverter.toDomain);
    }
  };

export const insertExpense: ExpenseRepository["insert"] = async (
  budgetId,
  spent,
  expense
) => {
  const expenseEntity = ExpenseEntityConverter.toEntity(expense);
  const updatedSummary = await BudgetSummaryModel.findOneAndUpdate(
    { id: budgetId.value },
    {
      $set: { spent },
      $push: { expenses: expenseEntity },
    },
    { returnDocument: "after" }
  );
  const updatedExpense = updatedSummary?.expenses.find(
    (t) => t.id === expense.id.value
  );
  if (updatedExpense !== undefined) {
    return ExpenseEntityConverter.toDomain(updatedExpense);
  }
};

const ExpenseMongoRepository = (): ExpenseRepository => ({
  findAllForBudget: findAllExpensesForBudget,
  insert: insertExpense,
});

export default ExpenseMongoRepository;
