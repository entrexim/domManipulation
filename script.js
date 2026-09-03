let taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');



function createTask() {

    const newtask = document.createElement('li');
    
    //handling input
    let input = taskInput.value;
    if (input == '') {
        return;
    } else {
        const span = document.createElement('span')
        span.textContent = input;
        newtask.appendChild(span)
        //remove input 
    
        taskInput.value = '';
        //creating checkbox for task completion
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.id = 'Checkbox'
        //creating delete button 
        const deletebtn = document.createElement('button');
        deletebtn.id = 'deletebtn'
        deletebtn.textContent = 'delete task';
        //appending all the elemnt that i have created
        newtask.append(checkbox);
        newtask.append(deletebtn);
    
        taskList.appendChild(newtask);
    
        //working functionality of checkbox
    
        checkbox.addEventListener('change', (event) => {
            if (event.target.checked) {
                //fade the respective newtask using css addclasslist
                span.classList.add('completed')
    
            } else {
                //unfade the respective mewtask using css removecladslist
                span.classList.remove('completed')
            }
        })
        //working functionality of deletbtn
        deletebtn.addEventListener('click', () => {
            // removing the respective newtask elements
            newtask.remove();
            deletebtn.remove();
            checkbox.remove();
    
        })
        
    }




}

addBtn.addEventListener('click',createTask);
taskInput.addEventListener('keydown',(event)=>{
    if(event.key ==='Enter'){
        createTask();
    }
})



