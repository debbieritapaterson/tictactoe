var boardSquares = document.querySelectorAll('.boardSquare');
var player1Squares = document.querySelectorAll('.claimedPlayer1');
var player2Squares = document.querySelectorAll('.claimedPlayer2');

var title = document.querySelector('h1');
var winMessage = document.querySelector('h2');
var squareSelectionMessage = document.querySelector('h3');
var startNewBtn = document.querySelector('button');

var numTurns = 0;
var player = document.querySelector('.playerName');
var playerName = "";
var winner = null;

boardSquaresArr = Array.from(boardSquares);

var gridPositions = [
boardSquaresArr.slice(0,3),
boardSquaresArr.slice(3,6),
boardSquaresArr.slice(6,9),
];

var checkWinner = function checkWinner (){

    //var winnerClass = checkHorizontalWin();

    if (checkHorizontalWin() === "boardSquare claimedPlayer1" || checkVerticalWin() === "boardSquare claimedPlayer1" || checkDiagonalWin() === "boardSquare claimedPlayer1"){
        winner = "Player 1";

    } else if (checkHorizontalWin() === "boardSquare claimedPlayer2" || checkVerticalWin() === "boardSquare claimedPlayer2" || checkDiagonalWin() === "boardSquare claimedPlayer2"){
        winner = "Player 2";

    } else {
        winner = null;
    }

    // checks if it is a draw (no more turns left and no winner) or win or to keep playing
    if (winner === null && numTurns === 9){
        squareSelectionMessage.textContent = "It's a draw!";
    } else if (winner === "Player 1" ||  winner === "Player 2"){
        //numTurns <= 9 &&
        winMessage.textContent = `${playerName} Wins!`;
        squareSelectionMessage.textContent = `Game Over`;
    }

}

//checks if the game should continue based on if there is a winner or not 
var handleTurn = function handleTurn (event) {


    //checks if square has already been claimed when clicked
    if (winner === null && event.target.classList.contains('empty')) {
        claimSquare(event.target);
        squareSelectionMessage.textContent = "Pick a square to claim";


    } else {
        squareSelectionMessage.textContent = "Pick another square, this one has been claimed";
    }

    numTurns++;

    checkWinner();  

 //debugger;
    
}

//checks whose turn it is and therefor who is claiming the square
var claimSquare = function claimSquare (){

    if (numTurns%2 === 0) {
        claimSquareP1(event);
        playerName = "Caramello";

    } else {
        claimSquareP2(event);
        playerName = "Salted Caramel";
    }

    player.textContent = playerName;


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

var checkSquareClass = function checkSquareClass (rowNum){
    
   // debugger;

    var squareClassNames = [];

    gridPositions[rowNum].forEach(function(square){
        
        squareClassNames.push(square.className);
    
    });

    //debugger;

    return squareClassNames;
}

// checks if the class names of the 3 squares in any ROW match
var checkRowClassNamesMatch = function checkRowClassNamesMatch (classNamesArr){

    var classNameMatch = "";

    classNamesArr.forEach(function (row,rowIndex){


        if (classNamesArr[rowIndex][0] === classNamesArr[rowIndex][1] && classNamesArr[rowIndex][1] === classNamesArr[rowIndex][2] && classNamesArr[rowIndex][0] !== "boardSquare empty"){
          
            classNameMatch = classNamesArr[rowIndex][0];
        } 

    });
    //debugger;
        return classNameMatch;

}

// checks if the class names of the 3 squares in any COLOUMN match
var checkColumnClassNamesMatch = function checkColumnClassNamesMatch (classNamesArr){

    var classNameMatchFlipped = [[],[],[]];
    var classNameMatch = "";

    //flips the array so that the column class names are now rows in a new array
    classNamesArr.forEach(function (row,rowIndex){

        classNameMatchFlipped[rowIndex].push(classNamesArr[0][rowIndex]);


        });

    classNamesArr.forEach(function (row,rowIndex){

        classNameMatchFlipped[rowIndex].push(classNamesArr[1][rowIndex]);

    });
    
    classNamesArr.forEach(function (row,rowIndex){

        classNameMatchFlipped[rowIndex].push(classNamesArr[2][rowIndex]);

    });

        console.log(classNameMatchFlipped);


    //console.log("check", classNameMatch);

    //forEach to check each column

    // if (classNameMatch[0][0] === classNameMatch[0][1] && classNameMatch[0][0] === classNameMatch[0][2] && classNameMatch[0][0] !== "boardSquare empty"){
            
    //     return classNameMatch[0][0];

    // }   else if (classNameMatch[1][0] === classNameMatch[1][1] && classNameMatch[1][0] === classNameMatch[1][2] && classNameMatch[0][1] !== "boardSquare empty"){
            
    //         return classNameMatch[0][1];

    //     } else if (classNameMatch[2][0] === classNameMatch[2][1] && classNameMatch[2][0] === classNameMatch[2][2] && classNameMatch[0][2] !== "boardSquare empty"){
            
    //         return classNameMatch[0][2];
        
    //     } else {

    //         return "";
    //     }

    classNameMatchFlipped.forEach(function (row,rowIndex){


            if (classNameMatchFlipped[rowIndex][0] === classNameMatchFlipped[rowIndex][1] && classNameMatchFlipped[rowIndex][1] === classNameMatchFlipped[rowIndex][2] && classNameMatchFlipped[rowIndex][0] !== "boardSquare empty"){
    
                classNameMatch = classNameMatchFlipped[rowIndex][0];
            } 
        });

        console.log(classNameMatch);
        return classNameMatch;

        //debugger;

}

var getClassNames = function getClassNames(){

    var classNames =[];

    //creates an array of classNames

gridPositions.forEach(function(row,i){
    classNames.push(checkSquareClass(i));

});

    //console.log(classNames);
    return classNames

}

   //checks if a player has won with a horizontal match (row index of matching classNames is the same)

var checkHorizontalWin = function checkHorizontalWin (){
    
    classNames = getClassNames();

    var matchingClassName = checkRowClassNamesMatch(classNames);

    //console.log(matchingClassName);    
    return matchingClassName;

}

   //checks if a player has won with a vertical match (column index of matching classNames is the same)

var checkVerticalWin = function checkVerticalWin (){
    
    classNames = getClassNames();

    var matchingClassName = checkColumnClassNamesMatch(classNames);

    //console.log("2", matchingClassName);    
    return matchingClassName;

}

// //checks if a player has won with a diagonal match(row and column index of each one are different)

var checkDiagonalWin = function checkDiagonalWin (){
    
    classNames = getClassNames();

    matchingClassName = "";

    if (classNames[0][0] === classNames[1][1] && classNames[0][0] === classNames[2][2] && classNames[0][0] !== "boardSquare empty"){
        console.log("diagonal win left to right");
        matchingClassName = classNames[0][0];
    }

    if (classNames[2][0] === classNames[1][1] && classNames[2][0] === classNames[0][2] && classNames[2][0] !== "boardSquare empty"){
        console.log("diagonal win right to left");
        matchingClassName = classNames[2][0];
    }

        //checksColumnClassNamesMatch(classNames)
    
    //console.log("3", matchingClassName);    
    return matchingClassName;

}

var startNewGame = function startNewGame (){

    //debugger;
    gridPositions.forEach(function (arr, row){

        gridPositions[row].forEach(function (square){

            square.classList.remove("claimedPlayer1");
            square.classList.remove("claimedPlayer2");
            square.classList.add("empty"); 

            //WHY does this make the row disappear at the end of each forEach!??
            //square.className = "boardsquare empty"; 

        });

    });

    winMessage.innerHTML = `It is <span class="playerName">Caramello</span>'s Turn`;
    squareSelectionMessage.textContent = `Pick a square to claim`;
    numTurns = 0;

}

// var resetClassName = function resetClassName (arr){

//     arr.forEach(function(square,i){
//         square[i].className = ;
//     });

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

startNewBtn.addEventListener('click', startNewGame);






// gridPositions[0][0].className === gridPositions[0][1].className &&gridPositions[0][2].className)
    
        // gridPositions[1][0].className === gridPositions[1][1].className &&  gridPositions[1][2].className)
    
        // gridPositions[2][0].className === gridPositions[2][1].className &&    gridPositions[2][2].className)
        

       
               