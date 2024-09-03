function worldRecord(info){
    const [recordSec, distanceMetters, timeSec] = info.map(String)  // timeSec -> the time in seconds it takes to swim a distance of 1 m
    const WATERRESISTANCEinSEC = 12.5 // water resistance slows it down every 15 m by 12.5 seconds

    let timeFromResistance = Math.floor(distanceMetters / 15) * WATERRESISTANCEinSEC ;

    let timeDistance = distanceMetters * timeSec;

    let totalTime = timeFromResistance + timeDistance;


    let result = totalTime >= recordSec ? `No, he failed! He was ${Math.abs(recordSec - totalTime).toFixed(2)} seconds slower.` : 
    `Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`

    console.log(result)

}

worldRecord(["10464",
    "1500",
    "20"])
// No, he failed! He was 20786.00 seconds slower.

worldRecord(["55555.67",
    "3017",
    "5.03"])
//Yes, he succeeded! The new world record is 17688.01 seconds.