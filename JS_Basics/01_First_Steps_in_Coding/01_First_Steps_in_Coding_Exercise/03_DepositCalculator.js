function depositCalculator(input) {
    const depositAmount = Number(input[0]);
    const depositTimeInMonths = Number(input[1]);
    const annualInterestRate = (Number(input[2])) * 0.01; // or / 100
    const MONTHINYEAR = 12

    let accruedInterest = depositAmount * annualInterestRate
    let oneMonthInterest = accruedInterest / MONTHINYEAR

    let result = depositAmount + depositTimeInMonths * oneMonthInterest
    console.log(result)
}

depositCalculator(["200 ", "3 ", "5.7 "])
depositCalculator(["2350", "6 ", "7 "])