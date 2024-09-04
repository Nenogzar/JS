function pipeInPool(info){

    const [poolVolumeLiters, flowRateFirstPipe, flowRateSecondPipe, hoursWorker] = info.map(Number)
    let firstPipeDebit = flowRateFirstPipe * hoursWorker
    let secondPipeDebit = flowRateSecondPipe * hoursWorker
    let currentDebitPool = firstPipeDebit + secondPipeDebit

    let debitPullPursent = ((currentDebitPool / poolVolumeLiters) * 100).toFixed(2)
    let furstPurcent = ((firstPipeDebit / currentDebitPool) * 100).toFixed(2)
    let secondPurcent = ((secondPipeDebit / currentDebitPool) * 100).toFixed(2)
    let needLiters = currentDebitPool - poolVolumeLiters

    result = ( needLiters <= 0 ? `The pool is ${debitPullPursent}% full. Pipe 1: ${furstPurcent}%. Pipe 2: ${secondPurcent}%.`:
        `For ${(hoursWorker).toFixed(2)} hours the pool overflows with ${(needLiters).toFixed(2)} liters.`
     )

     console.log(result)

}

pipeInPool([1000 ,100, 120 ,3])
pipeInPool([100 ,100, 100 ,2.5])
