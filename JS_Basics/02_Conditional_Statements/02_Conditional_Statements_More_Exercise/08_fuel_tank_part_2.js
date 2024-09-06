function fuelTanksTwo(input) {
    const fuelType = input[0];
    const amountFuel = Number(input[1]);
    const hasDiscountCard = input[2] === "Yes";

    const fuelPrices = {
        "Gasoline": { pricePerLiter: 2.22, discount: 0.18 },
        "Diesel": { pricePerLiter: 2.33, discount: 0.12 },
        "Gas": { pricePerLiter: 0.93, discount: 0.08 }
    };

    let pricePerLiter = fuelPrices[fuelType].pricePerLiter;
    
    if (hasDiscountCard) {
        pricePerLiter -= fuelPrices[fuelType].discount;
    }

    let totalPrice = pricePerLiter * amountFuel;

    if (amountFuel > 25) {
        totalPrice *= 0.90; // 10% discount
    } else if (amountFuel >= 20) {
        totalPrice *= 0.92; // 8% discount
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

fuelTanksTwo(["Gas", "30", "Yes"])          // 22.95 lv.
fuelTanksTwo(["Gasoline", "25", "No"])      // 51.06 lv.
fuelTanksTwo(["Diesel", "19", "No"])        // 44.27 lv.