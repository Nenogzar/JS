function lunchBreak(info){
    const [filmName, episodeTime, breakDuration] = info.map(String, Number, Number)

    const lunchTime = breakDuration * 0.125  // * 1/8
    const leisureTime = breakDuration * 0.25 // * 1/4

    let watchTime = breakDuration - lunchTime - leisureTime
    let freeTime = Math.ceil(Math.abs(episodeTime - watchTime))  // not whit Math.round()

    let result = watchTime >= episodeTime ? `You have enough time to watch ${filmName} and left with ${freeTime} minutes free time.`:
        `You don't have enough time to watch ${filmName}, you need ${freeTime} more minutes.`

    console.log(result)
}

lunchBreak(["Game of Thrones",
    "60",
    "96"])
//  You have enough time to watch Game of Thrones and left with 0 minutes free time.

lunchBreak(["Teen Wolf",
    "48",
    "60"])
// You don't have enough time to watch Teen Wolf, you need 11 more minutes.