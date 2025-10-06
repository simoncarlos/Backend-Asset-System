import { userManager } from "../services/index.js";

export const controllerCreateUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const newUser = await userManager.registerUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}

export const controllerLoginUser = async (req, res, next) => {
    try{
        const userData = req.body
        const tokenLogin = await userManager.loginUser(userData)
        
        res.cookie('authToken', tokenLogin, 
            { 
                httpOnly: true, 
                secure: false, 
                sameSite: 'lax', //or strict
                maxAge: 60 * 60 * 1000 //1 hour 
            })
        .status(200).json({ message: 'Login successful' })
    }catch(error){
        next(error)
    }
}

export const controllerLogoutUser = async (req, res, next) => {
    res.clearCookie('authToken')
    .status(200).json({ message: 'Logged out successfully' })
}