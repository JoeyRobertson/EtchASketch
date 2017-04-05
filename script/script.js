//var gridSize = prompt("what size grid would you like? Might I suggest 16?");

$(document).ready(function() {
  for(var i=0; i < 16; i++) {
    for(var j=0; j < 16; j++){
      var unit = $('<div class="unit"></div>');
      unit.appendTo('#wrapper');
    }
  }
});
