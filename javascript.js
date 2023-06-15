var gridCount = 0;

function createGrid(){

    var container = document.createElement('div');
    container.setAttribute('id', 'container');
    var userRow = document.getElementById('userRow');
    var userColumn = document.getElementById('userColumn');
    for (var i = 0; i < userColumn.value; ++i){
    var column = document.createElement('div');
    column.setAttribute('id','column-' + (i+1));
    column.classList.add('column');
        for (var j = 0; j < userRow.value; ++j){
            var row = document.createElement('div');
            row.setAttribute('id', 'square-column-' + (i+1) + '-row-' + (j+1));
            row.classList.add('row');
            column.appendChild(row);
        }
        container.appendChild(column);
    }
    document.body.appendChild(container);
    gridCount += 1;
    console.log(gridCount)
}

var enter = document.getElementById('enter');

enter.addEventListener('click', function(){
  createGrid();
  var userRow = document.getElementById('userRow');
  var userColumn = document.getElementById('userColumn');
  var go = document.getElementById('enter');
  userColumn.style.display = 'none';
  userRow.style.display = 'none';
  go.style.display = 'none';
  
  var row = document.getElementsByClassName('row');

  for (var i = 0; i < row.length; i++) {
    row[i].addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = 'blue';
    });
  }

  var restart = document.createElement('button');
  restart.classList.add('restart');
  restart.textContent = 'restart';
  document.body.appendChild(restart);
  restart.addEventListener('click', function(){
    for (var i = 0; i < row.length; i++) {
        document.remove(row[i]);
      }
   });


})
