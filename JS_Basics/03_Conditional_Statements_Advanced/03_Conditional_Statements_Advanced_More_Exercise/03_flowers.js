function flouwers(info){
    const purchasedChrysanthemums = Number(info[0])
    const purchasedRoses = Number(info[1])
    const purchasedTulips = Number(info[2])
    const season = String(info[3])
    const holiday = String(info[4]) === "Y"

    let priceFlowers = {
        Spring: {Chrysanthemums:2.00, Roses: 4.10, Tulips:2.50 },
        Summer: {Chrysanthemums: 2.00, Roses: 4.10, Tulips:2.50 },
        Autumn: {Chrysanthemums: 3.75, Roses: 4.50, Tulips:4.15 },
        Winter: {Chrysanthemums: 3.75, Roses: 4.50, Tulips:4.15 }
    }

    let priceChrysanthemums = purchasedChrysanthemums * priceFlowers[season]['Chrysanthemums'];
    let priceRoses = purchasedRoses * priceFlowers[season]['Roses'];
    let priceTulips = purchasedTulips * priceFlowers[season]['Tulips'];

    let priceBouquet = priceChrysanthemums + priceRoses * priceTulips;
    let totalFlowers = purchasedTulips +purchasedRoses + purchasedTulips;

    if (holiday) {
        priceBouquet *= 1.15
        if (purchasedTulips > 7 && season ==="Spring") {
            priceBouquet *= 0.95
            if (purchasedTulips >= 10 && season ==="Winter") {
                priceBouquet *= 0.90
            }if (totalFlowers > 20){
                priceBouquet *= 0.80
            }

        }
    }
    let totalPrice = priceBouquet + 2

    console.log(totalPrice.toFixed(2))
}

flowerShop(['2','4', '8', 'Spring', 'Y'])
flowerShop(['3','10', '9', 'Winter', 'N'])