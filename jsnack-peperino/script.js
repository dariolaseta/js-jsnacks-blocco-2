const peperoni = [
    {
        variety: "red",
        weight: 2,
        length: 3
    },

    {
        variety: "grey",
        weight: 1,
        length: 1
    },

    {
        variety: "pink",
        weight: 6,
        length: 7
    },

    {
        variety: "orange",
        weight: 5,
        length: 5
    },

    {
        variety: "black",
        weight: 2,
        length: 3
    },

    {
        variety: "white",
        weight: 3,
        length: 2
    },

    {
        variety: "purple",
        weight: 8,
        length: 5
    },

    {
        variety: "blue",
        weight: 4,
        length: 6
    },

    {
        variety: "green",
        weight: 5,
        length: 3
    },

    {
        variety: "yellow",
        weight: 1,
        length: 4
    },
];

let finalWeight = 0;

for(let i = 0; i < peperoni.length; i++){
    const peperone = peperoni[i];

    finalWeight += peperone.weight;
}

console.log("Il peso finale è: " + finalWeight);