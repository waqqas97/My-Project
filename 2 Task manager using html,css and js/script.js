const task = document.querySelectorAll(".task");
const all_status = document.querySelectorAll(".status");
let draggableTask = null;


task.forEach(task => {
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
});

function dragStart(){
    draggableTask = this;
    setTimeout(() => {
        this.style.display = "none";
    }, 0);
    console.log("dragStart");
}
function dragEnd(){
    draggableTask = null;
    setTimeout(() => {
        this.style.display = "block";
    }, 0);
    console.log("dragEnd");
}

all_status.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});

function dragOver(e){
    e.preventDefault();
    // console.log("dragOver");
    // console.log("dragover" + e.target.value);
}

function dragEnter(){
    this.style.border = "1px dashed #ccc";
    console.log("dragEnter");
}

function dragLeave(){
    this.style.border = "none";
    console.log("dragLeave");
}

function dragDrop(){
    this.style.border = "none";
    this.appendChild(draggableTask);
    console.log("dropped");
}


// modal
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
    btn.addEventListener("click", () =>{
        document.querySelector(btn.dataset.targetModal).classList.add("active");
        overlay.classList.add("active");
    });
});

close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});

window.onclick = (event) =>{
    if(event.target == overlay){
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};



// create task
const task_submit = document.getElementById("task_submit");

task_submit.addEventListener("click",createTask);

function createTask() {
    const task_div = document.createElement("div");
    const input_val = document.getElementById("task_input").value;
    const txt = document.createTextNode(input_val);

    task_div.appendChild(txt);
    task_div.classList.add("task");
    task_div.setAttribute("draggable", "true");
    
    // create span
    const span = document.createElement("span");
    const span_txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(span_txt);

    task_div.appendChild(span);

    no_status.appendChild(task_div);

    span.addEventListener('click', () => {
        span.parentElement.style.display = "none";
    });
    // console.log(task_div);

    task_div.addEventListener("dragstart", dragStart);
    task_div.addEventListener("dragend", dragEnd);

    document.getElementById("task_input").value = "";
    task_form.classList.remove("active");
    overlay.classList.remove("active");
}


const close_btns = document.querySelectorAll(".close");

close_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.style.display = "none";
    });
});