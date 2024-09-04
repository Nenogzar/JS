function housePainting(info){
    const [houseHeight, houseLength, wallRoofHeight] = info.map(Number)
    const greenColor = 3.4;
    const redColor = 4.3 ;
    const door = 1.2 * 2;
    const window = 1.5 * 1.5;

    // wall
    let sideWall = houseHeight * houseLength;
    let sideWallTotal = sideWall * 2 - window * 2;
    let backWall = (houseHeight * houseHeight) * 2  - door;
    let totalAreaWall = sideWallTotal + backWall;
    let greenNeedet = (totalAreaWall / greenColor).toFixed(2);

    // roof
    let twoRectangleRoof = 2 * sideWall;
    let twoTriangelRoof = (houseHeight * wallRoofHeight /2) * 2;
    let totalAreaRoof = twoRectangleRoof + twoTriangelRoof;
    let redNeedet = (totalAreaRoof / redColor).toFixed(2);
    let result = `${greenNeedet}\n${redNeedet}`
    console.log( result)

}   

housePainting(['6','10','5.2'])
housePainting(['10.25','15.45','8.88'])