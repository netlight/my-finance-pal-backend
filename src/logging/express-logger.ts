import expressWinston from "express-winston";
import winston from "winston";

const expressLogger = expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  meta: true,
  expressFormat: true,
});

export default expressLogger;
