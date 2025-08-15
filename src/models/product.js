import { requiredField } from '../utils/validations.js';

export class Product {

    #_id
    #typeName
    #descriptionBrand
    #model
    #serialNumber
    #user
    #status
    #activeProduct
    #creationDate
    #accountingEntry
    #invoiceNumber
    #acCode
    #usageLocation
    #typeProduc
    #assetCode
    #assetLifeYears
    #purchasePriceARS
    #purchasePriceUSD
    #exchangeRate
    #notes

    constructor({ _id, typeName, descriptionBrand, model, serialNumber, user, status, activeProduct, creationDate, accountingEntry, invoiceNumber, acCode, usageLocation, typeProduc, assetCode, assetLifeYears, purchasePriceARS, purchasePriceUSD, exchangeRate, notes }) {

        this.#_id = requiredField(_id)
        this.#typeName = requiredField(typeName)
        this.#descriptionBrand = requiredField(descriptionBrand)
        this.#model = requiredField(model)
        this.#serialNumber = requiredField(serialNumber)
        this.#user = requiredField(user)
        this.#status = requiredField(status)
        this.#creationDate = requiredField(creationDate)
        this.#activeProduct = activeProduct || null
        this.#accountingEntry = accountingEntry || null
        this.#invoiceNumber = invoiceNumber || null
        this.#acCode = acCode || null
        this.#usageLocation = usageLocation || null
        this.#typeProduc = typeProduc || null
        this.#assetCode = assetCode || null
        this.#assetLifeYears = assetLifeYears || null
        this.#purchasePriceARS = purchasePriceARS || null
        this.#purchasePriceUSD = purchasePriceUSD || null
        this.#exchangeRate = exchangeRate || null
        this.#notes = notes || null

    }

    dto() {
        return {
            _id: this.#_id,
            typeName: this.#typeName,
            descriptionBrand: this.#descriptionBrand,
            model: this.#model,
            serialNumber: this.#serialNumber,
            user: this.#user,
            status: this.#status,
            activeProduct: this.#activeProduct,
            creationDate: this.#creationDate,
            accountingEntry: this.#accountingEntry,
            invoiceNumber: this.#invoiceNumber,
            acCode: this.#acCode,
            usageLocation: this.#usageLocation,
            typeProduc: this.#typeProduc,
            assetCode: this.#assetCode,
            assetLifeYears: this.#assetLifeYears,
            purchasePriceARS: this.#purchasePriceARS,
            purchasePriceUSD: this.#purchasePriceUSD,
            exchangeRate: this.#exchangeRate,
            notes: this.#notes
        }
    }   

}