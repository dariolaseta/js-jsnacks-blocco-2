const firstUserWord = prompt("Inserisci una parola: ");
const secondUserWord = prompt("Inserisci la seconda parola: ");


function wordLengthCheck(firstWord, secondWord){
    if(firstWord.length === secondWord.length){
        return true;
    }

    return false;
}

if(wordLengthCheck(firstUserWord, secondUserWord)){
    console.log("Sono uguali");
}else if(firstUserWord.length > secondUserWord.length){
    console.log(firstUserWord);
}else if(firstUserWord.length < secondUserWord.length){
    console.log(secondUserWord);
}