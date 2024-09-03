function shoping(info){
    const DISCOUNT = 0.15
    const[budget, videoCardNumber, cpuNumber, ramNumber] = info.map(Number)
    const videoCardPrice = 250
    let amountPurchasingForVideo = videoCardPrice * videoCardNumber

    let priceCPU = amountPurchasingForVideo * 0.35
    let priceRAM = amountPurchasingForVideo * 0.10

    let totalPrice = amountPurchasingForVideo + (cpuNumber * priceCPU) + (ramNumber * priceRAM)
    totalPrice = videoCardNumber > cpuNumber ? totalPrice *= (1 - DISCOUNT): totalPrice

    let deficitOrSurplus = Math.abs(budget - totalPrice)

    let result = totalPrice > budget ? `Not enough money! You need ${deficitOrSurplus.toFixed(2)} leva more!` : `You have ${deficitOrSurplus.toFixed(2)} leva left!`
    console.log(result)
}



shoping(["900",
    "2",
    "1",
    "3"])
/// You have 198.75 leva left!

shoping(["920.45",
    "3",
    "1",
    "1"])
    // Not enough money! You need 3.92 leva more!
