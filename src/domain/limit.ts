import { AppError } from "../middleware/errorHandler.js";

class Limit {
  constructor(public amount: number) {
    if (amount < 0) {
      throw new AppError(
        "InvalidLimit",
        `Limits cannot be negative: ${amount}`
      );
    }
  }
}

export default Limit;
