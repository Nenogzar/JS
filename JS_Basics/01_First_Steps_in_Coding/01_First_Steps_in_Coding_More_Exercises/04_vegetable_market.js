function market(input){
    const [vegetablesPrice, fruitPrice, vegetablesKilograms, fruitKilograms] = input.map(Number)
    const euro = 1.94
    let vegetableCost = vegetablesPrice * vegetablesKilograms
    let fruitCost = fruitPrice * fruitKilograms
    let totalPrice = (vegetableCost + fruitCost)
    let totalPriceInEuro = totalPrice / euro
    console.log((totalPriceInEuro.toFixed(2)))
}
market([0.194 ,19.4 ,10 ,10])
market([1.5 ,2.5 ,10 ,10])