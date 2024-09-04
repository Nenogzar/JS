function fishland(info){
    const [mackerelPrice, spratsPrice, bonitoKilo, safridKilo, musselsKilo] = info.map(Number)

    const bonitoPrice = mackerelPrice * 1.6
    const safridPrice = spratsPrice * 1.8
    const musselsPrice = 7.50

    let bonitoCost = bonitoKilo * bonitoPrice
    let safridCost = safridKilo * safridPrice
    let musselCost = musselsKilo * musselsPrice

    let totalCost = bonitoCost + safridCost + musselCost

    console.log((totalCost.toFixed(2)))

}

fishland(['6.90','4.20','1.5','2.5','1'])
fishland(['5.55','3.57','4.3','3.6','7'])
fishland(['7.79','5.35','9.3','0','0'])