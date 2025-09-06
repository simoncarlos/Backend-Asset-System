export const formatProductList = (products) => {

    const formatProducts = products.map(object => {
        return formatProduct(object)
    })

    return formatProducts

}

export const formatProduct = (object) => {
    object.sequency = parseInt(object.sequency)
    object.model = object.model || "N/A"
    object.activeProduct = object.activeProduct === 'true'
    const cDate =  object.creationDate
    const date = `${cDate[0]+cDate[1]}${cDate[2]}${cDate[3]}-${cDate[4]+cDate[5]}-${cDate[6]+cDate[7]}` 
    object.creationDate = new Date(date)
    object.assetLifeYears = parseInt(object.assetLifeYears)
    object.purchasePriceARS = parseFloat(object.purchasePriceARS)
    object.purchasePriceUSD = parseFloat(object.purchasePriceUSD)
    object.exchangeRate = parseFloat(object.exchangeRate)
    object.notes = object.notes || ""
    object.checkDate = new Date()
    return object
}