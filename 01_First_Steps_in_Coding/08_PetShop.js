function petShop(input){
    const numberDogFood = Number(input[0]);
    const numberCatFood = Number(input[1])
    const priceDogFood = 2.50
    const priceCatFood = 4
    const result = (priceCatFood * numberCatFood) + (priceDogFood * numberDogFood)
    console.log(`${result} lv.`)
}


petShop(["5 ","4 "])
petShop(["13","9"])