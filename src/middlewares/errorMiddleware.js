const errorHandler = (error, req, res, next) => {
    const errorMessage = {
        message: error.message,
        errorType: error.name,
        status: error.statusCode || 500
    }
    res.status(errorMessage.status).json(errorMessage);
}

export default errorHandler