function repainting(input){
    const[nylonAmount, paintAmount, thinnerAmount, hours] = input.map(Number)
    const nylonPrice = 1.50
    const paintPrice = 14.50
    const thinnerPrice = 5.00
    const purchasedPaint = paintAmount * 1.1
    const purchasedNylon = nylonAmount + 2
    const bagsPrice = 0.40

    let amountNaylon = purchasedNylon * nylonPrice
    let amountPaint = purchasedPaint * paintPrice
    let amountThinner = thinnerAmount * thinnerPrice

    let price= amountNaylon + amountPaint + amountThinner + bagsPrice
    let paintingCost = (0.3 * price) * hours

    let totalPrice = price + paintingCost
    console.log(totalPrice)
}


repainting(["10 ","11 ","4 ","8 "])
repainting(["5 ",
    "10 ",
    "10 ",
    "1 "]
    )