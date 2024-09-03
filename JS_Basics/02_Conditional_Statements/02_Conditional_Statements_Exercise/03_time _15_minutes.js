// function dayTime(hours){
//     [currentHour, currentMinutes] = hours.map(Number)
//     const increase = 15

//     let minutes = currentMinutes + increase

//     if (minutes >= 60){
//         minutes -= 60;
//         currentHour += 1;
//     }
//     //  hour = currentHour

//     let hour = (
//         currentHour >= 24 ? currentHour = 0 :  // or currentHour - 24
//         currentHour
//     ) 


//     if(minutes < 10){
//         console.log(`${hour}:0${minutes}`)
//     } else { console.log(`${hour}:${minutes}`) }
    
// }

function dayTime(hours) {
    let [currentHour, currentMinutes] = hours.map(Number);
    const increase = 15;

    let totalMinutes = currentMinutes + increase;

    let newHour = currentHour + Math.floor(totalMinutes / 60);
    let newMinutes = totalMinutes % 60;

    if (newHour >= 24) {
        newHour -= 24;
    }

    let formattedMinutes = newMinutes < 10 ? `0${newMinutes}` : newMinutes;
    let formattedHour = newHour;

    console.log(`${formattedHour}:${formattedMinutes}`);
}


dayTime(["1", "46"]) // 2:01

dayTime(["0", "01"]) // 0:16

dayTime(["23", "59"]) // 0:14

dayTime(["11", "08"]) // 11:23