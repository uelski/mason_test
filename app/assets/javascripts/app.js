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

  addStickers();
  removeStickers();

  $("#music-link").click(function() {
  scrollTime('music-section')
});

$("#shows-link").click(function() {
scrollTime('shows-section')
});

})//end of document.ready

function removeStickers() {
  var footerSticker = $('.foot-sticker').clone();
  $(window).resize(function() {
    if ($(window).width() <= 768) {
      $('#cos-sticker').replaceWith(footerSticker);
    }
  }).resize();
}

function addStickers() {
  var stickers = $('#cos-sticker').clone();
  $(window).resize(function() {
    var headerHeight = $('.header').height();
    if ($(window).width() > 768 && headerHeight < 341) {
      $('.foot-sticker').replaceWith(stickers);
    }
  }).resize();
}

function scrollTime(did) {
  var aTag = $("div[id='" + did + "']");
  $('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
}
