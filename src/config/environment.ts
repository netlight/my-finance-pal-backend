import { cleanEnv, port, str, testOnly, url } from "envalid";
import * as process from "process";

const env = cleanEnv(process.env, {
  PORT: port({ devDefault: testOnly(1234) }),
  LOG_LEVEL: str({ default: "info", devDefault: testOnly("DEBUG") }),
  DATABASE_CONNECTION_STRING: url({
    devDefault: testOnly("mongodb://mongo:27017"),
  }),
  DATABASE_NAME: str({ devDefault: testOnly("my-finance-pal") }),
});

export default env;
