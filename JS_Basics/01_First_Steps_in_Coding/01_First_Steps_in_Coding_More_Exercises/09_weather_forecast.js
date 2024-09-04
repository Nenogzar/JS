function weatherForecast(info){
    const weather = info[0]
    
    let result = (weather === "sunny" ? `It's warm outside!`: `It's cold outside!`)
    console.log(result)

}

weatherForecast(["sunny"] )
weatherForecast(["cloudy"] )
weatherForecast(["snowy"] )