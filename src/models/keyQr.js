import { requiredField } from "../utils/validations.js";

export class KeyQr {

    #_id
    #assetId
    #assetCode

    constructor({ _id, assetId, assetCode}) {
        this.#_id = requiredField(_id)
        this.#assetId = requiredField(assetId)
        this.#assetCode = requiredField(assetCode)
    }

    dto() {
        return {
            _id: this.#_id,
            assetId: this.#assetId,
            assetCode: this.#assetCode
        }
    }
}