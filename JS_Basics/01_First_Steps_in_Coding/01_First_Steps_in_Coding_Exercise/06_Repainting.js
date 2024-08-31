function repainting(input) {
  const [nylonAmount, paintAmount, thinnerAmount, hours] = input.map(Number);
  const nylonPrice = 1.5;
  const paintPrice = 14.5;
  const thinnerPrice = 5.0;
  const purchasedPaint = paintAmount * 1.1;
  const purchasedNylon = nylonAmount + 2;
  const bagsPrice = 0.4;

  let amountNaylon = purchasedNylon * nylonPrice;
  let amountPaint = purchasedPaint * paintPrice;
  let amountThinner = thinnerAmount * thinnerPrice;

  let price = amountNaylon + amountPaint + amountThinner + bagsPrice;
  let paintingCost = 0.3 * price * hours;

  let totalPrice = price + paintingCost;
  console.log(totalPrice);
}

repainting(["10 ", "11 ", "4 ", "8 "]);
repainting(["5 ", "10 ", "10 ", "1 "]);
