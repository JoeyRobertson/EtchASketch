var gridSize = 16;
var cellSize = 600/gridSize;

$(document).ready(function() {
  drawBoard();

 $('#reset').click(function(){
    $('.unit').css("background-color", "white");
    gridSize = prompt("what size grid would you like?");
    drawBoard();
  });

});

function drawBoard() {
  $('#wrapper').empty()
  cellSize = 600/gridSize;
  for(var i=0; i < gridSize; i++) {
    for(var j=0; j < gridSize; j++){
      var unit = $('<div class="unit"></div>');
      unit.css({'width':cellSize+'px', 'height':cellSize + 'px'});
      unit.appendTo('#wrapper');
    }
  }
  $('.unit').hover(function(){
    $(this).css("background-color", randomColor());
  });
}

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
