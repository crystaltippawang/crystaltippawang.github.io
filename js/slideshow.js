$("#slideshow-mobile > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow-mobile > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow-mobile');
},  3000);

$("#slideshow-tablet > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow-tablet > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow-tablet');
},  3000);

$("#slideshow-desktop > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow-desktop > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow-desktop');
},  3000);