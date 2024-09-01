// function greaterNumber(input) {
//     [num1, num2] = input.map(Number)
//     if (num1 > num2){
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// }

function greaterNumber(input) {
    [num1, num2] = input.map(Number)
    console.log(num1 > num2? num1 : num2)
}

greaterNumber(["5", "3"]);
greaterNumber(["3", "5"])
greaterNumber(["10", "10"])
greaterNumber(["-5", "5"])
