import { User } from "../models/user.js";
import { NotFoundError, loginError } from "../errors/errors.js";

export class UserList {
    #userDao

    constructor(userDao) {
        this.#userDao = userDao
    }

    async createUser(object) {
        const userDto = await this.#userDao.saveObject(object)
        return new User(userDto)
    }

    async userNameExists(username) {
        const userDto = await this.#userDao.getObjectsByQuery({ username: username })
        if (!userDto || userDto.length === 0) return false
        return true
    }
    async loginUser(username) {
        const userDto = await this.#userDao.getObjectsByQuery({ username: username })
        if (!userDto || userDto.length === 0) throw new loginError('Login failed')
        return new User(userDto[0])
    }

}