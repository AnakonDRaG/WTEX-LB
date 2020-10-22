const InputBoxName = "inputs-box";
var Table;
var InputsItem = [];

window.onload = () => {
    InputsItem = document.getElementById(InputBoxName).children;
    Table = document.getElementById("MainTable");

    let request = new XMLHttpRequest();
    request.open('GET', 'resource/JSON/table.json', true);
    request.onload = function() {
        let items = JSON.parse(this.response);
        for (let index = 0; index < items.length; index++) {
            const row = Table.insertRow(Table.rows.length);
            const element = items[index];
            row.insertCell(0).innerHTML = items[index].name;
            row.insertCell(1).innerHTML = items[index].adress;
            row.insertCell(2).innerHTML = items[index].phone;
            row.insertCell(3).innerHTML = items[index].timeWork;
        }

    }
    request.send();
}

function AddToTable() {
    const row = Table.insertRow(Table.rows.length);
    for (let index = 0; index < InputsItem.length; index++) {
        if (InputsItem[index].value == "") {
            RemoveLastElementInTable();
            alert("Заполните все поля!");
            break;
        }
        const element = InputsItem[index];
        const cell = row.insertCell(index);
        cell.innerHTML = InputsItem[index].value;
        InputsItem[index].value = null;
    }
}

function RemoveLastElementInTable() {
    if (Table.rows.length > 1)
        Table.deleteRow(Table.rows.length - 1);
}