function solve(input) {
    if (Number(input) % 2 === 0) {
        console.log("even")

    }else {
        console.log("odd")
    }
}

function solve1(input) {
    let num = Number(input)
    console.log(num % 2 === 0 ? "even" : "odd");
}

solve(["2"])
solve(["3"])
solve(["25"])
solve(["1024"])

solve1(["2"])
solve1(["3"])
solve1(["25"])
solve1(["1024"])