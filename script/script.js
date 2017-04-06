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
    drawBoard();
  });

});

function drawBoard() {
  cellSize = 700/gridSize;
  for(var i=0; i < gridSize; i++) {
    for(var j=0; j < gridSize; j++){
      var unit = $('<div class="unit"></div>');
      $('.unit').css({'width':cellSize+'px', 'height':cellSize + 'px'});
      unit.appendTo('#wrapper');
    }
  }
}
