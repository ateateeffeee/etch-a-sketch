const container = document.getElementById("container");
//Create board
function makeRows (rows, columns) {
    //let container = document.getElementById("container");
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for (c = 0; c < (rows * columns); c++) {
        let cell = document.createElement("div");
        //cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    }

}

//Draw starting Board
makeRows(16, 16);

//Paint on board
let paint = document.getElementsByClassName("grid-item");

//Add mouseover event listener
function addMouseoverEventListener() {  
    for (let i = 0; i < paint.length; i++)
    {
        paint[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = "black";
        });
    }
  }


//Generate random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

//Enable multicolor painting
function enableMultiColor() {
    console.log('poop');
    paint = document.getElementsByClassName("grid-item");
    for (let i = 0; i < paint.length; i++)
    {
        paint[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = getRandomColor();
        });
    }


    //basically copy and paste existing print things BUT
    //execute this on a button click, black will be default
    //RNG for the color yadda yadda yadda

}


//Actives initial painting
addMouseoverEventListener();

/*
for (let i = 0; i < paint.length; i++)
{
    paint[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = "black";
    });
}
*/

//Get new board size
function getNewBoard() {
    //Declare local variables
    let squares = '';
    let squaresInt = 0;
    //clear divs
    let removeOldGrid = document.getElementById("container");
    removeOldGrid.innerHTML = '';
    //get input from user
    do {
    squares = prompt('How many squares per side? Number can not exceed 100.');
    squaresInt = parseInt(squares);
    console.log(squaresInt);
    } while (squaresInt > 100);
    //generate new board
    makeRows(squaresInt, squaresInt);
    // Get the new element
    paint = document.getElementsByClassName("grid-item");
    // Add the event listener again
    addMouseoverEventListener();
}

//Clear board
function clearBoard() {
    
    for (let i = 0; i < paint.length; i++)
    {
        paint[i].style.backgroundColor = "";
        
    }
    getNewBoard();
}
