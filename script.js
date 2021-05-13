const create = document.getElementById("create")
const output = document.getElementById("output")
create.addEventListener('keypress', (e) => {
    if (e.keyCode == 13 && create.value != '') {
        newDiv(create.value)
        create.value = ''
        delTodo()
        completed()
        allTodo()
        activeTodo()
        completedTodo()
        clearCompleted()
        itemCount()
    }
})

function newDiv(item1, item2) {
    output.innerHTML += 
        `<div class="newTodo todo show" data-todo data-active data-text="${item1}">
            <button class="state" data-button data-value="${item1}"></button>
            <div class="todoText">${item1}</div>
            <div class="suppr" data-delete data-del="${item1}"></div>
        </div>`
}

function delTodo() {
    let dataDelete = document.querySelectorAll('div[data-delete]')
    dataDelete.forEach(element => {
        element.addEventListener('click', function(){
            let parentDiv = document.querySelector(`div[data-text="${this.dataset.del}"]`)
            output.removeChild(parentDiv)
            itemCount()
        })
    })
}

function completed() {
    let dataButton = document.querySelectorAll(`button[data-button]`)
    dataButton.forEach(element => {
        element.addEventListener('click', function(){
            let thisButton = document.querySelector(`button[data-value="${this.dataset.value}"]`)
            thisButton.classList.toggle('complited')
            thisButton.nextElementSibling.classList.toggle('barré')
            thisButton.parentNode.toggleAttribute('data-completed')
            thisButton.parentNode.toggleAttribute('data-active')
        })
    })
}

function allTodo() {   
    const allButton = document.getElementById("all")
    allButton.addEventListener('click', ()=> {
        let allTodo = document.querySelectorAll('div[data-todo]')
        allTodo.forEach(element => {
            element.classList.add('show')
        })
    })    
}

function activeTodo() {
    const activeButton = document.getElementById("active")
    activeButton.addEventListener('click', ()=>{
        let activeTodo = document.querySelectorAll('div[data-active]')
        let completedTodo = document.querySelectorAll('div[data-completed]')
        completedTodo.forEach(element => {
            element.classList.remove('show')
        })
        activeTodo.forEach(element => {
            element.classList.add('show')
        })
    })
}

function completedTodo() {
    const completedButton = document.getElementById("completed")
    completedButton.addEventListener('click', ()=>{
        let activeTodo = document.querySelectorAll('div[data-active]')
        let completedTodo = document.querySelectorAll('div[data-completed]')
        activeTodo.forEach(element => {
            element.classList.remove('show')
        })
        completedTodo.forEach(element => {
            element.classList.add('show')
        })
    })
}

function clearCompleted() {
    const clearButton = document.getElementById("clear")
    clearButton.addEventListener('click', ()=> {
        let completedTodo = document.querySelectorAll('div[data-completed]')
        completedTodo.forEach(element => {
            output.removeChild(element)
        })
        itemCount()
    })
}

function itemCount() {
    const items = document.getElementById("items")
    if (output.children.length > 1) {
        items.innerHTML = `${output.children.length} items`
    } else {
        items.innerHTML = `${output.children.length} item`
    }
}

function toggleTheme() {
    const themeButton = document.getElementById("moonLight")
    const bodyTheme = document.getElementById("Toggle")
    themeButton.addEventListener('click', ()=> {
        bodyTheme.classList.toggle('lightBody')
    })
}

toggleTheme()

