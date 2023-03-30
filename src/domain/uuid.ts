import { v4 as uuidv4, validate as validateUUID } from "uuid";
import { AppError } from "../middleware/errorHandler";

class UUID {
  public value: string;

  constructor(private readonly stringValue: string = uuidv4()) {
    if (!validateUUID(stringValue)) {
      throw new AppError("InvalidUUID", `Value is not a UUID: ${stringValue}`);
    }
    this.value = stringValue;
  }
}

export default UUID;
