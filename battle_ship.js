$(document).ready(function(){
  // alert($('td').attr('id'));
  for(var i = 0; i <= 9; i++) { //begins for loop for rows
    let row = "<tr id=row" + i +">column</tr>"
    $("#board").append(row)
    for(var j = 0; j <= 9; j++) { //begins for loop for columns
      $("#row"+ i).append("<td id=" +i+j+ "></td>")
    } //ends for loop
  }

  randomizerShip();


  var torpedoUsed = 0
  var hits = 0

  $("td").click(function(){
    var testing = $(this).attr('id')
    console.log((testing).split(""))
      var i = testing[0];
      var j = testing[1];

      if (board[i][j] !== 1) {
        $("#miss").text("Miss!!!!!!!!!!!!");
        $(this).css({"background":"red"})
      } else {
        $("#miss").text("Hit!!!!!!!!!!!")
        $(this).css({"background":"blue"})
        hits++
      }

      torpedoUsed++

      if (hits === 5) {
        $("td").off("click")
        $("#miss").text("Winner!!!!!!!!")
      }


    if (torpedoUsed <= 25) {
      console.log(torpedoUsed);
      $("#torpedos").text("Torpedos Used: " + torpedoUsed)
    } else {
      $("td").off("click")
      $("#torpedos").text("No more torpedos. You Lost!!!!")


      //
      // for (var x = 0; x <= board.length; x++) {
      //   alert("1")
      //   for (var y = 0; y <= board.length; y++) {
      //     if (board[x][y] === 1) {
      //       $("td").addClass(".lose")
      //       alert("2");
      //     }
      //   }
      // }

    }
  })


})

// jquery ends
var player1 = 1

var board =      [[0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0] ]

var shipOne = [4,7]
var shipOne = []
var shipOne = []
var shipOne = []
var shipOne = []

var computer = []
function randomizerShip() {
  for (i = 1; i<=5; i++) {
    var shipRow = Math.floor(Math.random()*10)
    computer.push(shipRow)
    var shipCol = Math.floor(Math.random()*10)
    computer.push(shipCol)
    board[shipRow][shipCol] = 1
  }
}
randomizerShip()
console.log(computer)


//
// for (var i = 0; i <= board.length; i++) {
//   for (var j = 0; j <= board.length; j++) {
//     if (board[i][j] === 1) {
//       console.log(board[i][j])
//     } else {
//     }
//   }
// }



//----------------
// function randomizerShip() {
//   for (i = 1; i<=5; i++) {
//     var shipRow = Math.floor(Math.random()*10)
//     console.log(shipRow);
//     var shipCol = Math.floor(Math.random()*10)
//     console.log(shipCol);
//     var loc= board[shipRow][shipCol]
//     console.log(board)
//     console.log(loc)
//   }
// }
// randomizerShip()
