function totalRaceTime(input) {
    [seconds1, seconds2, seconds3] = input.map(Number)

    let totalSeconds = seconds1 + seconds2 + seconds3;

    
    let seconds = totalSeconds % 60;
    // let minutes = Math.floor(totalSeconds / 60);
    let minutes = (totalSeconds - seconds) / 60

    if (seconds < 10) {
        console.log(minutes + ":0" + seconds);
    } else {
        console.log(minutes + ":" + seconds);
    }
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