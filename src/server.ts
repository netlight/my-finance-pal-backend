import "./preStart";
import * as http from "http";
import app from "./app";
import { listenToErrorEvents } from "./middleware/errorHandler";
import logger from "./logging/logger";
import environment from "./config/environment";
import mongoDb from "./config/mongoDb";

void (async () => {
  await mongoDb.connect();
})();

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
