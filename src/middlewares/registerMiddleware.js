import Ajv from "ajv"
import { authError } from "../errors/errors.js"

export const registerMiddleware = (req, res, next) => {

    const ajv = new Ajv()
    ajv.addFormat(
        "passwordIdentifier", 
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,64}$/
    )
    const schema = {
        type: "object",
        properties: {
            username: { 
                type: "string", 
                minLength: 4 
            },
            password: { 
                type: "string",
                format: "passwordIdentifier", 
                minLength: 12, 
                maxLength: 64
            },
            role: { 
                type: "string", 
                enum: ["admin", "user"] 
            }
        },
        required: ["username", "password", "role"],
        additionalProperties: false
    }
    
    const validation = ajv.compile(schema)
    const validate = validation(req.body) // true or false
    
    if (!validate) throw new authError("Validation error: " + ajv.errorsText(validation.errors))
    
    next()
}

