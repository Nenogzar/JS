//  with a ternary operator and variable

// function area(parameters) {
//     let result = 0;
//     if (parameters.length == 2) {
//         let figure = parameters[0];
//         let side = Number(parameters[1]);
//         result = (
//             figure === "square" ? side * side :
//                 figure === "circle" ? Math.PI * side * side : 
//                     0
//         );

//     } else if (parameters.length == 3) {
//         let figure = parameters[0];
//         let side = Number(parameters[1]);
//         let hypotenuse = Number(parameters[2]);
//         result = (
//             figure === "rectangle" ? side * hypotenuse :
//                 figure === "triangle" ? (side * hypotenuse) / 2 :
//                     0
//         );
//     }
//     console.log(result);
// }


// //  with a ternary operator and direct printing

// function area(parameters) {

//     if (parameters.length == 2) {
//         let figure = parameters[0];
//         let side = Number(parameters[1]);
//         console.log(
//             figure === "square" ? side * side :
//                 figure === "circle" ? Math.PI * side * side :
//                     0
//         );

//     } else if (parameters.length == 3) {
//         let figure = parameters[0];
//         let side = Number(parameters[1]);
//         let hypotenuse = Number(parameters[2]);
//         console.log(
//             figure === "rectangle" ? side * hypotenuse :
//                 figure === "triangle" ? (side * hypotenuse) / 2 :
//                     0
//         );
//     }
// }


/// Basics

function area(parameters) {
    let figure = parameters[0]
    if (figure == "square") {
        const side = Number(parameters[1])
        console.log(side * side)
    } else if (figure == "circle") {
        const side = Number(parameters[1])
        console.log(Math.PI * side * side)
    } else if (figure == "rectangle") {
        let side = Number(parameters[1]);
        let hypotenuse = Number(parameters[2]);
        console.log(side * hypotenuse)
    } else if (figure == "triangle") {
        let side = Number(parameters[1]);
        let hypotenuse = Number(parameters[2]);
        console.log((side * hypotenuse) / 2)
    }

}

area(["square", "5"]);       // 25
area(["rectangle", "7", "2.5"]); // 17.5
area(["circle", "6"]);       // 113.097 
area(["triangle", "4.5", "20"]); // 45
