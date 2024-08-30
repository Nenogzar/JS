function depositCalculator(input){
    const depositAmount = Number(input[0]);
    const depositTime = Number(input[1]);
    const annualInterestRate = (Number(input[2]))/100;
    const monthInYear = 12

    const accruedInterest = depositAmount * annualInterestRate
    const oneMonthInterest = accruedInterest / monthInYear

    let result = depositAmount + depositTime*oneMonthInterest
    console.log(result)

}

depositCalculator(["200 ","3 ","5.7 "])
depositCalculator(["2350","6 ","7 "])