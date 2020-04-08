var boardSquares = document.querySelectorAll('.boardSquare');
var player1Squares = document.querySelectorAll('.claimedPlayer1');
var player2Squares = document.querySelectorAll('.claimedPlayer2');

var title = document.querySelector('h1');
var squareSelectionMessage = document.querySelector('h3');

var numTurns = 0;
var winner = null;

boardSquaresArr = Array.from(boardSquares);

var gridPositions = [
boardSquaresArr.slice(0,3),
boardSquaresArr.slice(3,6),
boardSquaresArr.slice(6,9),
];

var checkWinner = function checkWinner (){

    //var winnerClass = checkHorizontalWin();

    if (checkHorizontalWin() === "boardSquare claimedPlayer1"){
        winner = "Player 1";
        squareSelectionMessage.textContent = "is the winner!";
    } else if (checkHorizontalWin() === "boardSquare claimedPlayer2"){
        winner = "Player 2";
    } else {
        winner = null;
    }

    console.log(winner);

}

//checks if square has already been claimed when clicked
var handleTurn = function handleTurn (event) {

    if (winner === null){

        if (event.target.classList.contains('empty')) {
            claimSquare(event.target);
        } else {
            squareSelectionMessage.textContent = "pick another square, this one has been claimed";
        }
    } else {
        squareSelectionMessage.textContent = "Player X Wins!"
    }

    numTurns++;

    checkWinner();   
    
}

//checks whose turn it is and therefor who is claiming the square
var claimSquare = function claimSquare (){

   if (numTurns%2 === 0) {
    claimSquareP1(event);

    } else {
        claimSquareP2(event);

    }

}

//changes the square if player1 is claiming it
var claimSquareP1 = function claimSquareP1 (event){
    event.target.classList.remove('empty');
    event.target.classList.add('claimedPlayer1');

}

//changes the square if player2 is claiming it
var claimSquareP2 = function claimSquareP2(event){
    event.target.classList.remove('empty');
    event.target.classList.add('claimedPlayer2');
}


//checks if a player has won with a horizontal match (row index is the same)

var checkRowClass = function checkRowClass (rowNum){
    
   // debugger;

    var squareClassNames = [];

    gridPositions[rowNum].forEach(function(square){
        
        squareClassNames.push(square.className);
    
    });

    return squareClassNames;
}

var checkRowClassNamesMatch = function checkRowClassNamesMatch (classNames){

    var classNameMatch = [];

    classNames.forEach(function (row,rowIndex){


        if (classNames[rowIndex][0] === classNames[rowIndex][1] && classNames[rowIndex][1] === classNames[rowIndex][2]){

          
            classNameMatch.push(classNames[rowIndex][0]);
        } 

    });
    //debugger;
        return classNameMatch[0];

}

   //checks if a player has won with a horizontal match (row index of matching classNames is the same)

var checkHorizontalWin = function checkHorizontalWin (){
    
    var rowClassNames =[];

        //creates an array of classNames

    gridPositions.forEach(function(row,i){
        rowClassNames.push(checkRowClass(i));
    });

    //console.log(rowClassNames);

    var matchingClassName = checkRowClassNamesMatch(rowClassNames);

    console.log(matchingClassName);    
    return matchingClassName;

}
    
        





// var checkVerticalWin = function checkVerticalWin (){

//     return gridPosition[i][i].className;
// }

// //checks if a player has won with a diagonal match(row and column index of each one are different)
// var checkDiagonalWin = function checkDiagonalWin (){

//     return gridPosition[i][i].className;
// }

//checks who won based on class name of squares in a row
// var evaluateWinner = function evaluateWinner (){

//     checkHorizontalWin();
//     checkVerticalWin();
//     checkDiagonalWin();

//     if (gridPosition[i][i].className = "claimedPlayer1"){
//         winner = "Player 1";
//     } else if (gridPosition[i][i].className = "claimedPlayer2") {
//         winner = "Player 2";
//     } else {
//         winner = "null";
//     }
//     return winner;
// }


//condense into nested forEach()
gridPositions[0].forEach(element => {
    element.addEventListener('click', handleTurn);

});

gridPositions[1].forEach(element => {
    element.addEventListener('click', handleTurn);

});

gridPositions[2].forEach(element => {
    element.addEventListener('click', handleTurn);
});






// gridPositions[0][0].className === gridPositions[0][1].className &&gridPositions[0][2].className)
    
        // gridPositions[1][0].className === gridPositions[1][1].className &&  gridPositions[1][2].className)
    
        // gridPositions[2][0].className === gridPositions[2][1].className &&    gridPositions[2][2].className)
        

       
               