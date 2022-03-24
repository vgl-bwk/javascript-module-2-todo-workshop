let newToDo = document.querySelector('#new-todo')
newToDo.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = event.target.firstElementChild
    console.log(input.value.trim());
})



