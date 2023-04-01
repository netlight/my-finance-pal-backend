import { cleanEnv, port, str, url } from "envalid";
import * as process from "process";

// Use cleanenv to read all environment variables and validate them agains our
// typesafe specification. This allows us to fail early on app startup in case
// some of the variables are missing or in the wrong format.
const env = cleanEnv(process.env, {
  PORT: port(),
  LOG_LEVEL: str({ default: "info" }),
  DATABASE_CONNECTION_STRING: url(),
  DATABASE_NAME: str(),
});

export default env;
