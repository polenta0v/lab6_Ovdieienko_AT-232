$(document).ready(function () {
  $('.button').on('click', function () {
    $('.fon').fadeIn(500);
    $('.afterblk').fadeIn(500);
  });

  $('.close').on('click', function () {
    $('.fon').fadeOut(500);
    $('.afterblk').fadeOut(500);
  });

});