function usdToBgn(input){
    const usd = Number(input[0])
    const fixing = 1.79549

    const result = usd * fixing
    console.log(result)

}

usdToBgn((["22"]))
usdToBgn((["100"]))
usdToBgn((["12.5"]))