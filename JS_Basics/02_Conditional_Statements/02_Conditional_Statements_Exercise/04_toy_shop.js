function toysShop(info) {
    [excursionPrice, puzzlesNumber, dollsNumber, bearsNumber, minionsNumber, trucksNumber] = info.map(Number);
    const DISCOUNT = 0.25;
    const STORE_RENT = 0.10;  // 10% of sales for store rent
    const puzzlesPrice = 2.60;
    const dollsPrice = 3.00;
    const bearsPrice = 4.10;
    const minionsPrice = 8.20;
    const trucksPrice = 2.00;

    let itemsNumber = puzzlesNumber + dollsNumber + bearsNumber + minionsNumber + trucksNumber;
    let priceOrder = (puzzlesNumber * puzzlesPrice) +
        (dollsNumber * dollsPrice) +
        (bearsNumber * bearsPrice) +
        (minionsNumber * minionsPrice) +
        (trucksNumber * trucksPrice);

    priceOrder = itemsNumber >= 50 ? priceOrder * (1 - DISCOUNT) : priceOrder;

    let totalOrder = priceOrder * (1 - STORE_RENT);

    let priceForExcursion = totalOrder - excursionPrice;

    if (priceForExcursion >= 0) {
        console.log(`Yes! ${priceForExcursion.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${Math.abs(priceForExcursion).toFixed(2)} lv needed.`);
    }
}


toysShop(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])  // Yes! 418.20 lv left. 
    
toysShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"]) // Not enough money! 238.73 lv needed.
