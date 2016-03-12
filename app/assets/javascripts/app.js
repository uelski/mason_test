$(document).ready(function(){
  console.log("connected")

  $('#nav').affix({
    offset: {
      top: $('.header').height()
    }
  });
  $('#nav').on('affix.bs.affix', function(){
    var navHeight = $('.navbar').outerHeight(true);
    $('.welcome').css('margin-top', navHeight);
  });
  $('#nav').on('affix-top.bs.affix', function() {
    $('.welcome').css('margin-top', 0);
  });

})//end of document.ready
