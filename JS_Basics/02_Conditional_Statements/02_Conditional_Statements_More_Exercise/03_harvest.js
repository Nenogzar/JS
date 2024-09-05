function harvest(info){
    const [vineyardSqM, grapes, wineLitersRequired, workersNumber] = info.map(Number)
    const harvest = vineyardSqM * grapes
    const wineProduction = harvest * 0.4
    const wineBottel = wineProduction / 2.5

    let remainderOrShortage = Math.ceil(wineBottel - wineLitersRequired)

    let workersBottel = ( remainderOrShortage > 0 ? remainderOrShortage / workersNumber: 0) 

    if (wineBottel >= wineLitersRequired){
        console.log(
            `Good harvest this year! Total wine: ${wineBottel} liters.\n${remainderOrShortage} liters left -> ${workersBottel} liters per person.`
        );
        }else{
            console.log(
                `It will be a tough winter! More ${Math.floor(
                    wineLitersRequired - wineBottel
                )} liters wine needed.`
            );
        }
}   

harvest([650, 2, 175, 3])
// Good harvest this year! Total wine: 208 liters. 
// 33 liters left -> 11 liters per person. 

harvest([1020, 1.5, 425, 4])
// It will be a tough winter! More 180 liters wine needed.
