let task = document.getElementById("task");
let add_btn = document.getElementById("add_btn");
let list = document.getElementById("task_list");

add_btn.addEventListener("click",add_task);

function add_task(){
    let task_value = task.value.trim();

    if(task_value != "" && task_value){
        let li = document.createElement("li");
        li.textContent = task_value;

        let btn = document.createElement("button");
        btn.textContent = "x";

        li.appendChild(btn);
        list.appendChild(li);

        task.value = "";

        btn.addEventListener("click",() => list.removeChild(li));
    } else{
        alert("Please enter the task");
    }
}

