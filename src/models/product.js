import { requiredField } from '../utils/validations.js';

export class Product {

    #_id
    #sequency
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
    #typeProduct
    #assetCode
    #assetLifeYears
    #purchasePriceARS
    #purchasePriceUSD
    #exchangeRate
    #notes
    #checkDate

    constructor({ _id, sequency, typeName, descriptionBrand, model, serialNumber, user, status, activeProduct, creationDate, accountingEntry, invoiceNumber, acCode, usageLocation, typeProduct, assetCode, assetLifeYears, purchasePriceARS, purchasePriceUSD, exchangeRate, notes, checkDate }) {

        this.#_id = requiredField(_id)
        this.#sequency = requiredField(sequency)
        this.#typeName = requiredField(typeName)
        this.#descriptionBrand = requiredField(descriptionBrand)
        this.#model = requiredField(model)
        this.#serialNumber = requiredField(serialNumber)
        this.#user = requiredField(user)
        this.#status = requiredField(status)
        this.#creationDate = requiredField(creationDate)
        this.#activeProduct = requiredField(activeProduct || null)
        this.#accountingEntry = requiredField(accountingEntry || null)
        this.#invoiceNumber = requiredField(invoiceNumber || null)
        this.#acCode = requiredField(acCode || null)
        this.#usageLocation = requiredField(usageLocation || null)
        this.#typeProduct = requiredField(typeProduct || null)
        this.#assetCode = requiredField(assetCode || null)
        this.#assetLifeYears = requiredField(assetLifeYears || null)
        this.#purchasePriceARS = requiredField(purchasePriceARS || null)
        this.#purchasePriceUSD = requiredField(purchasePriceUSD || null)
        this.#exchangeRate = requiredField(exchangeRate || null)
        this.#notes = requiredField(notes)
        this.#checkDate = requiredField(checkDate)
    }

    dto() {
        return {
            _id: this.#_id,
            sequency: this.#sequency,
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
            typeProduct: this.#typeProduct,
            assetCode: this.#assetCode,
            assetLifeYears: this.#assetLifeYears,
            purchasePriceARS: this.#purchasePriceARS,
            purchasePriceUSD: this.#purchasePriceUSD,
            exchangeRate: this.#exchangeRate,
            notes: this.#notes,
            checkDate: this.#checkDate
        }
    }   

}