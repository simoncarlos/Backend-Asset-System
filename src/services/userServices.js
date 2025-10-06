import { authError, loginError } from "../errors/errors.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserManager {
    #userList
    constructor(userList) {
        this.userList = userList;
    }
    async registerUser(userData) {
        const { password } = userData
        const userExists = await this.userList.userNameExists(userData.username)
        if(userExists) throw new authError('Username already exists')
        const hashedPassword = await bcrypt.hash(password, 10)
        userData.password = hashedPassword
        const user = await this.userList.createUser(userData)
        return userData
    }

    async loginUser(userData) {
        try{
            const { username, password } = userData
            const userObject = await this.userList.loginUser(username)
            const {password: hashedPassword} = userObject.dto()
            const passwordMatch = await bcrypt.compare(password, hashedPassword)
            if(!passwordMatch) throw new loginError('Login failed')

            const token = jwt.sign({ 
                username: userObject.dto().username, 
                role: userObject.dto().role
            }, 
            process.env.JWT_SECRET, 
            { 
                expiresIn: '1h' 
            })
            return token
        }catch(error){
            throw new loginError('Login failed')
        }
    }

}

