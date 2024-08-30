function foodDelivery(input){
    [chickenMenuNumbers, fishMenuNumbers, vaganMenuNumbers] = input.map(Number)
    const pricChickenMenu = 10.35
    const prinFishMenu = 12.40
    const priceVaganMenu = 8.15
    const dessertPurcent = 0.20     // total price without delivery %
    const deliveryPrice = 2.50

    let orderedChickenMenu = chickenMenuNumbers * pricChickenMenu
    let orderedFishMenu = fishMenuNumbers * prinFishMenu
    let orderedVeganMeni = vaganMenuNumbers * priceVaganMenu
    let order = orderedChickenMenu+orderedVeganMeni+orderedFishMenu
    let orderedDesert = order * dessertPurcent

    let totalOrderPrice = order + orderedDesert + deliveryPrice
    console.log(totalOrderPrice)


}

foodDelivery(["2","4","3"])
foodDelivery(["9 ","2 ","6 "])