# chocolate tictactoe


##technologies used, 

html for building the elements on the page including the game board and peices
css for creating the chocolate box theme and styling
javascript to identify players, take turns and evaluate a winner when there are 3 peices in a row either horizontally, vertically or diagonally

##the approach taken

HTML/CSS
1. Build the core elements on the page: header (to display messages about turns, wins and instructions), the grid and the peices (divs).
2. Link images to represent the board peices and display on the board, give the board some definition so it is visible to the users.

JS
1. Identify page elements and create shortcuts to relevant elements that need to be manipulated later on (grid squares, header elements etc)
2. Add event listeners to the grid squares so that when a user clicks on one of them, we can define what happens
3. Define functions to:
  1. Handle a turn - check if the game should continue (based on number of turns and if a winner has been declared) and let a player claim a square if it is empty.
  2. Claim a square - how a square will change when a square is 'claimed' or a player puts their peice their
  3. Create Player Turns - switch betweens 2 players (so they can take turns) and identify which player's turn it currently and therefore which peice will display when a square is clicked on
  4. Check what peice are currently on the board and if there are 3 in a row either vertically, horizontally or diagonally.
  5. Check if there is a winner
  6. Check who the winner is and display who the winner is
  7. Refine instruction messaging to show what the user should do e.g pick a square, pick a different square or restart the game
  8. Restart the game - reset all the squares to unclaimed with no peices


##installation instructions,
Visit the github page to play the game https://debbieritapaterson.github.io/tictactoe/ OR download and open the html file in your web browser https://github.com/debbieritapaterson/tictactoe


##unsolved problems, etc.

1. Clean up forEach loops to add event listeners to grid squares.
2. Refine nested forEach loop to check if the classNames of the columns match and therefore there is a vertical win
3. Allow users to pick their own board peice image to represent themselves on the board
