import { AppError } from './AppErrors.js';

export class NotFoundError extends AppError {
    constructor(message = 'Resource not found') {
        super(message, 404, 'NotFoundError')
    }
}

export class DatabaseError extends AppError {
    constructor(message) {
        super(message, 500, 'DatabaseError')
    }
}

export class ValidationError extends AppError {
    constructor(message = 'Validation error') {
        super(message, 400, 'ValidationError')
    }
}

export class nonExistentRouterError extends AppError{
    constructor(message = 'Route not found'){
        super(message, 404, 'nonExistentRouter')
    }
}