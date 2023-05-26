let list = document.querySelector("ul");
let inputElement = document.getElementById("list").value;
let recipe = [];
let button = document.getElementById("add");
let secondButton = document.getElementById("random-image");

function createList(){
    let listElement = document.createElement("li");
    listElement.innerHTML = inputElement;

    return listElement;
}

button.addEventListener("click", function(){
    list.appendChild(createList());
    recipe.push(inputElement);
    console.log(recipe);
});

secondButton.addEventListener("click", function(){
    document.getElementById("image").innerHTML = '<img src="https://picsum.photos/700/600" alt="random image">';
    
});