import mongoose from "mongoose";
import environment from "./environment.js";

const connect = async (): Promise<void> => {
  await mongoose.connect(environment.DATABASE_CONNECTION_STRING, {
    dbName: "my-finance-pal",
  });
};

export default { connect };
