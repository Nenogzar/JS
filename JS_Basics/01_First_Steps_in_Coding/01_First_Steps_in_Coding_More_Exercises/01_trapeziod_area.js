function trapezoidArea(input){
    const[bOne, bTwo, h] = input.map(Number)
    let area = ((bOne + bTwo) * (h/2)).toFixed(2)
    console.log(area)
}

trapezoidArea(['8','13','7'])