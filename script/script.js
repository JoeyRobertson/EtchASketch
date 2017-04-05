var gridSize = 17;
var cellSize = 700/gridSize;

$(document).ready(function() {
  drawBoard();

  $('.unit').hover(function(){
    $(this).css("background-color", "black");
  });

  $('#reset').click(function(){
    $('.unit').css("background-color", "white");
    gridSize = prompt("what size grid would you like?");
    cellSize = 700/gridSize;
    drawBoard();
  });

});

function drawBoard() {
  for(var i=0; i < gridSize; i++) {
    for(var j=0; j < gridSize; j++){
      var unit = $('<div class="unit"></div>');
      $('.unit').height(cellSize);
      $('.unit').width(cellSize);
      unit.appendTo('#wrapper');
    }
  }
}
