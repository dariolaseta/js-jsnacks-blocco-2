const cars = [
    {
        brand: "audi",
        model: "A3",
        fuel: "diesel",
    },

    {
        brand: "dacia",
        model: "AS3",
        fuel: "diesel",
    },

    {
        brand: "bmw",
        model: "A6",
        fuel: "gas",
    },

    {
        brand: "audi",
        model: "A3",
        fuel: "diesel",
    },

    {
        brand: "panda",
        model: "A3",
        fuel: "diesel",
    },

    {
        brand: "honda",
        model: "civic",
        fuel: "diesel",
    },

    {
        brand: "toyota",
        model: "trueno",
        fuel: "gas",
    },

    {
        brand: "hyundai",
        model: "A34",
        fuel: "gas",
    },

    {
        brand: "audi",
        model: "A1",
        fuel: "gas",
    },

    {
        brand: "citroen",
        model: "B3",
        fuel: "diesel",
    },

    {
        brand: "tesla",
        model: "A76",
        fuel: "electric",
    },

    {
        brand: "ferrari",
        model: "f",
        fuel: "diesel",
    },

    {
        brand: "alfa romeo",
        model: "b",
        fuel: "gas",
    },

    {
        brand: "citroen",
        model: "c3",
        fuel: "gas",
    },

    {
        brand: "tesla",
        model: "e",
        fuel: "electric",
    },

    
];

const gasArray = [];
const dieselArray = [];

/*for(i = 0; i < cars.length; i++){
    if(cars.fuel === "gas"){
        console.log(cars.fuel)
    }
}
console.log(gasArray);*/

cars.forEach(function(item){
    if(item.fuel === "diesel"){
        dieselArray.push(item);
    }
});
console.log(dieselArray);

let otherFuels = cars.filter(cars => cars.fuel !== "gas" && cars.fuel !== "diesel");
console.log(otherFuels)