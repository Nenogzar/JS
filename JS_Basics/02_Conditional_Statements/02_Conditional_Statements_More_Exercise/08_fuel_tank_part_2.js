function fuelTanksTwo(info) {
    const fuelType = String(info[0]);
    const amountFuel = Number(info[1]);
    const card = String(info[2]);

    const gasolinePrice = [2.22, 0.18];
    const dieselPrice = [2.33, 0.12];
    const gasPrice = [0.93, 0.08];
    let price = 0.00;

    let dieselTotalPrice = 0.00;
    let gasTotalPrice = 0.00;
    let gasolineTotalPrice = 0.00;

    if (card === "Yes") {
        if (amountFuel <= 25 && amountFuel > 20) {
            if (fuelType === "Diesel") {
                dieselTotalPrice = amountFuel * (dieselPrice[0] - dieselPrice[1]);
                price = dieselTotalPrice + (amountFuel * 0.92);
            } else if (fuelType === "Gas") {
                gasTotalPrice = amountFuel * (gasPrice[0] - gasPrice[1]);
                price = gasTotalPrice + (amountFuel * 0.92);
            } else if (fuelType === "Gasoline") {
                gasolineTotalPrice = amountFuel * (gasolinePrice[0] - gasolinePrice[1]);
                price = gasolineTotalPrice + (amountFuel * 0.92);
            }
        } else if (amountFuel > 25) {
            if (fuelType === "Diesel") {
                dieselTotalPrice = amountFuel * (dieselPrice[0] - dieselPrice[1]);
                price = dieselTotalPrice * 0.90;
            } else if (fuelType === "Gas") {
                gasTotalPrice = amountFuel * (gasPrice[0] - gasPrice[1]);
                price = gasTotalPrice * 0.90;
            } else if (fuelType === "Gasoline") {
                gasolineTotalPrice = amountFuel * (gasolinePrice[0] - gasolinePrice[1]);
                price = gasolineTotalPrice * 0.90;
            }
        }
    } else if (card === "No") {
        if (fuelType === "Diesel") {
            dieselTotalPrice = amountFuel * dieselPrice[0];
            price = dieselTotalPrice;
        } else if (fuelType === "Gas") {
            gasTotalPrice = amountFuel * gasPrice[0];
            price = gasTotalPrice;
        } else if (fuelType === "Gasoline") {
            gasolineTotalPrice = amountFuel * gasolinePrice[0];
            price = gasolineTotalPrice;
        }
    }

    console.log(price);
}

fuelTanksTwo(["Gas", "30", "Yes"])          // 22.95 lv.
fuelTanksTwo(["Gasoline", "25", "No"])      // 51.06 lv.
fuelTanksTwo(["Diesel", "19", "No"])        // 44.27 lv.