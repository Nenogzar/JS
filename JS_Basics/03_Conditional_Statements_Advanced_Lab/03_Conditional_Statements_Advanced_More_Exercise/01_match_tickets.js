function matchTickets(info){
    let budjet = Number(info[0]);
    const category = info[1];
    const peopleNumber = Number(info[2]);

    const PRICE_VIP = 499.99;
    const PRICE_NORMAL = 249.99;
    let moneyForTransport = 0.00;
    
    let ticketЕxpense = 0.00;

    if (category === "VIP"){
        ticketЕxpense = PRICE_VIP * peopleNumber;
    } else if (category === "Normal"){
        ticketЕxpense = PRICE_NORMAL * peopleNumber;
    }

    if (peopleNumber > 50){
        moneyForTransport = budjet * 0.25;
    } else if(peopleNumber >= 25){
        moneyForTransport = budjet * 0.40;
    } else if (peopleNumber >= 10){
        moneyForTransport = budjet * 0.50;
    } else if (peopleNumber >= 5){
        moneyForTransport = budjet * 0.60;
    } else if (peopleNumber > 0){
        moneyForTransport = budjet * 0.75;
    }

    budjet -= moneyForTransport;

    let surplusDeficit = Math.abs(budjet - ticketЕxpense).toFixed(2);
    
    let result = budjet >= ticketЕxpense ? `Yes! You have ${surplusDeficit} leva left.` :
                  `Not enough money! You need ${surplusDeficit} leva.`;
    console.log(result);
}

matchTickets(["1000", "Normal", "1"]); // Yes! You have 0.01 leva left.
matchTickets(["30000", "VIP", "49"]);   //  Not enough money! You need 6499.51 leva.
