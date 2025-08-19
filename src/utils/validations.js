export function requiredField( field){
    if(typeof field === "undefined"){
        throw new Error("MISSING_REQUIRED_PARAM in ID: "+ id);
    }
    return field
}