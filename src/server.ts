import "./preStart.js";
import * as http from "http";
import app from "./app.js";
import { listenToErrorEvents } from "./middleware/errorHandler.js";
import logger from "./logging/logger.js";
import environment from "./config/environment.js";
import mongoDb from "./config/mongoDb.js";

await mongoDb.connect();

const onListening = (server: http.Server) => (): void => {
  const addr = server.address();
  const bind =
    typeof addr === "string" ? `pipe ${addr}` : `port ${addr?.port ?? ""}`;
  logger.info(`Listening on ${bind}`);
};

const server = http.createServer(app);
listenToErrorEvents(server);
server.on("listening", onListening(server));
server.listen(environment.PORT);
