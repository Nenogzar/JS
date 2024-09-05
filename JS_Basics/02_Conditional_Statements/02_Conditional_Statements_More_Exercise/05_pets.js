function pets(info){

    const [dayNumbers, food, dogFood,catFood, turtleFood] = info.map(Number)
    let dogEats = dayNumbers * dogFood
    let catEats = dayNumbers * catFood
    let turtleEats = (dayNumbers * turtleFood) / 1000

    let needetFoods = dogEats + catEats + turtleEats
    let deficite = Math.abs(Math.floor(food - needetFoods ))

    result =
        needetFoods >= food
            ? `${deficite} kilos of food left.`
            : `${deficite} more kilos of food are needed.`;
    console.log(result)
}

pets(["2","10","1","1","1200"])     // 3 kilos of food left.
pets(["5","10","2.1","0.8","321"])  // 7 more kilos of food are needed.