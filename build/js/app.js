$(function(){
  var titleTemplate = '<li>:title:</li>';
  var slideTemplate = '<article class="slide fa fa-5x">' +
                        '<h1>:slideBody:</h1>' +
                        ':extraContent:'
                      '</article>';

  var slideShowObject   = {
    emergys : {
      titles : ['Title 1', 'Title 2', 'Title 3'],
      slides : {
        content       : [['This is the first slide for the first title',
                          'This is the second slide for the first title'],
                         ['This is the first slide for the second title',
                          'This is the second slide for the second title',
                          'This is the third slide for the second title'],
                         ['This is the first slide for the third title']],
        icon          : [['fa-bar-chart-o', 'fa-camera-retro'],
                         ['fa-binoculars', 'fa-birthday-cake', 'fa-calculator'],
                         ['fa-child']],
        extraContent  : [['', ''],
                        ['', '', ''],
                        ['']]
      }
    },
  };

  var $mainFooter       = $('#main-footer'),
      $appFullCategory  = $('#app-full-category'),
      $homeButton       = $('#home-button'),
      $modalHeader      = $('#modal-header'),
      $modalContainer   = $('#modal-container'),
      $modalFooter      = $('#modal-footer'),
      $titlesList       = $('#titles-list'),
      $titleLeft        = $('#title-left'),
      $titleRight       = $('#title-right'),
      $slideshow        = $('#slideshow'),
      $slideshowRight   = $('#slideshow-right'),
      $slideshowLeft    = $('#slideshow-left'),
      appCategory       = $('#app-container').find('.app-container-category');

  $modalHeader.fadeOut(0);
  $modalContainer.fadeOut(0);
  $modalFooter.fadeOut(0);

  var currentTitle = 0;

  // This function allows to render the right titles for the category's slideshow
  function renderTitles() {
    currentTitle = 0;

    slideShowObject.emergys.titles.forEach(function (title) {
      var elem = titleTemplate.replace(':title:', title);

      var $elem = $(elem);
      $titlesList.append($elem);
    });
  }

  // This function allows to render the right content for the corresponding title at the category's slideshow
  function renderSlides() {
    $slideshow.find('.slide').fadeOut(0);

    var titleSlides = slideShowObject.emergys.slides.content[currentTitle];

    titleSlides.forEach(function (slide, slideIndex) {
      var elem = slideTemplate.replace(':slideBody:', slide);

      var $elem = $(elem);
      $elem.addClass(slideShowObject.emergys.slides.icon[currentTitle][slideIndex]);
      $slideshow.append($elem);
    });
  }

  // This function hides the category full screen and shows again the main dashboard
  $homeButton.click(function(ev) {
    $slideshow.scrollLeft(0);
    $titlesList.scrollLeft(0);

    $modalHeader.fadeOut(300);
    $modalContainer.fadeOut(300);
    $modalFooter.fadeOut(300);

    setTimeout(function() {
      $appFullCategory.removeClass();
    }, 300);
  });

  // This function allows to show the full category screen
  function showCategory(ev) {
    $appFullCategory.css('left', ev.clientX);
    $appFullCategory.css('top', ev.clientY);
    $appFullCategory.css('background-color', $(this).css('border-color'));
    $appFullCategory.addClass(ev.data.classToAdd);

    renderTitles();
    renderSlides();

    setTimeout(function() {
      $modalHeader.fadeIn(300);
      $modalContainer.fadeIn(300);
      $modalFooter.fadeIn(300);
    }, 300);
  }

  // Subcribing the categories elements to the click event to trigger the showCategory function
  appCategory.on('click', { classToAdd: 'visible'} ,showCategory);
  $mainFooter.on('click', { classToAdd: 'visible light' } ,showCategory);

  // This function allows to click to the controller arrows at the slideshow to perform the right animation.
  function slideshowClicks(ev) {
    var elem          = ev.data.toScroll,
        scroll        = parseInt(elem.css('width')),
        actualScroll  = elem.scrollLeft();

    if (ev.data.title) {
      currentTitle = currentTitle + (1 * ev.data.direction);
      renderSlides();
    }

    elem.animate({scrollLeft: actualScroll + (scroll * ev.data.direction)}, 300);
  }

  // Subscribing the slideshow arrow controllers to the click event
  $slideshowRight.on('click', { toScroll: $slideshow, direction: 1, title: false}, slideshowClicks);
  $slideshowLeft.on('click', { toScroll: $slideshow, direction: -1, title: false}, slideshowClicks);
  $titleRight.on('click', { toScroll: $titlesList, direction: 1, title: true}, slideshowClicks);
  $titleLeft.on('click', { toScroll: $titlesList, direction: -1, title: true}, slideshowClicks);

});
