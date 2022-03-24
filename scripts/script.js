let newToDo = document.querySelector('#new-todo').addEventListener('submit', (event) => {
    event.preventDefault()
    const input = event.target.elements.value.trim()
    console.log(input);
})

let toDos = [];

function createToDo (text){
    toDos.push(text)
}