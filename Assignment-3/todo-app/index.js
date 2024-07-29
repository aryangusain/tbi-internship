const taskInput = document.querySelector("#task-input");
const btn = document.querySelector("button");
const taskList = document.querySelector("#task-list");

btn.addEventListener("click", (e) => {
    const newTask = taskInput.value;
    if(newTask == "") {
        console.log("error");
        return;
    }
    else {
        const div = document.createElement("div");
        div.classList.add("item");

        const input = document.createElement("input");
        input.type = "checkbox";

        const p = document.createElement("p");
        p.innerText = newTask;

        div.appendChild(input);
        div.appendChild(p);

        taskList.appendChild(div);
        taskInput.value = "";
    }
})

taskList.addEventListener('click', () => {
    let items = document.querySelectorAll('.item');
    for(let i=0; i<items.length; i++) {
        const checkbox = items[i].children[0];
        const p = items[i].children[1];
        if(checkbox.checked) {
            p.classList.add('complete');
        }
        else {
            p.classList.remove('complete');
        }
    }
})