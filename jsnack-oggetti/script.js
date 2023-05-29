const player = {
    codiceGiocatore: "",
    nome: "Gino",
    cognome: "Ginetti",
    età: 20,
    punti: 0,
    tiriGiusti: 0,
    stoppate: 0,
    tiri: 0,
};


player.punti = (randomNumber(0, 50));
player.tiriGiusti = (randomNumber(0, 100));
player.stoppate = (randomNumber(0, 30));
player.tiri = (randomNumber(20, 100));

console.log(player);

function randomNumber (min, max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return randomNumber;
}