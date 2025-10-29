import winston from 'winston';
import path from 'path';
import fs from 'fs';
import setting_process_env from '../utils/settingEnviroment.js';

const { combine, timestamp, printf, colorize, align } = winston.format;

const logDir = setting_process_env.logs.path;
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const getLogFileName = (level) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return path.join(logDir, `${level}-${year}-${month}-${day}.log`);
};

const logger = winston.createLogger({
    level: 'info'
});


if (process.env.NODE_ENV === 'DEVELOPMENT') {
    logger.add(new winston.transports.Console({
        format: combine(
            colorize({ all: true }),
            timestamp({
                format: 'YYYY-MM-DD hh:mm:ss.SSS A',
            }),
            align(),
            printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
        ),
    }));
} else {
    logger.add(new winston.transports.File({
        filename: getLogFileName('app'),
        format: combine(
            timestamp({
                format: 'YYYY-MM-DD hh:mm:ss.SSS A',
            }),
            align(),
            printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
        ),
    }));
    logger.add(new winston.transports.File({
        filename: getLogFileName('error'),
        level: 'error',
        format: combine(
            timestamp({
                format: 'YYYY-MM-DD hh:mm:ss.SSS A',
            }),
            align(),
            printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
        ),
    }));
}

export default logger;