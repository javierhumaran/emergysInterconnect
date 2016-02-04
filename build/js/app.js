$(function(){
  var $mainFooter       = $('#main-footer'),
      $appFullCategory  = $('#app-full-category'),
      $homeButton       = $('#home-button'),
      appCategory       = $('#app-container').find('.app-container-category');

  appCategory.fadeOut('fast');
  appCategory.fadeIn('slow');

  appCategory.click(function(ev) {
    $appFullCategory.css('left', ev.clientX);
    $appFullCategory.css('top', ev.clientY);
    $appFullCategory.css('background-color', $(this).css('border-color'));

    $appFullCategory.addClass('visible');
  });

  $appFullCategory.click(function(ev) {
    $appFullCategory.removeClass();
  });

  $mainFooter.click(function(ev) {
    $appFullCategory.css('left', ev.clientX);
    $appFullCategory.css('top', ev.clientY);
    $appFullCategory.css('background-color', $(this).css('background-color'));

    $appFullCategory.addClass('visible light');
  });
});
