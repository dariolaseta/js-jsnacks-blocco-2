const randomNumber = Math.floor(Math.random() * 100) + 1;
let correctNumber = false;
let tries = 0;
console.log(randomNumber);

while(!correctNumber){
    userNumber = parseInt(prompt("Indovina il numero: "));

    if(userNumber < randomNumber){
        console.log("Il numero da indovinare è più grande.")
        tries++;
    }else if(userNumber > randomNumber){
        console.log("Il numero da indovinare è più piccolo.")
        tries++;
    }else if(userNumber == randomNumber){
        console.log("Hai indovinato!");
        correctNumber = true;
        console.log("Ci hai messo " + tries + " tentativi.");
    }else{
        console.log("Non hai inserito un numero.")
    }
}

