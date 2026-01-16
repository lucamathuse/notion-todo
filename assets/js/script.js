// CREATE
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Custom-Header': 'CustomValue'
}

function createNewTask(){
    const element = document.getElementById('todo-content');
    // Create new entry

    // Upload data to Notion
}

// READ
function getTasks(){

}

function getDatabase(){
    const url = 'https://api.notion.com/v1/databases/2c3ea3ce57a781e6aeabda73a05db566';
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
}

// UPDATE
function toggleFilter(){
    
}

function toggleSettings(){
    const element = document.getElementById('todo-settings');
    const button = document.getElementById('settings');
    if(element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        button.classList.add('active');
        
    } else {
        element.classList.add('hidden')
        button.classList.remove('active');
    }
}

function updateTask(){

}

// DELETE
function deleteTask(){

}

document.addEventListener("DOMContentLoaded", function(e){
    console.log("Extension has loaded")

    document.getElementById('settings').addEventListener('click', toggleSettings);
    document.getElementById('add-new').addEventListener('click', createNewTask);
    document.getElementById('database').addEventListener('click', getDatabase)
})