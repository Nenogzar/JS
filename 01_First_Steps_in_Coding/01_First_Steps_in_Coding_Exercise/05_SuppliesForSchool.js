function SuppliesForSchool(input){
    const[chemicals, markers, cleaner, discount] = input.map(Number);
    const priceChemicals = 5.80
    const priceMarkers = 7.20
    const priceCleaner = 1.20
    const percentageDiscount = discount/100

    let totalPriceChemicals = chemicals * priceChemicals
    let totalPriceMarkers = markers * priceMarkers
    let totalPriceCleaner = cleaner * priceCleaner

    let totalPrice = totalPriceChemicals+totalPriceCleaner+totalPriceMarkers
    let priceAfterDiscount = totalPrice - (totalPrice * percentageDiscount)

    console.log(priceAfterDiscount)


}

SuppliesForSchool(["2 ","3 ","4 ","25 "])
SuppliesForSchool(["4 ","2 ","5 ","13 "])