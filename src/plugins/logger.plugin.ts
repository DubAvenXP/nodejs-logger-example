import winston from "winston";
const { combine, timestamp, json, simple } = winston.format

export const logger = winston.createLogger({
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

export default function buildLogger(service: string) {
    return {
        log: <T>(message: string | T) => {
            logger.log("info", { message, service });
        },
        error: <T>(message: string | T) => {
            logger.error("error", { message, service,  });
        }
    };
};
