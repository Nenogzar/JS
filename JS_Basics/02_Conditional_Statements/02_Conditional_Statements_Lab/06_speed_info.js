function speedInfo(speed){
    const currentSpeed = Number(speed[0])

    const kindOfSpeed = (
        currentSpeed <= 10 ? "slow":
            currentSpeed <= 50 ? "average":
                currentSpeed <= 150 ? "fast":
                    currentSpeed <= 1000 ? "ultra fast":
                        "extremely fast"
    )
    console.log(kindOfSpeed)
}

speedInfo(["8"])
speedInfo(["49.5"])
speedInfo(["126"])
speedInfo(["160"])
speedInfo(["3500"])