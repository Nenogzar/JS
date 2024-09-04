function sleepTom(input){
    const freeDaysNumber = Number(input[0])

    const needetSleepForYear = 30000        // min in year
    const freeDaysToPlay = 127          //min
    const workDaysPlay = 63             //min
    const workingDays = 365 - freeDaysNumber

    let timeForPlay = workingDays * workDaysPlay + freeDaysNumber * freeDaysToPlay
    
    let difference = Math.abs(needetSleepForYear - timeForPlay)

    let hours = Math.trunc(difference / 60) 
    let minets = difference % 60  // difference - (hours * 60);
    

    let result = (needetSleepForYear <= timeForPlay ? `Tom will run away \n${hours} hours and ${minets} minutes more for play`:
        `Tom sleeps well\n${hours} hours and ${minets} minutes less for play`

    )
    console.log(result)
}

sleepTom(['20'])
sleepTom(['113'])