var listofTasks = [];

var input = document.getElementById("input");

var task_list = document.getElementById("todolist");

document.getElementById("button").onclick = handleClick;

function handleClick(){

    listofTasks.push(input.value);
    console.log(listofTasks);

    input.value = "";
    List_elements();
}


function List_elements() {

    task_list.innerHTML = " ";

    listofTasks.forEach(function (n, i) {
      task_list.innerHTML+=
        "<li>" + 
        n +
        "<a onclick='editItem(" +
        i + 
        ")'>Edit</a>" + 
        "<a onclick='deleteItem(" +
        i + 
        ")'> &times | </a> </li>";
    }); 
}

function deleteItem(i){
    listofTasks.splice(i , 1);
    List_elements();
}

function editItem(i){ 
  var editedValue = prompt("Please insert new value of your choice ");
  listofTasks.splice(i, 1, editedValue);
  List_elements();
}
