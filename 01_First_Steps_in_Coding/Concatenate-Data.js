function concatenateData(input){
    const firstName = input[0];
    const lastName = input[1];
    const age = input[2];
    const town = input[3];

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)

}

concatenateData(['Stoyan', 'Naidenov', 46, 'Peshtera'])