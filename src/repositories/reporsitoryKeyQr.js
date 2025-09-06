import { KeyQr } from "../models/keyQr.js";
import { NotFoundError } from "../errors/errors.js";

export class KeyQrList {
    #keyQrDao 

    constructor(keyQrDao) {
        this.#keyQrDao = keyQrDao
    }

    async getKeyQrs() {
        const keyQrsDto = await this.#keyQrDao.getAllObjects()
        if (!keyQrsDto) throw new NotFoundError()
        return keyQrsDto.map(keyQr => new KeyQr(keyQr))
    }
    async getKeyQrById(id) {
        const keyQrDto = await this.#keyQrDao.getObjectById(id)
        if (!keyQrDto) throw new NotFoundError()
        return new KeyQr(keyQrDto)
    }
    async getKeyQrByQuery(query) {
        const keyQrDto = await this.#keyQrDao.getObjectsByQuery(query)
        if (!keyQrDto || keyQrDto.length === 0) throw new NotFoundError()
        return new KeyQr(keyQrDto[0])
    }
    async createKeyQr(object) {
        const keyQrDto = await this.#keyQrDao.saveObject(object)
        return new KeyQr(keyQrDto)
    }
    async createKeyQrList(objectList) {
        const keysQrList = await this.#keyQrDao.saveObjectList(objectList)
        const object = keysQrList.map(keyQr => new KeyQr(keyQr))
        return object
    }
    async updateKeyQr(id, objectUpdated) {
        const keyQrDto = await this.#keyQrDao.updateObject(id, objectUpdated)
        if (!keyQrDto) throw new NotFoundError()
        return new KeyQr(keyQrDto)
    }
    async deleteKeyQr(id) {
        const keyQrDto = await this.#keyQrDao.deleteObject(id)
        if (!keyQrDto) throw new NotFoundError()
        return new KeyQr(keyQrDto)
    }

}