$(document).ready(function(){
  console.log("connected")

  $('#new_user').bind("ajax:error", function(e, data, status, xhr){
    $('#email_message').replaceWith("<span id='email_error'>There was an error, please try again</span>");
    $('#email_success').replaceWith("<span id='email_error'>There was an error, please try again</span>");
    $('#user_email').val('');
  });

  $('#new_user').on("ajax:success", function(e, data, status, xhr){
    $('#email_message').replaceWith("<span id='email_success'>Thanks for signing up!</span>");
    $('#email_error').replaceWith("<span id='email_success'>Thanks for signing up!</span>");
    $('#user_email').val('');
  });

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

$('#shpadoinkle-link').click(function(){
  scrollTime('shpadoinkle-section')
})

$('#contact-link').click(function() {
  scrollTime('contact-section')
})

$('#poster').click(function () {
  $('#poster_modal').modal('show');
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
