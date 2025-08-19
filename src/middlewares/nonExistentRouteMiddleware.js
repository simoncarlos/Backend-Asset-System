import { nonExistentRouterError } from "../errors/errors.js"

const nonExistentRouteMiddleware = (req, res, next) => {
    next(new nonExistentRouterError())
}

export default nonExistentRouteMiddleware