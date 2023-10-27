const button_clear_done = document.querySelector("#clear_button")
const input_newTodo = document.querySelector("#new_todo_input")
const button_add = document.querySelector("#add_todo_button")
const ul = document.querySelector("#ul_todo_list")

button_add.addEventListener('click', function () {
    add_li_to_ul(input_newTodo.value, false)
    input_newTodo.value = ""
})

button_clear_done.addEventListener('click', function () {
    const arr = document.querySelectorAll('.done')
    for (let i = 0; i < arr.length; i++) {
        arr[i].remove()
    }
})

function saveState() {
    const objdone = []
    const arr = document.querySelectorAll('li')
    for (let i = 0; i < arr.length; i++) {
        objdone.push({ text: arr[i].innerText, done: arr[i].classList.contains('done') })
    }
    const stringObjdone = JSON.stringify(objdone)
    localStorage.setItem("state", stringObjdone)
}

button_clear_done.addEventListener('click', saveState)
button_add.addEventListener('click', saveState)

function add_li_to_ul(text, done) {
    const li = document.createElement("li")
    li.innerText = text
    li.classList.toggle('done', done)
    li.addEventListener('click', function () {
        li.classList.toggle('done')
    })
    li.addEventListener('click', saveState)
    ul.appendChild(li)
}


function loadState() {
    const arr = JSON.parse(localStorage.getItem("state"))
    for (let i = 0; i < arr.length; i++) {
        add_li_to_ul(arr[i].text, arr[i].done)
    }
}

loadState()