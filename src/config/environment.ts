import { cleanEnv, port, str } from "envalid";
import * as process from "process";

const env = cleanEnv(process.env, {
  PORT: port(),
  LOG_LEVEL: str({ default: "info" }),
});

export default env;
