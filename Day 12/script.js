let todos = document.getElementById("todo-container");

function gettodos(){
   let todoList =  localStorage.getItem("todos");
    todos.innerHTML = todoList;
}

function addto(event){
    if(event.code === "Enter"){
        let todo =  document.getElementById("todolist").value;
        if(todo){
        let list = `<li><span><i class="fa fa-trash"></i></span>${todo}</li>`;
        
        let container = document.getElementById("todo-container");
        container.innerHTML += list;
        document.getElementById("todolist").value =""
    }
    else{
        alert("Enter the value");
    }
    localStorage.setItem('todos',todos.innerHTML);
}
}

document.querySelector("ul").addEventListener('click',function(event){
    console.log(event.target);
    event.target.classList.toggle('completed');
    localStorage.setItem('todos',todos.innerHTML);

});

document.querySelector("ul").addEventListener('click',function(event){
    
    if(event.target.tagName === "I"){
        event.target.parentElement.parentElement.remove();
    }
    if(event.target.tagName === "span"){
        event.target.parentElement.remove();
    }
    localStorage.setItem('todos',todos.innerHTML);
   
});  