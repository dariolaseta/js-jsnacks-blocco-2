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

for(i = 0; i < cars.length; i++){
    const car = cars[i];
    if(car.fuel === "gas"){
        gasArray.push(car);
    }
}

cars.forEach(function(element){
    if(element.fuel === "diesel"){
        dieselArray.push(element);
    }
});

const otherFuels = cars.filter(cars => cars.fuel !== "gas" && cars.fuel !== "diesel");

console.log(gasArray);
console.log(otherFuels);
console.log(dieselArray);