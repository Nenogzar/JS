function godzilaVsKong(info){
    const PURCENT_FOR_DECOR = 0.10     // The set for the film is worth 10% of the budget.
    const DISCOUNT_FOR_CLOTES = 0.10    // With more than 150 extras, there is a 10% clothing discount.

    let [budgetMovie, statisticsNumber, clothingPrice] = info.map(Number)

    let decorPrice = budgetMovie * PURCENT_FOR_DECOR;

    clothingPrice *= statisticsNumber;
    
    clothingPrice = statisticsNumber > 150 ? clothingPrice *= (1-DISCOUNT_FOR_CLOTES): clothingPrice;

    let totalPrice = decorPrice + clothingPrice

    let profit = budgetMovie - totalPrice

    // if (profit >= 0 ){
    //     console.log(`Action!`)
    //     console.log(`Wingard starts filming with ${profit.toFixed(2)} leva left.`)
    // }else{
    //     console.log(`Not enough money!`)
    //     console.log(`Wingard needs ${Math.abs(profit).toFixed(2)} leva more.`)
    // }

    if (profit >= 0) {
        console.log(`Action!\nWingard starts filming with ${profit.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!\nWingard needs ${Math.abs(profit).toFixed(2)} leva more.`)
    }
}


godzilaVsKong(["20000",
    "120",
    "55.5"]) 

//Action! 
// Wingard starts filming with 11340.00 leva left.

godzilaVsKong(["15437.62",
    "186",
    "57.99"])

// Action! 
// Wingard starts filming with 4186.33 leva left. 


    godzilaVsKong(["9587.88",
    "222",
    "55.68"])

// Not enough money! 
// Wingard needs 2495.77 leva more.
