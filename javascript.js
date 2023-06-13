
function createGrid(rows, columns){
    var container = document.createElement('div');
    container.className = "container";
    var rows = rows;
    var columns = columns;
    for (var i = 0; i < columns; ++i){
    var column = document.createElement('div');
    column.className = 'column';
        for (var j = 0; j < rows; ++j){
            var row = document.createElement('div');
            row.className = "row";
            column.appendChild(row);
        }
        container.appendChild(column);
    }
    document.body.appendChild(container);
}

var userRow = prompt("How many rows?");
var userColumns = prompt("How many colums?");

createGrid(userRow, userColumns);
