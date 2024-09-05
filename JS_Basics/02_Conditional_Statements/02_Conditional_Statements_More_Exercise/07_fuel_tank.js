function fuelTank(input) {
    const [fuelType, amount] = input.map(String, Number);

    if (amount >= 25) {
        if (
            fuelType === "Diesel" ||
            fuelType === "Gasoline" ||
            fuelType === "Gas"
        ) {
            console.log(`You have enough ${fuelType.toLowerCase()}.`);
        } else {
            console.log(`Invalid fuel!`);
        }
    } else if (amount < 25) {
        if (
            fuelType === "Diesel" ||
            fuelType === "Gasoline" ||
            fuelType === "Gas"
        ) {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        } else {
            console.log(`Invalid fuel!`);
        }
    }
}

fuelTank(["Diesel", "10"]);     //Fill your tank with diesel!
fuelTank(["Gasoline", "40"]);   // You have enough gasoline
fuelTank(["Gas", "25"]);        // You have enough gas.
fuelTank(["Kerosene", "200"]);  // Invalid fuel!
