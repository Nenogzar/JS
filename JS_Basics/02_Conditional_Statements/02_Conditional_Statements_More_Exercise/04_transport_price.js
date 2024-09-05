function transportPrice(info){
    const [distanceKm, dayNight] = [Number(info[0]), String(info[1])];
    const taxi = [0.79, 0.90]         //distans < 20
    const autobus = 0.09           //distans >= 20
    const train = 0.06                 //distans >= 100 
    let result = 0.00


    if (distanceKm < 20 && dayNight == "day") {
        result = taxi[0] * distanceKm + 0.7;
    } else if (distanceKm < 20 && dayNight == "night") {
        result = taxi[1] * distanceKm + 0.7;
    } else if (distanceKm >= 100) {
        result = distanceKm * train;
    } else {
        result = distanceKm * autobus;
    }

    console.log((result).toFixed(2))
}

transportPrice(["5", "day"])        // 4.65
transportPrice(["7", "night"]);     // 7.00
transportPrice(["25","day"])        // 2.25
transportPrice(["180", "night"]);   // 10.80
