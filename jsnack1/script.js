let numbers = [];
let sum = 0;

while(sum < 50){
    let userNumbers = prompt("Inserisci un numero: ");

    sum = parseInt(userNumbers) + sum;
    numbers.push(userNumbers);
    console.log(sum);
    console.log(numbers);
}