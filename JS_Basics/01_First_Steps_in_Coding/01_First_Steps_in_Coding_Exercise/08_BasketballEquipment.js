function basketballEquipment(input) {
  const priceForYear = Number(input[0]);
  const priceBasketballSneakers = priceForYear * 0.6;
  const priceBasketballEquip = priceBasketballSneakers * 0.8;
  const pricepriceBasketballBall = priceBasketballEquip * 0.25;
  const pricepriceBasketballAccessory = pricepriceBasketballBall * 0.2; // pricepriceBasketballBall / 5

  let totalPrice =
    priceForYear +
    priceBasketballEquip +
    priceBasketballSneakers +
    pricepriceBasketballBall +
    pricepriceBasketballAccessory;

  console.log(totalPrice);
}

basketballEquipment(["365 "]);
basketballEquipment(["550 "]);
