export class AppError extends Error {
    constructor(message, statusCode, name) {
        super(message);
        this.name = name || this.constructor.name;
        this.statusCode = statusCode || 500;
        Error.captureStackTrace(this, this.constructor);
    }
}