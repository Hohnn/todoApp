console.log('helo')

const input = document.getElementById("create")
console.log(input.value)

function runScript(e) {
    if (e.keyCode == 13 && input.value != '') {        
        let para = document.createElement("div")
        para.classList = "test"
        para.id = "card"
        para.setAttribute('draggable', true)
        para.setAttribute('ondragstart', 'dragstart_handler(event)')
        const ggg = document.querySelectorAll(".test")        
        for (let a = ggg.length; a < ggg.length+1; a++) {
            para.innerHTML = '<div class="newTodo todo show" id="oui'+a+'"><button class="state"></button><div class="todoText" ></div><div class="suppr"></div></div>'
            console.log(a)           
        }       
        
        const liste = document.querySelector('.mycard')       
        liste.appendChild(para);
        const tb = document.getElementById("create");
        let value = tb.value;        
        const texte = document.querySelectorAll('.todoText')
        for (let i = texte.length-1; i < texte.length; i++) {
            const element = texte[i];
            element.innerHTML = value
            console.log([i])
            function click () {
                const suppr = document.getElementsByClassName('suppr')
                const state = document.getElementsByClassName('state')
                console.log(state)

                for (let i = 0; i < suppr.length; i++) {
                    suppr[i].onclick = test;
                    state[i+1].onclick = comp;                 
                    };

                function test (event) {
                    console.log(para)
                    var target = event.target;
                    var parent = target.parentElement;
                    var parpar = parent.parentElement;
                    console.log(parent.id)
                    const jjj = document.getElementById(parent.id)
                    const hh = jjj.parentElement
                    console.log(hh)
                    hh.parentNode.removeChild(hh)
                    itemCount()
                }
                
                function comp(event) {
                    var target = event.target;
                    target.classList.toggle('complited')
                    target.parentNode.childNodes[1].classList.toggle('barré')
                    itemCount()
                }                
            }   
        }

        tb.value = '';
        click();
        compClick();
        itemCount();
        
        return false;        
        
    }
}

function compClick() {
    const todo = document.querySelectorAll('.todo')
    const compi = document.getElementById('complited')
    const clear = document.getElementById('clear')
    const active = document.getElementById('active')
    const all = document.getElementById('all')
    const test = document.querySelectorAll('.test')
    console.log(todo[0].childNodes[0].classList);
    console.log(test.length);
    compi.onclick = compCheck;
    clear.onclick = clearCheck;
    active.onclick = activeCheck;
    all.onclick = allCheck;
    function compCheck() {
        for (let i = 0; i < test.length; i++) {
            if (todo[i].childNodes[0].classList == "state complited") {
                todo[i].classList.add('show')
            } else {
                todo[i].classList.remove('show')
            }
        }
    }
    function activeCheck() {
        for (let i = 0; i < test.length; i++) {
            if (todo[i].childNodes[0].classList == "state") {
                todo[i].classList.add('show')
            } else {
                todo[i].classList.remove('show')
            }
        }
    
    }
    function allCheck() {
        for (let i = 0; i < test.length; i++) {
            if (todo[i].childNodes[0].classList == "state" || "state complited") {
                todo[i].classList.add('show')
            }
        }
    
    }
    function clearCheck() {
        for (let i = 0; i < test.length; i++) {
            if (todo[i].childNodes[0].classList == "state complited") {
                console.log(test[i])
                test[i].parentNode.removeChild(test[i])
            }
        }
    
    }
}


function itemCount() {
    const todo = document.querySelectorAll('.todo')
    const test = document.querySelectorAll('.test')
    const state = document.querySelectorAll('.state')
    const items = document.getElementById('items')
    console.log(test.length)
    let t = 0
    for (let i = 0; i < test.length; i++) {
        if (todo[i].childNodes[0].classList == "state") {
            t++
            console.log(t)
        };        
        
    }
    if ( t == 0) {
        items.innerHTML = t + ' item left'
    } else {
        items.innerHTML = t + ' items left'
    }
    

}

function toggleMod() {
    const body = document.getElementById('Toggle')
    const moonLight = document.getElementById('moonLight')
    moonLight.onclick = test;
    function test() {
        body.classList.toggle('lightBody')
    }

}

toggleMod();

function dragstart_handler(ev) {
    // On ajoute différents types de données transportées
    ev.dataTransfer.setData("text/plain", ev.target.innerHTML);
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
}


function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
    ev.preventDefault();
    // On récupère l'identifiant de la cible et on ajoute l'élément déplacé au DOM de la cible
    var data = ev.dataTransfer.getData("application/my-app");
    if (ev.target.className == "mycard") {
        ev.target.appendChild(document.getElementById(data));
        console.log('pk')
    } else if (ev.target.classList.contains('newTodo')) {
        ev.target.parentNode.parentNode.insertBefore(document.getElementById(data), ev.target.parentNode.nextSibling);
        console.log(ev.target.parentNode.nextSibling)
    }
}








