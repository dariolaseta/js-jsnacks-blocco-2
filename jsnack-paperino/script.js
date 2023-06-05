const nameArray = ["pippo", "plUTo", "pAPerino"];

console.log(nameArray);

const upperCaseArray = [];

nameArray.forEach((word) => {
    const newArray = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    upperCaseArray.push(newArray);
});

console.log(upperCaseArray);