function vacationBooksList(input) {
    // const pagesNumber = Number(input[0]);
    // const pagesRead = Number(input[1]);
    // const daysNumber = Number(input[2])
    const [pagesNumber, pagesRead, daysNumber] = input.map(Number);

    let timeForRead = pagesNumber / pagesRead
    let needetTime = timeForRead / daysNumber
    console.log(needetTime)

}

vacationBooksList(["212 ", "20 ", "2 "])
vacationBooksList(["432 ", "15 ", "4 "])
