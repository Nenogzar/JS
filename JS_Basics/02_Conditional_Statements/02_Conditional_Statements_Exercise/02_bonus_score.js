function bonusScore(num){
    let bonus = 0.00
    let points = Number(num[0])
    bonus = (
        points > 1000 ? points * 0.10:
            points > 200 ? points * 0.20 :
                points <= 100 ? 5:
                    0
    )

    bonus  = ( 
        points % 2 == 0 ? bonus + 1:
            points % 10 == 5 ? bonus +2:
                bonus
    )
    console.log(Number(bonus))
    console.log(Number(bonus + points))

}

bonusScore(["20"])
// 6 
// 26
bonusScore(["175"])
// 37
// 212
bonusScore(["2703"])
// 270.3
// 2973.3
bonusScore(["15875"])
// 1589.5
// 17464.5