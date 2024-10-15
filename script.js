// Function to load tasks from localStorage on page load
const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskbox = document.querySelector('.tasks');
    tasks.forEach(task => {
        const p = document.createElement('p');
        p.textContent = task;
        taskbox.appendChild(p);

        const delbutton = document.createElement('button');
        delbutton.textContent = 'Delete';
        delbutton.addEventListener('click', function () {
            p.remove();
            delbutton.remove();
            removeTaskFromLocalStorage(task);  // Remove from localStorage
        });

        taskbox.appendChild(delbutton);
    });
}

// Function to add task to localStorage
const addTaskToLocalStorage = (task) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to remove task from localStorage
const removeTaskFromLocalStorage = (task) => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task); // Filter out the task to remove
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to handle the "Add Task" button click
const handleClick = () => {
    const val = document.querySelector('input').value;
    if (!val) {
        alert('Enter a task please');
        return null;
    }

    const taskbox = document.querySelector('.tasks');
    const p = document.createElement('p');
    p.textContent = val;
    taskbox.appendChild(p);

    const delbutton = document.createElement('button');
    delbutton.textContent = 'Delete';
    delbutton.addEventListener('click', function () {
        p.remove();
        delbutton.remove();
        removeTaskFromLocalStorage(val);  // Remove from localStorage
    });

    taskbox.appendChild(delbutton);
    addTaskToLocalStorage(val);  // Add to localStorage
    document.querySelector('input').value = '';
    return 0;
}

// Load tasks when the page loads
document.addEventListener('DOMContentLoaded', loadTasks);
