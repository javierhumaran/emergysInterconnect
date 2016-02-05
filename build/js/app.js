$(function(){
  var $mainFooter       = $('#main-footer'),
      $appFullCategory  = $('#app-full-category'),
      $homeButton       = $('#home-button'),
      $modalHeader      = $('#modal-header'),
      $modalContainer   = $('#modal-container'),
      $modalFooter      = $('#modal-footer'),
      $slideshow        = $('#slideshow'),
      $slideshowRight   = $('#slideshow-right'),
      $slideshowLeft    = $('#slideshow-left'),
      appCategory       = $('#app-container').find('.app-container-category');

  // appCategory.fadeOut('fast');
  // appCategory.fadeIn('slow');
  $modalHeader.fadeOut(0);
  $modalContainer.fadeOut(0);
  $modalFooter.fadeOut(0);

  appCategory.click(function(ev) {
    $appFullCategory.css('left', ev.clientX);
    $appFullCategory.css('top', ev.clientY);
    $appFullCategory.css('background-color', $(this).css('border-color'));

    $appFullCategory.addClass('visible');

    setTimeout(function() {
      $modalHeader.fadeIn(300);
      $modalContainer.fadeIn(300);
      $modalFooter.fadeIn(300);
    }, 300);
  });

  $homeButton.click(function(ev) {
    $modalHeader.fadeOut(300);
    $modalContainer.fadeOut(300);
    $modalFooter.fadeOut(300);

    setTimeout(function() {
      $appFullCategory.removeClass();
    }, 300);
  });

  $mainFooter.click(function(ev) {
    $appFullCategory.css('left', ev.clientX);
    $appFullCategory.css('top', ev.clientY);
    $appFullCategory.css('background-color', $(this).css('background-color'));

    $appFullCategory.addClass('visible light');

    setTimeout(function() {
      $modalHeader.fadeIn(300);
      $modalContainer.fadeIn(300);
      $modalFooter.fadeIn(300);
    }, 300);
  });

  $slideshowRight.click(function(ev) {
    console.log($slideshow);

    var scroll        = parseInt($slideshow.css('width'));
    var actualScroll  = $slideshow.scrollLeft();

    $slideshow.animate({scrollLeft: actualScroll + scroll}, 300);
  });

  $slideshowLeft.click(function(ev) {
    var scroll        = parseInt($slideshow.css('width'));
    var actualScroll  = $slideshow.scrollLeft();

    $slideshow.animate({scrollLeft: actualScroll - scroll}, 300);
  });
});
