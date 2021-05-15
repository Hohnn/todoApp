const output = document.getElementById("output")
$("#create").on('keypress', (e) => {
    if (e.keyCode == 13 && create.value != '') {
        newDiv(create.value)
        create.value = ''
        delTodo()
        completed()
        itemCount()
    }
})

function newDiv(item1) {
    output.innerHTML += 
        `<div class="newTodo todo" data-todo data-active data-text="${item1}">
            <button class="state" data-button data-value="${item1}"></button>
            <div class="todoText">${item1}</div>
            <div class="suppr" data-delete data-del="${item1}"></div>
        </div>`
}

function delTodo() {
    $('div[data-delete]').click( function(){
        output.remove((`div[data-text="${this.dataset.del}"]`))
        itemCount()
    })
}

function completed() {
    $(`button[data-button]`).click( function () {
        let thisButton = document.querySelector(`button[data-value="${this.dataset.value}"]`)
        let $thisButton = $(`button[data-value="${this.dataset.value}"]`)
        $thisButton.toggleClass('complited')
        $thisButton.next().toggleClass('barré')
        thisButton.parentNode.toggleAttribute('data-completed')
        thisButton.parentNode.toggleAttribute('data-active')
    })
}

$(function allTodo() {   
    $("#all").click( ()=> {
        $('div[data-todo]').show()
    })    
})

$(function activeTodo() {
    $("#active").click(()=>{
        $('div[data-completed]').hide()
        $('div[data-active]').show()
    })
})

$(function completedTodo() {
    $("#completed").click( ()=>{
        $('div[data-active]').hide()
        $('div[data-completed]').show()
    })
})

$( function clearCompleted() {
    $('#clear').click( ()=> {
        $('div[data-completed]').remove()
        itemCount()
    })
})

function itemCount() {
    const items = $('#items')
    if (output.children.length > 1) {
        items.html(`${output.children.length} items`) 
    } else {
        items.html(`${output.children.length} item`)
    }
}

$( function toggleTheme () {
    $("#moonLight").click( () => {
        $("#Toggle").toggleClass('lightBody')
    } )
})

$( function sortable () {
    $( "#output" ).sortable();
    $( "#output" ).disableSelection();
  } );
