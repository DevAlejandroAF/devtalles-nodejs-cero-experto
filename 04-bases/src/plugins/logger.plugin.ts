import winston, { format } from "winston";
const { combine, timestamp, json } = format;


const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json(),
  ),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

logger.add(new winston.transports.Console({
  format: winston.format.simple(),
}));

const buildLogger = (service: string) => {
  return {
    log: (message: string) => {
      logger.log('info', { message, service });
    },
    error: (message: string) => {
      logger.error('error', { message, service });
    }
  }
}

export {
  buildLogger,
  logger,
}
