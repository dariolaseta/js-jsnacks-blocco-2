let sum = 0;
let i = 0;
let media;

while(i < 10){
    let numbers = prompt("Inserisci 10 numeri: ");

    sum = parseInt(numbers) + sum;

    console.log(sum);
    i++;
}

if(i > 9){
    media = sum / 10;
    
    console.log(media);
}