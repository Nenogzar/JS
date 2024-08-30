function fishTank(input){
    const [fishTankLength, fishTankWidth, fishTankHeight, fishTankPercentage] = input.map(Number)
    const litter = 1000
    let aquariumVolume = fishTankLength * fishTankWidth * fishTankHeight
    let volumeInLiters = aquariumVolume / litter
    let occupiedSpace = 1 - (fishTankPercentage /100)
    let litersNeeded = volumeInLiters * occupiedSpace

    console.log(litersNeeded)

}

fishTank(["85 ","75 ","47 ","17 "])
fishTank(["105 ","77 ","89 ","18.5 "])