console.log('helo')

const input = document.getElementById("create")
console.log(input.value)

function runScript(e) {
    if (e.keyCode == 13 && input.value != '') {
        let para = document.createElement("div")
        para.innerHTML = '<div class="newTodo todo show" id="todo1"><button class="state"></button><div class="todoText" ></div></div>'
        const liste = document.querySelector('.mycard')
       
        liste.appendChild(para);
        const tb = document.getElementById("create");
        let value = tb.value;        
        const texte = document.querySelectorAll('.todoText')
        for (let i = texte.length-1; i < texte.length; i++) {
            const element = texte[i];
            element.innerHTML = value
            console.log([i])
            
        }
        tb.value = '';
        
        
        console.log(texte)
        
        return false;
    }
}