function celsiusToFahrenheit(degree){
    const degreeHarenheit = (Number(degree[0]) * 1.8 +32).toFixed(2)
    console.log(degreeHarenheit)
}

celsiusToFahrenheit([25])
celsiusToFahrenheit([0])
celsiusToFahrenheit([-5.5])
celsiusToFahrenheit([32.3])

