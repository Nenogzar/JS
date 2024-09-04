function trainingLab(area){
    const[lengthMeters, widthMeters] = area.map(Number)

    const corridor = 100;
    const desk_width = 70;
    const desk_length = 120;
    let width = Math.floor(((widthMeters * 100) - corridor) / desk_width);
    let length = Math.floor(((lengthMeters * 100) / desk_length));
    let other_space = 3

    let total_space = width * length - other_space
    console.log(total_space)  
}
trainingLab(['15','8.9'])
trainingLab(['8.4','5.2'])


