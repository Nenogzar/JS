function yardGreening(input){
    PRICEFORONEMETTER = 7.61
    DISCOUNTPURCENT = 0.18

    const area = Number(input[0])
    const price = area * PRICEFORONEMETTER
    const discount = price * DISCOUNTPURCENT
    const totalPriceService = price - discount
    console.log(`The final price is: ${totalPriceService} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["550"])
yardGreening(["150"])