import { requiredField } from "../utils/validations.js";

export class User {

    #_id
    #username
    #password
    #role

    constructor({ _id, username, password, role }) {
        this.#_id = requiredField(_id)
        this.#username = requiredField(username)
        this.#password = requiredField(password)
        this.#role = requiredField(role)
    }
    
    dto() {
        return {
            _id: this.#_id,
            username: this.#username,
            password: this.#password,
            role: this.#role
        }
    }
}
