import { type BudgetDto, type NewBudgetDto } from "./dto/budget";
import mongoose from "mongoose";
import env from "../../config/environment";
import request from "supertest";
import app from "../../app";

describe("budgetRouter", () => {
  beforeEach(async () => {
    try {
      await mongoose.connect(env.DATABASE_CONNECTION_STRING, {
        dbName: env.DATABASE_NAME,
      });
    } catch (error) {
      console.log(error);
    }
  });
  afterEach(async () => {
    try {
      await mongoose.connection.close();
    } catch (error) {
      console.log(error);
    }
  });
  it("calls the create function with the correct object", async () => {
    // GIVEN
    const newBudgetDto: NewBudgetDto = {
      name: "My Budget",
      limit: 250,
    };
    const expectedResponseDto: Omit<BudgetDto, "id"> = {
      limit: newBudgetDto.limit,
      spent: 0,
      name: newBudgetDto.name,
    };
    // WHEN
    const response = await request(app).post("/budgets").send(newBudgetDto);

    // THEN
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(expect.objectContaining(expectedResponseDto));
  });
});
