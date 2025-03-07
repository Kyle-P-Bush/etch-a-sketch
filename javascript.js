
let numOfRows = 16;
let numOfColumns = 16;

function generateCanvas(numOfRows, numOfColumns){

    let rowDiv =  document.createElement('div');
    rowDiv.id = "rowDiv";
    document.getElementById("gridContainer").appendChild(rowDiv);

    for(let i = numOfColumns; i > 0; i--) {

        let columnDiv = document.createElement('div');
        columnDiv.id = "columnDiv";
        columnDiv.textContent = "[]";
        document.getElementById("rowDiv").appendChild(columnDiv);

    }
    let newLineRow = document.createElement('div');
    newLineRow.id = "newLineRow";
    document.getElementById("gridContainer").appendChild(newLineRow);

}

generateCanvas(numOfRows, numOfColumns);
