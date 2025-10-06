import jwt from "jsonwebtoken"
import { unauthorizedError } from "../errors/errors.js"

export const sessionMiddleware = (req, res, next) => {
    const token = req.cookies.authToken
    console.log("El valor de las cookies son: " + req.cookies.authToken)
    
    if(!token) throw new unauthorizedError('Authentication required')
    let data = null
    try{
        data = jwt.verify(token, process.env.JWT_SECRET)
        req.user = data
    }catch(error){
        throw new unauthorizedError('Authentication required')
    }
    next()
}