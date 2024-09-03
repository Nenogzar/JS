function totalRaceTime(input) {
    [seconds1, seconds2, seconds3] = input.map(Number)

    let totalSeconds = seconds1 + seconds2 + seconds3;

    
    let seconds = totalSeconds % 60;
    let minutes = (totalSeconds - seconds) / 60

    console.log(
        seconds < 10 ? `${minutes}:0${seconds}`:
            `${minutes}:${seconds}`
    )
}   

totalRaceTime(["35",
    "45",
    "44"])  // 2:04

totalRaceTime(["22",
    "7",
    "34"]) // 1:03

totalRaceTime(["50",
    "50",
    "49"]) // 2:29

totalRaceTime(["14",
    "12",
    "10"]) //0:36