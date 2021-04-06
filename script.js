console.log('helo')

const input = document.getElementById("create")
console.log(input.value)

function runScript(e) {
    if (e.keyCode == 13 && input.value != '') {        
        let para = document.createElement("div")
        para.classList = "test"
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
                    console.log(parent.id)
                    const jjj = document.getElementById(parent.id)
                    jjj.classList.toggle('show')
                   console.log(jjj.classList)
                }
                
                function comp(event) {
                    var target = event.target;
                    target.classList.toggle('complited')
                    console.log(target.classList)
                }                
            }   
        }

        tb.value = '';
        click();
        
        return false;        
        
    }
}











