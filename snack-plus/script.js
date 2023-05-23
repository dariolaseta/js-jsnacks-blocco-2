let list = document.querySelector("ul");
let listItems = ["Uova", "Tonno", "Pomodori", "Pomodori", "Pomodori", "Pomodori", "Pomodori", "Pomodori", "Pomodori", "Pomodori"];


function createList(){
    let listElement = document.createElement("li");
    return listElement;
}

for(let i = 0; i < listItems.length; i++){
    let generatedList = createList();

    list.appendChild(generatedList);
}