function concatenateData(input){
    const TIMEFORONEPROGECT = 3
    const architectName = input[0];
    const progectNumbers = Number(input[1]);
    const result = TIMEFORONEPROGECT * progectNumbers
    console.log(`The architect ${architectName} will need ${result} hours to complete ${progectNumbers} project/s.`)
}

concatenateData(["George ","4 "])
concatenateData(["Sanya ","9 "])