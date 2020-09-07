const form = document.querySelector('.handleForm');
const inputColumn = document.getElementById('inputColumns');
const inputRow = document.getElementById('inputRows');

let columns = 0;
let rows = 0;

form.addEventListener("submit", e => {
    e.preventDefault();

    columns = inputColumn.value;
    rows = inputRow.value;

    addColumn(columns);
    addRow(rows);
})

function addColumn(columns){
    document.getElementById("contentColumns").innerHTML="";

    for (let i = 0; i < columns; i++) {
      
        var contentColumn = "<div class='contentColumn'></div>";
  
        document.getElementById("contentColumns").innerHTML += contentColumn;
    }
}

function addRow(rows){
    document.getElementById("contentRows").innerHTML="";

    for (let i = 0; i < rows; i++) {
        
        var contentRow = "<div class='contentRow'></div>";

        document.getElementById("contentRows").innerHTML += contentRow;
    }
}