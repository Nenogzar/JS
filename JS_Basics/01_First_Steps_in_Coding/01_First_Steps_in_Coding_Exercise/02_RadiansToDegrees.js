function radiansToDegrees(input) {
    const DEGREES_RADIAN = 180
    const radian = Number(input[0])
    const degrees = radian * DEGREES_RADIAN / Math.PI
    console.log(degrees)
}

radiansToDegrees((["3.1416"]))
radiansToDegrees((["6.2832"]))