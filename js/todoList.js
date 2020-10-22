var todoList;
var todoActinTextInput;
const localStorageKeyName = "todoListItems";

window.onload = () => {
    todoList = document.getElementById("todo-list");
    todoActinTextInput = document.getElementById("todo-action-text");
    if (localStorage.getItem(localStorageKeyName) == null)
        localStorage.setItem(localStorageKeyName, JSON.stringify([]));
    updateTodoList();

}

function addTodoItem() {

    let jsonCacheItems = [];

    if (todoActinTextInput.value != '') {
        let jsonItem = { todo: todoActinTextInput.value };
        jsonCacheItems = JSON.parse(localStorage.getItem(localStorageKeyName));

        jsonCacheItems.push(jsonItem);
        localStorage.setItem(localStorageKeyName, JSON.stringify(jsonCacheItems));
        addLastItemToTodoList(jsonItem.todo, jsonCacheItems.length - 1);

    } else {
        alert("Заполните поле");
    }

}


function removeTodoItem() {
    localStorage.setItem(localStorageKeyName, JSON.stringify([]));
    //delete localStorage[localStorageKeyName];
    todoList.innerText = '';
}

function addLastItemToTodoList(text, index) {
    const deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "Удалить";
    deleteButton.classList.add("btn", "bg-green", "btn-sm", "ml-5", "text-white");
    deleteButton.setAttribute("onclick", "removeItemById(" + index + ", this.parentElement)");
    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerText = text;
    listItem.append(deleteButton);
    todoList.append(listItem);
}

function updateTodoList() {
    const items = JSON.parse(localStorage[localStorageKeyName]);
    for (let i = 0; i < items.length; i++) {
        addLastItemToTodoList(items[i].todo, i);
    }
}

function removeItemById(idItem, parent) {
    let jsonCacheItems = JSON.parse(localStorage.getItem(localStorageKeyName));
    jsonCacheItems.splice(idItem, 1);
    localStorage.setItem(localStorageKeyName, JSON.stringify(jsonCacheItems));

    todoList.removeChild(parent);
}