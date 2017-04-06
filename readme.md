first: get rid of the border on the wrapper
it's screwing up your sizing
alternatively, make the wrapper 2px wider and taller
second.. go make the reset work, you need to first empty the original divs from the wrapper.
so put this:
  $('#wrapper').empty()
on the first line of the drawBoard function
next the border of the units is messing with the sizing of things
so put this: box-sizing: border-box; in the .unit css
aaaaaaaaaaaaaand finally you'll need to put the hover listener in the draw board function so that it can be set up correctly everytime you reset
so move this stuff:
  $('.unit').hover(function(){
    $(this).css("background-color", "black");
  });
from the main function and just put it at the bottom of the draw- board function
