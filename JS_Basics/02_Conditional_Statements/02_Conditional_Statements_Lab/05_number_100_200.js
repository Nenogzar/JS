// function solve(number) {
//     if (number < 100){
//         console.log("Less than 100");
//     }else if (number > 200){
//         console.log("Greater than 200");
//     }else{
//         console.log("Between 100 and 200");
//     }
// }


function solve(number) {
    const number1 = (
        number < 100 ? "Less than 100" :
            number > 200 ? "Greater than 200" :
                "Between 100 and 200"
    );
    console.log(number1);
}

solve(["95"])
solve(["120"])
solve(["210"])

// Python solution
// def solve(number):
// number1 = (
//     "Less than 100" if number < 100 else
//     "Greater than 200" if number > 200 else
//     "Between 100 and 200"
//     )
// print(number1)