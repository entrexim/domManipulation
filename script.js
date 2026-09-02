const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

const input = taskInput.value;

addBtn.addEventListener('click', () => {
    const newtask = document.createElement('li');
    newtask.textContent = input;
    //remove input 
    input = "";
    //creating checkbox for task completion
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.id = 'comCheckbox'
    //creating delete button 
    const deletbtn = document.createElement('btn');
    deletbtn.textContent = 'delete task';
    //appending all the elemnt that i have created
    document.taskList.append(newtask);
    document.taskList.append(checkbox);
    domcument.taskList.append(deletbtn);

    //working functionality of checkbox

    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            //fade the respective newtask using css addclasslist
    
        } else {
            //unfade the respective mewtask using css removecladslist
        }
    })
    //working functionality of deletbtn
    deletbtn.addEventListener('click', () => {
        // removing the respective newtask elements
        newtask.remove();
        deletbtn.remove();
        checkbox.remove();
    
    })

})


