
#html

need:
header, main, footer

in main: 
- need 3x grid whose contents change depending on if they are clicked and who clicked on them (noone/player1/player2)
- 
- 


#css
- need classes for states of squares (empty, player1, player2)
- need classes for header and footer design
- need class for main to style background




#js
- need positions to uniquely identify each square in the grid (MD array)
- need event listeners for all squares in the grid (addeventlistener)
- need to check if box is claimed or not yet (className?)
- need state change to alternate and indicate who's turn it is (?????)
- need state change to show who's peice will be displayed when square is clicked (classList.toggle)
- need to check if there are 3 of the same of either player 1 or player 2 in a row horizontally, vertically or diagonally (if statements using grid positions and class names)
    - horizontally = row index is the same
    - vertically = column index is the same
    - diagonally = row and column index of each one are different
- if there are 3 in a row, need to assign/display winner. (if statement with condition winner true/false + span.textContent/className)
