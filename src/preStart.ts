/**
 * Pre-start is where we want to place things that must run BEFORE the express
 * server is started. This is useful for environment variables, command-line
 * arguments, and cron-jobs.
 */

// NOTE: DO NOT IMPORT ANY SOURCE CODE HERE
import dotenv from "dotenv";
import { parse } from "ts-command-line-args";

// **** Types **** //

interface Args {
  env: string;
}

// **** Setup **** //

// Command line arguments
const args = parse<Args>({
  env: {
    type: String,
    defaultValue: "development",
    alias: "e",
  },
});

// Set the env file
const dotenvConfig = dotenv.config({
  path: new URL(`../env/${args.env}.env`, import.meta.url).pathname,
});
if (dotenvConfig.error != null) {
  throw dotenvConfig.error;
}
