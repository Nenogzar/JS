function bikeRace(info) {
    const juniorNumbers = Number(info[0]);
    const seniorsNumbers = Number(info[1]);
    const typeTrace = String(info[2]);
    let espense = 0.00

    const taxes = { 
        juniors: {trail: 5.50, 'cross-country': 8.00, downhill: 12.25, road: 20.00},
        seniors: {trail: 7.00, 'cross-country': 9.5, downhill: 13.75, road: 21.5}
    };

    let taxesJuniors = taxes["juniors"][typeTrace];
    let taxesSeniors = taxes["seniors"][typeTrace];

    let totalTaxe = taxesJuniors * juniorNumbers + taxesSeniors*seniorsNumbers

    let totalBykers = juniorNumbers + seniorsNumbers

    if (typeTrace=== 'cross-country' && totalBykers >= 50){
        totalTaxe *= 0.75
    }

    totalTaxe *= 0.95

    console.log((totalTaxe).toFixed(2))

}


bikeRace(["10", "20", "trail"])             // 185.25
bikeRace(["21", "26", "cross-country"])     // 394.25
bikeRace(["30", "25", "cross-country"])     // 340.22
bikeRace(["10", "10", "downhill"])          // 247.00
bikeRace(["3", "40", "road"])               // 874.00
