randomNumberGenerator(1, 5);

function randomNumberGenerator(min, max){
    let numberArray = [];

    if((max - min) < 4){
        return [];
    }

    while(numberArray.length < 4){
        let randomNumber = Math.floor(Math.random() * max) + min;
        if(!numberArray.includes(randomNumber)){
            numberArray.push(randomNumber);
        }
    }

    console.log(numberArray);
    return numberArray;
}