const winston = require("winston");
const { combine, timestamp, json, simple } = winston.format

const logger = winston.createLogger({
    level: "info",
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.File({
            filename: "logs/error.log",
            level: "error",
        }),
        new winston.transports.File({ filename: "logs/combined.log" }),
    ],
});

logger.add(
    new winston.transports.Console({
        format: simple(),
    })
);

module.exports = function buildLogger(service) {
    return {
        log: (message) => {
            logger.log("info", { message, service });
        },
        error: (message) => {
            logger.error("error", { message, service,  });
        }
    };
};
