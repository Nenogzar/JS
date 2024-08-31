function SuppliesForSchool(input){
    const[chemicalsNumbers, markersNumbers, cleanerNumbers, discount] = input.map(Number);
    const priceChemicals = 5.80
    const priceMarkers = 7.20
    const priceCleaner = 1.20
    const percentageDiscount = discount * 0.01

    let totalPriceChemicals = chemicalsNumbers * priceChemicals
    let totalPriceMarkers = markersNumbers * priceMarkers
    let totalPriceCleaner = cleanerNumbers * priceCleaner

    // let totalPrice = (totalPriceChemicals+totalPriceCleaner+totalPriceMarkers) * ( 1 - percentageDiscount)
    // let priceAfterDiscount = totalPrice - (totalPrice * percentageDiscount)
    let priceAfterDiscount = (totalPriceChemicals+totalPriceCleaner+totalPriceMarkers) * ( 1 - percentageDiscount)

    console.log(priceAfterDiscount)
}

SuppliesForSchool(["2 ","3 ","4 ","25 "])
SuppliesForSchool(["4 ","2 ","5 ","13 "])