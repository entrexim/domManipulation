const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

const input = taskInput.value;

addBtn.addEventListener('click',()=>{
    const newtask = document.createElement('li');
    newtask.textContent = input;
    document.taskList.append(newtask); 
    //creating delete button
    const deletbtn = document.createElement('btn');
    deletbtn.textContent = 'delete task';



})

function deletbtnfn(){
    deletbtn.addEventListener('click',()=>{
        newtask.remove
        
    })
}