$(document).ready(function(){

  randomizerShip();
  randomizerTwoLenthShip();
  randomizerThreeLenthShip();
  randomizerFourLenthShip();
  // randomizerFiveLenthShip()
  // randomizerFiveLenthShip()

  var hits = 0
  for(var i = 0; i <= 11; i++) {
    let row = "<tr id=row" + i +">column</tr>"
    $("#board").append(row)
    for(var j = 0; j <=11; j++) {
      $("#row"+ i).append("<td id=" +i+j+ "></td>")
    }
  }

  $("td").click(function() {
    var cellClicked = $(this).attr('id')
    var i = cellClicked[0];
    var j = cellClicked[1];

    if (board[i][j] == 0) {
      $("#result").text("Miss!!!!!!!!!!!!");
      $(this).css({"background":"blue"})
      board[i][j] = 9
      torpedoUsed++
    } else if (board[i][j] == 1){
      $("#result").text("Hit!!!!!!!!!!!")
      $(this).css({"background":"red"})
      hits++
      board[i][j] = 9
      torpedoUsed++
    } else if (board[i][j] == 2){
      $("#result").text("ALMOST!!!!!!!!!!!!");
      $(this).css({"background":"blue"})
      board[i][j] = 9
      torpedoUsed++
    } else {
      alert("You already fired there")
    }

    if (hits > 4) {
      $("td").off("click")
      $("#result").text("Winner!!!!!!!!")
    }

    if (torpedoUsed < 3) {
      console.log(torpedoUsed);
      $("#torpedos").text("Torpedos Used: " + torpedoUsed)
    } else {
      $("td").off("click")
      $("#torpedos").text("Torpedos Used: " + torpedoUsed + ". No more torpedos. You Lost!!!!")
      $(shipCombo).css({"background":"yellow"})
    }
    $("#hit").text("Total Hits: " + hits)

  })

})

//---------------------------------------
//---------------------------------------

var board =    [[0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0]]

var torpedoUsed = 0
var shipLocation = []
var shipCombo = []

//----------------------------------------------
//         CREATING A ONE LENTH SHIP
//----------------------------------------------
function randomizerShip() {
  for (var i = 1; i<=1; i++) {  // changed to only place one ship
    do {
        var shipRow = Math.floor(Math.random()*10 + 1)
        var shipCol = Math.floor(Math.random()*10 +1)
      } while (board[shipRow][shipCol] === 1 ||
               board[shipRow][shipCol] === 2);


    //upperleft

    if ((shipRow - 1) === -1 && (shipCol - 1) === -1) {
      board[shipRow  + 1][shipCol] = 2 //bottom
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
      board[shipRow][shipCol + 1 ] = 2 //right
    } else if ((shipRow - 1) === -1 && (shipCol + 1) === 10){ //upperright
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
    } else if((shipRow + 1) === 10 && (shipCol + 1) === 10){ //bottomright
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow - 1][shipCol - 1] = 2//upperleft
    } else if((shipRow + 1) === 10 && (shipCol - 1) === -1){ //bottomleft
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  - 1][shipCol +1] = 2//upperright
      board[shipRow][shipCol + 1 ] = 2 //right
    } else if((shipRow - 1) === -1){ //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
    } else if((shipCol - 1) === -1){ //left
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow  - 1][shipCol +1] = 2//upperright
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
    } else if((shipRow + 1) === 10){ //bottom
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow  - 1][shipCol +1] = 2//upperright
    } else if((shipCol + 1) === 10){ //right
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
    } else {
      board[shipRow - 1][shipCol] = 2
      board[shipRow  + 1][shipCol] = 2
      board[shipRow][shipCol - 1 ] = 2//left
      board[shipRow][shipCol + 1 ] = 2
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow  - 1][shipCol +1] = 2
      board[shipRow +1][shipCol - 1 ] = 2//botleft
      board[shipRow +1][shipCol + 1 ] = 2
    }

    board[shipRow][shipCol] = 1
    var ship = '#' + shipRow + "" + shipCol
    shipLocation.push(ship)
  }
shipMaker()
}
//------------------------------

function shipMaker() {
  shipCombo = shipLocation.join()
}

//----------------------------------------------
//         CREATING A TWO LENTH SHIP
//----------------------------------------------
function randomizerTwoLenthShip() {
  for (var i = 1; i<=1; i++) {  // changed to only place one ship
  do {
      var shipRow = Math.floor(Math.random()*10 +1)
      var shipCol = Math.floor(Math.random()*9)
      var shipColAddOne = shipCol + 1;
    } while (board[shipRow][shipCol] === 1 ||
             board[shipRow][shipCol] === 2 ||
             board[shipRow - 1][shipCol + 2 ] === 2 ||
             board[shipRow + 1][shipCol + 2 ] === 2 ||
             board[shipRow - 1][shipCol] === 2 ||
             board[shipRow  + 1][shipCol] === 2 ||
             board[shipRow][shipCol - 1 ] === 2 ||
             board[shipRow][shipCol + 1 ] === 2 ||
             board[shipRow - 1][shipCol - 1] === 2 ||
             board[shipRow  - 1][shipCol +1] === 2 ||
             board[shipRow + 1][shipCol - 1 ] === 2 ||
             board[shipRow +1][shipCol + 1 ] === 2 ||
             board[shipRow][shipCol + 2 ] === 2
           );

    board[shipRow][shipCol] = 1
    board[shipRow][shipColAddOne] = 1

    if ((shipRow - 1) === -1 && (shipCol - 1) === -1) {
      board[shipRow  + 1][shipCol] = 2 //bottom
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
      board[shipRow][shipCol + 1 ] = 2 //right
    } else if ((shipRow - 1) === -1 && (shipCol + 1) === 10){ //upperright
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
    } else if((shipRow + 1) === 10 && (shipCol + 1) === 10){ //bottomright
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow - 1][shipCol - 1] = 2//upperleft
    } else if((shipRow + 1) === 10 && (shipCol - 1) === -1){ //bottomleft
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  - 1][shipCol +1] = 2//upperright
      board[shipRow][shipCol + 1 ] = 2 //right
    } else if((shipRow - 1) === -1){ //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
    } else if((shipCol - 1) === -1){ //left
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow  - 1][shipCol +1] = 2//upperright
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
    } else if((shipRow + 1) === 10){ //bottom
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow  - 1][shipCol +1] = 2//upperright
    } else if((shipCol + 1) === 10){ //right
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
    } else {
      board[shipRow - 1][shipCol] = 2
      board[shipRow  + 1][shipCol] = 2
      board[shipRow][shipCol - 1 ] = 2//left
      board[shipRow][shipCol + 1 ] = 2
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow  - 1][shipCol +1] = 2
      board[shipRow +1][shipCol - 1 ] = 2//botleft
      board[shipRow +1][shipCol + 1 ] = 2
    }

    board[shipRow - 1][shipCol + 2 ] = 2//
    board[shipRow + 1][shipCol + 2 ] = 2//
    board[shipRow - 1][shipCol] = 2//
    board[shipRow  + 1][shipCol] = 2//
    board[shipRow][shipCol - 1 ] = 2//
    board[shipRow][shipCol + 1 ] = 2//
    board[shipRow - 1][shipCol - 1] = 2//
    board[shipRow  - 1][shipCol +1] = 2//
    board[shipRow + 1][shipCol - 1 ] = 2//
    board[shipRow +1][shipCol + 1 ] = 2//
    board[shipRow][shipCol + 2 ] = 2//

    var ship = '#' + shipRow + "" + shipCol
    var shipTwo = '#' + shipRow + "" + shipColAddOne
    shipLocation.push(ship)
    shipLocation.push(shipTwo)

    }
shipMaker()
}
//----------------------------------------------
//         CREATING A THREE LENTH SHIP
//----------------------------------------------
function randomizerThreeLenthShip() {
  for (var i = 1; i<=1; i++) {  // changed to only place one ship
  do {
      var shipRow = Math.floor(Math.random()*10 +1)
      var shipCol = Math.floor(Math.random()*8)
      var shipColAddOne = shipCol + 1;
      var shipColAddTwo= shipCol + 2;
    } while (board[shipRow][shipCol] === 1 ||
             board[shipRow][shipCol] === 2 ||
             board[shipRow - 1][shipCol] === 2 ||
             board[shipRow  + 1][shipCol] === 2 ||
             board[shipRow][shipCol - 1 ] === 2 ||
             board[shipRow - 1][shipCol - 1] === 2 ||
             board[shipRow  - 1][shipCol +1] === 2 ||
             board[shipRow +1][shipCol - 1 ] === 2 ||
             board[shipRow +1][shipCol + 1 ] === 2 ||
             board[shipRow][shipCol + 3 ] === 2 ||
             board[shipRow + 1][shipCol + 2 ] === 2 ||
             board[shipRow + 1][shipCol + 3 ] === 2 ||
             board[shipRow - 1][shipCol + 2 ] === 2 ||
             board[shipRow - 1][shipCol + 3 ] === 2
           );

    board[shipRow][shipCol] = 1
    board[shipRow][shipColAddOne] = 1
    board[shipRow][shipColAddTwo] = 1

    if ((shipRow - 1) === -1 && (shipCol - 1) === -1) {
      board[shipRow  + 1][shipCol] = 2 //bottom
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
      board[shipRow][shipCol + 1 ] = 2 //right
    } else if ((shipRow - 1) === -1 && (shipCol + 1) === 10){ //upperright
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
    } else if((shipRow + 1) === 10 && (shipCol + 1) === 10){ //bottomright
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow - 1][shipCol - 1] = 2//upperleft
    } else if((shipRow + 1) === 10 && (shipCol - 1) === -1){ //bottomleft
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  - 1][shipCol +1] = 2//upperright
      board[shipRow][shipCol + 1 ] = 2 //right
    } else if((shipRow - 1) === -1){ //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
    } else if((shipCol - 1) === -1){ //left
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow  - 1][shipCol +1] = 2//upperright
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
    } else if((shipRow + 1) === 10){ //bottom
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow  - 1][shipCol +1] = 2//upperright
    } else if((shipCol + 1) === 10){ //right
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
    } else {
      board[shipRow - 1][shipCol] = 2
      board[shipRow  + 1][shipCol] = 2
      board[shipRow][shipCol - 1 ] = 2//left
      board[shipRow][shipCol + 1 ] = 2
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow  - 1][shipCol +1] = 2
      board[shipRow +1][shipCol - 1 ] = 2//botleft
      board[shipRow +1][shipCol + 1 ] = 2
    }

    board[shipRow - 1][shipCol] = 2//
    board[shipRow  + 1][shipCol] = 2//
    board[shipRow][shipCol - 1 ] = 2 //
    board[shipRow - 1][shipCol - 1] = 2//
    board[shipRow  - 1][shipCol +1] = 2//
    board[shipRow +1][shipCol - 1 ] = 2//
    board[shipRow +1][shipCol + 1 ] = 2//
    board[shipRow][shipCol + 3 ] = 2//
    board[shipRow + 1][shipCol + 2 ] = 2//
    board[shipRow + 1][shipCol + 3 ] = 2//
    board[shipRow - 1][shipCol + 2 ] = 2//
    board[shipRow - 1][shipCol + 3 ] = 2


    var ship = '#' + shipRow + "" + shipCol
    var shipTwo = '#' + shipRow + "" + shipColAddOne
    var shipThree = '#' + shipRow + "" + shipColAddTwo

    shipLocation.push(ship)
    shipLocation.push(shipTwo)
    shipLocation.push(shipThree)

    }
shipMaker()
}
//----------------------------------------------
//         CREATING A FOUR LENTH SHIP
//----------------------------------------------
function randomizerFourLenthShip() {
  for (var i = 1; i<=1; i++) {  // changed to only place one ship
  do {
      var shipRow = Math.floor(Math.random()*10+1)
      var shipCol = Math.floor(Math.random()*7)
      var shipColAddOne = shipCol + 1;
      var shipColAddTwo= shipCol + 2;
      var shipColAddThree= shipCol + 3;
    } while (board[shipRow][shipCol] === 1 ||
             board[shipRow][shipCol] === 2 ||
             board[shipRow - 1][shipCol] === 2 ||
             board[shipRow  + 1][shipCol] === 2 ||
             board[shipRow][shipCol - 1 ] === 2 ||
             board[shipRow - 1][shipCol - 1] === 2 ||
             board[shipRow  - 1][shipCol +1] === 2 ||
             board[shipRow +1][shipCol - 1 ] === 2 ||
             board[shipRow +1][shipCol + 1 ] === 2 ||
             board[shipRow][shipCol + 4 ] === 2 ||
             board[shipRow + 1][shipCol + 2 ] === 2 ||
             board[shipRow + 1][shipCol + 3 ] === 2 ||
             board[shipRow - 1][shipCol + 2 ] === 2 ||
             board[shipRow - 1][shipCol + 3 ] === 2 ||
             board[shipRow - 1][shipCol + 4 ] === 2 ||
             board[shipRow + 1][shipCol + 4 ] === 2 );

    board[shipRow][shipCol] = 1
    board[shipRow][shipColAddOne] = 1
    board[shipRow][shipColAddTwo] = 1
    board[shipRow][shipColAddThree] = 1

    if ((shipRow - 1) === -1 && (shipCol - 1) === -1) {
      board[shipRow  + 1][shipCol] = 2 //bottom
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
      board[shipRow][shipCol + 1 ] = 2 //right
    } else if ((shipRow - 1) === -1 && (shipCol + 1) === 10){ //upperright
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
    } else if((shipRow + 1) === 10 && (shipCol + 1) === 10){ //bottomright
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow - 1][shipCol - 1] = 2//upperleft
    } else if((shipRow + 1) === 10 && (shipCol - 1) === -1){ //bottomleft
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  - 1][shipCol +1] = 2//upperright
      board[shipRow][shipCol + 1 ] = 2 //right
    } else if((shipRow - 1) === -1){ //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
    } else if((shipCol - 1) === -1){ //left
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow  - 1][shipCol +1] = 2//upperright
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
    } else if((shipRow + 1) === 10){ //bottom
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow  - 1][shipCol +1] = 2//upperright
    } else if((shipCol + 1) === 10){ //right
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
    } else {
      board[shipRow - 1][shipCol] = 2
      board[shipRow  + 1][shipCol] = 2
      board[shipRow][shipCol - 1 ] = 2//left
      board[shipRow][shipCol + 1 ] = 2
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow  - 1][shipCol +1] = 2
      board[shipRow +1][shipCol - 1 ] = 2//botleft
      board[shipRow +1][shipCol + 1 ] = 2
    }

    board[shipRow - 1][shipCol] = 2//
    board[shipRow  + 1][shipCol] = 2//
    board[shipRow][shipCol - 1 ] = 2 //
    board[shipRow - 1][shipCol - 1] = 2//
    board[shipRow  - 1][shipCol +1] = 2//
    board[shipRow +1][shipCol - 1 ] = 2//
    board[shipRow +1][shipCol + 1 ] = 2//
    board[shipRow][shipCol + 4 ] = 2//
    board[shipRow + 1][shipCol + 2 ] = 2//
    board[shipRow + 1][shipCol + 3 ] = 2//
    board[shipRow - 1][shipCol + 2 ] = 2//
    board[shipRow - 1][shipCol + 3 ] = 2
    board[shipRow - 1][shipCol + 4 ] = 2
    board[shipRow + 1][shipCol + 4 ] = 2


    var ship = '#' + shipRow + "" + shipCol
    var shipTwo = '#' + shipRow + "" + shipColAddOne
    var shipThree = '#' + shipRow + "" + shipColAddTwo
    var shipFour = '#' + shipRow + "" + shipColAddThree

    shipLocation.push(ship)
    shipLocation.push(shipTwo)
    shipLocation.push(shipThree)
    shipLocation.push(shipFour)

    }
shipMaker()
}
//----------------------------------------------
//         CREATING A FIVE LENTH SHIP *** NEEDS TO REVISE -- FAILS/BREAKS
//----------------------------------------------
function randomizerFiveLenthShip() {
  for (var i = 1; i<=1; i++) {  // changed to only place one ship
  do {
      var shipRow = Math.floor(Math.random()*10+1);
      var shipCol = Math.floor(Math.random()*6);
      var shipColAddOne = shipCol + 1;
      var shipColAddTwo= shipCol + 2;
      var shipColAddThree= shipCol + 3;
      var shipColAddFour= shipCol + 4;

    } while (board[shipRow][shipCol] === 1 ||
             board[shipRow][shipCol] === 2 ||
             board[shipRow - 1][shipCol + 2 ] === 2 ||
             board[shipRow + 1][shipCol + 2 ] === 2||
             board[shipRow - 1][shipCol] === 2 ||
             board[shipRow  + 1][shipCol] === 2 ||
             board[shipRow][shipCol - 1 ] === 2 ||
             board[shipRow][shipCol + 5 ] === 2 ||
             board[shipRow - 1][shipCol - 1] === 2 ||
             board[shipRow  - 1][shipCol +1] === 2 ||
             board[shipRow + 1][shipCol - 1 ] === 2 ||
             board[shipRow +1][shipCol + 1 ] === 2 ||
             board[shipRow][shipCol + 2 ] === 2 ||
             board[shipRow + 1][shipCol + 3 ] === 2 ||
             board[shipRow - 1][shipCol + 3 ] === 2 ||
             board[shipRow - 1][shipCol + 4 ] === 2 ||
             board[shipRow + 1][shipCol + 4 ] === 2 ||
             board[shipRow - 1][shipCol + 5 ] === 2 ||
             board[shipRow + 1][shipCol + 5 ] === 2
           );

    board[shipRow][shipCol] = 1
    board[shipRow][shipColAddOne] = 1
    board[shipRow][shipColAddTwo] = 1
    board[shipRow][shipColAddThree] = 1
    board[shipRow][shipColAddFour] = 1

    if ((shipRow - 1) === -1 && (shipCol - 1) === -1) {
      board[shipRow  + 1][shipCol] = 2 //bottom
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
      board[shipRow][shipCol + 1 ] = 2 //right
    } else if ((shipRow - 1) === -1 && (shipCol + 1) === 10){ //upperright
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
    } else if((shipRow + 1) === 10 && (shipCol + 1) === 10){ //bottomright
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow - 1][shipCol - 1] = 2//upperleft
    } else if((shipRow + 1) === 10 && (shipCol - 1) === -1){ //bottomleft
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  - 1][shipCol +1] = 2//upperright
      board[shipRow][shipCol + 1 ] = 2 //right
    } else if((shipRow - 1) === -1){ //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
    } else if((shipCol - 1) === -1){ //left
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow  - 1][shipCol +1] = 2//upperright
      board[shipRow +1][shipCol + 1 ] = 2 //bottomright
    } else if((shipRow + 1) === 10){ //bottom
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow][shipCol + 1 ] = 2 //right
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow  - 1][shipCol +1] = 2//upperright
    } else if((shipCol + 1) === 10){ //right
      board[shipRow - 1][shipCol] = 2 //top
      board[shipRow  + 1][shipCol] = 2// bottom
      board[shipRow][shipCol - 1 ] = 2 //left
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow +1][shipCol - 1 ] = 2//bottomleft
    } else {
      board[shipRow - 1][shipCol] = 2
      board[shipRow  + 1][shipCol] = 2
      board[shipRow][shipCol - 1 ] = 2//left
      board[shipRow][shipCol + 1 ] = 2
      board[shipRow - 1][shipCol - 1] = 2//upperleft
      board[shipRow  - 1][shipCol +1] = 2
      board[shipRow +1][shipCol - 1 ] = 2//botleft
      board[shipRow +1][shipCol + 1 ] = 2
    }

    board[shipRow - 1][shipCol + 2 ] = 2
    board[shipRow + 1][shipCol + 2 ] = 2
    board[shipRow - 1][shipCol] = 2
    board[shipRow  + 1][shipCol] = 2
    board[shipRow][shipCol - 1 ] = 2
    board[shipRow][shipCol + 5 ] = 2
    board[shipRow - 1][shipCol - 1] = 2
    board[shipRow  - 1][shipCol +1] = 2
    board[shipRow + 1][shipCol - 1 ] = 2
    board[shipRow +1][shipCol + 1 ] = 2
    board[shipRow][shipCol + 2 ] = 2
    board[shipRow + 1][shipCol + 3 ] = 2
    board[shipRow - 1][shipCol + 3 ] = 2
    board[shipRow - 1][shipCol + 4 ] = 2
    board[shipRow + 1][shipCol + 4 ] = 2
    board[shipRow - 1][shipCol + 5 ] = 2
    board[shipRow + 1][shipCol + 5 ] = 2


    var ship = '#' + shipRow + "" + shipCol;;
    var shipTwo = '#' + shipRow + "" + shipColAddOne;
    var shipThree = '#' + shipRow + "" + shipColAddTwo;
    var shipFour = '#' + shipRow + "" + shipColAddThree;
    var shipFive = '#' + shipRow + "" + shipColAddFour;

    shipLocation.push(ship)
    shipLocation.push(shipTwo)
    shipLocation.push(shipThree)
    shipLocation.push(shipFour)
    shipLocation.push(shipFive)

    }
shipMaker()
}

/////////////////////////test!!/////////////////

// function five() {
//   for (var i = 1; i<=1; i++) {  // changed to only place one ship
//     do {
//         var shipRow = Math.floor(Math.random()*10 + 1)
//         var shipCol = Math.floor(Math.random()*10 +1)
//       } while (board[shipRow][shipCol] === 1 ||
//                board[shipRow][shipCol] === 2);
//
//
//     //upperleft
//
//     if ((shipRow - 1) === -1 && (shipCol - 1) === -1) {
//       board[shipRow  + 1][shipCol] = 2 //bottom
//       board[shipRow +1][shipCol + 1 ] = 2 //bottomright
//       board[shipRow][shipCol + 1 ] = 2 //right
//     } else if ((shipRow - 1) === -1 && (shipCol + 1) === 10){ //upperright
//       board[shipRow  + 1][shipCol] = 2// bottom
//       board[shipRow][shipCol - 1 ] = 2 //left
//       board[shipRow +1][shipCol - 1 ] = 2//bottomleft
//     } else if((shipRow + 1) === 10 && (shipCol + 1) === 10){ //bottomright
//       board[shipRow - 1][shipCol] = 2 //top
//       board[shipRow][shipCol - 1 ] = 2 //left
//       board[shipRow - 1][shipCol - 1] = 2//upperleft
//     } else if((shipRow + 1) === 10 && (shipCol - 1) === -1){ //bottomleft
//       board[shipRow - 1][shipCol] = 2 //top
//       board[shipRow  - 1][shipCol +1] = 2//upperright
//       board[shipRow][shipCol + 1 ] = 2 //right
//     } else if((shipRow - 1) === -1){ //top
//       board[shipRow  + 1][shipCol] = 2// bottom
//       board[shipRow][shipCol - 1 ] = 2 //left
//       board[shipRow][shipCol + 1 ] = 2 //right
//       board[shipRow +1][shipCol - 1 ] = 2//bottomleft
//       board[shipRow +1][shipCol + 1 ] = 2 //bottomright
//     } else if((shipCol - 1) === -1){ //left
//       board[shipRow - 1][shipCol] = 2 //top
//       board[shipRow  + 1][shipCol] = 2// bottom
//       board[shipRow][shipCol + 1 ] = 2 //right
//       board[shipRow  - 1][shipCol +1] = 2//upperright
//       board[shipRow +1][shipCol + 1 ] = 2 //bottomright
//     } else if((shipRow + 1) === 10){ //bottom
//       board[shipRow - 1][shipCol] = 2 //top
//       board[shipRow][shipCol - 1 ] = 2 //left
//       board[shipRow][shipCol + 1 ] = 2 //right
//       board[shipRow - 1][shipCol - 1] = 2//upperleft
//       board[shipRow  - 1][shipCol +1] = 2//upperright
//     } else if((shipCol + 1) === 10){ //right
//       board[shipRow - 1][shipCol] = 2 //top
//       board[shipRow  + 1][shipCol] = 2// bottom
//       board[shipRow][shipCol - 1 ] = 2 //left
//       board[shipRow - 1][shipCol - 1] = 2//upperleft
//       board[shipRow +1][shipCol - 1 ] = 2//bottomleft
//     } else {
//       board[shipRow - 1][shipCol] = 2
//       board[shipRow  + 1][shipCol] = 2
//       board[shipRow][shipCol - 1 ] = 2//left
//       board[shipRow][shipCol + 1 ] = 2
//       board[shipRow - 1][shipCol - 1] = 2//upperleft
//       board[shipRow  - 1][shipCol +1] = 2
//       board[shipRow +1][shipCol - 1 ] = 2//botleft
//       board[shipRow +1][shipCol + 1 ] = 2
//     }
//
//     board[shipRow][shipCol] = 1
//     var ship = '#' + shipRow + "" + shipCol
//     shipLocation.push(ship)
//   }
// shipMaker()
// }
