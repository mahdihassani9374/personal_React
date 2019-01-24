$(function () {
  new WOW().init();
  $('[data-toggle="tooltip"]').tooltip();
  window.onload = function (e) {
    $('.loading').hide();
  }
  $(window).scroll(function(){
    scroll_menu()
  });
  scroll_menu();
});

function scroll_menu() {
  var scroll = $(this).scrollTop();
  if(scroll > 58) {
    $('.navbar.navbar-inverse').addClass('navbar-scroll');
  }
  else {
    $('.navbar.navbar-inverse').removeClass('navbar-scroll');
  }
}