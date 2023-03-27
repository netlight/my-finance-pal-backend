import winston from "winston";
import environment from "../config/environment";

const logger = winston.createLogger({
  level: environment.LOG_LEVEL,
  format: winston.format.json(),
  defaultMeta: { service: "my-finance-pal" },
});

if (!environment.isProd) {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      ),
    })
  );
}

export default logger;
