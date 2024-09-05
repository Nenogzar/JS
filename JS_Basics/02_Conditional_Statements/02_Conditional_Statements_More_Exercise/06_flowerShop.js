function flowerShop(info){
    const [magnolia, zumbuli, rose, kaktus, giftPrice] = info.map(Number);
    const [magnoliaPrice, zumbuliPrice, rosePrice, kaktusPrice] = [3.25, 4,3.50,8];
    const taxes = 0.05 ;
    let sales = (magnolia * magnoliaPrice + zumbuli * zumbuliPrice + kaktus * kaktusPrice + rose * rosePrice) * (1 - taxes);
    let deficite = Math.abs(giftPrice - sales);

    result =
        sales >= giftPrice
            ? `She is left with ${Math.floor(deficite)} leva.`
            : `She will have to borrow ${Math.ceil(deficite)} leva.`;

    console.log(result);
}

flowerShop(["2","3","5","1","50"])      //She will have to borrow 9 leva.
flowerShop(["15","7","5","10","100"])   //She is left with 65 leva.