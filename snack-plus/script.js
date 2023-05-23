let list = document.querySelector("ul");


function createList(){
    let listElement = document.createElement("li");
    listElement.innerHTML = "Test";

    return listElement;
}

for(let i = 0; i < listItems.length; i++){
    let generatedList = createList();
    
    list.appendChild(generatedList);
}