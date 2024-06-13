const todoInput = document.querySelector("#todolist")
const btn = document.querySelector("#clickList")
const todoList = document.querySelector("#todo-list");


btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const todoTxt = todoInput.value.trim()
    if(todoTxt !== ''){
        const li = document.createElement("li")
        
        li.textContent = todoTxt
        todoList.appendChild(li)
        todoInput.value=''

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent='Remover'
        
        deleteBtn.addEventListener("click",()=>{
            todoList.removeChild(li)
        })
        li.appendChild(deleteBtn)
    }
})