export function requiredField( field){
    if(typeof field === "undefined"){
        throw new Error("MISSING_REQUIRED_PARAM in ID: "+ id);
    }
    return field
}

export function validateUserName (username) {
    const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/; // Alphanumeric and underscores, 3-30 characters
    if (!usernameRegex.test(username)) {
        throw new Error("INVALID_USERNAME: Username must be 3-30 characters long and can only contain letters, numbers, and underscores.");
    }
    return username;
}
export function validatePassword (password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        throw new Error("WEAK_PASSWORD: Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
    }
    return password;
}