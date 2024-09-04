function triangleArea(input){
    const[bOne,  h] = input.map(Number)
    let area = (bOne  * (h/2)).toFixed(2)
    console.log(area)
}
triangleArea(['20', '30'])
triangleArea(['15', '35'])
triangleArea(['7.75', '8.45'])
triangleArea(['1.23456' , '4.56789'])