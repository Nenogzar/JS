function usdToBgn(input){
    const usd = Number(input[0])
    const FIXING = 1.79549

    const result = usd * FIXING
    console.log(result)

}

usdToBgn((["22"]))
usdToBgn((["100"]))
usdToBgn((["12.5"]))