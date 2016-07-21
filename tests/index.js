// could do one array with 9 spaces
// or three arrays with 3 spaces each and then wrap them all in an array

// [' ' , 'x' , ' ' ,
//  'o' , ' ' , ' ' ,
//  'x' , ' ' , ' ' ]

// or
// [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]

// [['x','','o'],
//  ['','x',''],
//  ['','','o']]

//try in three arrays initially
// each element in those arrays contains either an empty string or an 'x' or an 'o'

// set up players - x and o. x starts

// what does a player do on their turn
// set an element of the array to x or o based on who they are
  //ideally they would click one
// then their turn ends

// we want to keep track of whose turn it is
// playerTurn = 'x' -> change to 'o'

// end conditions:
// either player has three in a row - ie three characters are all the same (and not empty)
// if any of the follow patterns are true, one player wins
  // straight horizontal
    // arr[n][0] == arr[n][1] == arr[n][2]
  // straight vertical
    // arr[0][n]  == arr[1][n] == arr[2][n]
  // diagonal
    // arr[0][0] == arr[1][1] == arr[2][2]
    // arr[2][0] == arr[1][1] == arr[0][2]
  // if the pattern is 'x's then x wins and if it's 'o's then o wins
// if every array element is full then there's a stalemate and it's a cat game

// once the game is over, add one to the winning player's score and then reset the board
