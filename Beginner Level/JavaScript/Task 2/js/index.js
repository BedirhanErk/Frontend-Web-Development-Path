function createElement (task)
{
    //Create li Element
    let newTask = document.createElement("li");
    newTask.setAttribute("onclick", "taskDone(this)");
    newTask.innerHTML = `${task} <button type="button" class="close close-task" onclick="deleteElement(this)"><span>&times;</span></button>`;

    //Add Element to the list
    let list = document.querySelector("#list");
    list.appendChild(newTask);   
}

function newElement () 
{
    //Get Elements
    let task = document.querySelector("#task");
    let toastMessage = document.querySelector("#toastMessage");
    toastMessage.innerHTML = "";

    if (task.value && task.value.trim() !== "")
    {
        //Create li Element
        createElement(task.value);

        //Add Element to do localStorage
        let listItems = JSON.parse(localStorage.getItem("toDoList"));
        localStorage.clear("toDoList");
        if (!listItems)
            listItems = [];
        listItems.push(task.value.trim());
        localStorage.setItem("toDoList", JSON.stringify(listItems));
        
        //Clear and Set Message
        task.value = "";
        toastMessage.innerHTML = "Added to the list.";
    }
    else      
        toastMessage.innerHTML = "You can't add empty items to the list!";

    //Show Message
    $('#liveToast').toast('show')    
}

function deleteElement (thisElement) {
    thisElement.parentNode.remove();

    //delete from localStorage
    let listItems = JSON.parse(localStorage.getItem("toDoList"));
    if (listItems != null && listItems.length > 0) {
        let deletedValue = thisElement.parentNode.innerHTML.substring(0, thisElement.parentNode.innerHTML.indexOf("<")).trim();
        if (listItems.includes(deletedValue))
            listItems.splice(deletedValue.indexOf() ,1);

        localStorage.setItem("toDoList", JSON.stringify(listItems));
    }   
}

function taskDone (thisElement) {
    thisElement.classList.toggle("checked");
}

$(document).ready(function() {
    //Get old items
    let listItems = JSON.parse(localStorage.getItem("toDoList"));
    if (listItems != null && listItems.length > 0)
    {
        listItems.forEach(element => {
            createElement(element); 
        });
    }
});