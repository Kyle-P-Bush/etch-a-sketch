
let numOfRows = 16;
let numOfColumns = 16;

function generateCanvas(numOfRows, numOfColumns){

    for(let i = numOfRows; i > 0; i--) {
        
        let div =  document.createElement('div');
        div.textContent = "[ ]";
        div.id = "node"
        document.getElementById("gridContainer").appendChild(div);
        /*
        for(let i = numOfColumns; i >= 0; i--) {

            let div =  document.createElement('div');
            div.textContent = "Hello, World!";

            document.getElementById("gridContainer").appendChild(div);
        }
        */
    }
}

generateCanvas(numOfRows, numOfColumns);
