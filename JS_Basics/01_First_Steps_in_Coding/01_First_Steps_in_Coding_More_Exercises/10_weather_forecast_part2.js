function weatherForecastTwo(info){
    const degrees = Number(info[0])

    let result = (degrees >= 5 && degrees < 12) ? `Cold` :
                 (degrees >= 12 && degrees < 15) ? `Cool` :
                 (degrees >= 15 && degrees <= 20) ? `Mild` :
                 (degrees > 20 && degrees < 26) ? `Warm` :
                 (degrees >= 26 && degrees <= 35) ? `Hot` :
                 `unknown`; 

    console.log(result)
}

// other solution: 

function weatherDependOnDegree(temperature) {
    temperature = parseFloat(temperature)
    let output = 'unknown'
    
    if (temperature >= 5.00 && temperature <= 11.9) {
        output = 'Cold'
    } else if (temperature <= 14.9) {
        output = 'Cool'
    } else if (temperature <= 20.00) {
        output = 'Mild'
    } else if (temperature <= 25.90) {
        output = 'Warm'
    } else if (temperature <= 35.00) {
        output = 'Hot'
    }

    console.log(output)
}

weatherForecastTwo(['16.5'])
weatherForecastTwo(['8'])
weatherForecastTwo(['22.04'])
weatherForecastTwo(['26'])
weatherForecastTwo(['0'])