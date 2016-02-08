$(function(){
  var titleTemplate = '<li>:title:</li>';
  var slideTemplate = '<article class="slide fa fa-5x">' +
                        '<h1>:slideBody:</h1>' +
                        ':extraContent:'
                      '</article>';

  var slideShowObject   = {
    emergys : {
      titles : ['Emergys 1', 'Emergys 2', 'Emergys 3'],
      slides : {
        content       : [['This is the first slide for the first Emergys',
                          'This is the second slide for the first Emergys'],
                         ['This is the first slide for the second Emergys',
                          'This is the second slide for the second Emergys',
                          'This is the third slide for the second Emergys'],
                         ['This is the first slide for the third Emergys']],
        icon          : [['fa-bar-chart-o', 'fa-camera-retro'],
                         ['fa-binoculars', 'fa-birthday-cake', 'fa-calculator'],
                         ['fa-child']],
        extraContent  : [['', ''],
                        ['', '', ''],
                        ['']]
      }
    },
    conectivity : {
      titles : ['Conectivity 1', 'Conectivity 2', 'Conectivity 3'],
      slides : {
        content       : [['This is the first slide for the first Conectivity',
                          'This is the second slide for the first Conectivity'],
                         ['This is the first slide for the second Conectivity',
                          'This is the second slide for the second Conectivity',
                          'This is the third slide for the second Conectivity'],
                         ['This is the first slide for the third Conectivity']],
        icon          : [['fa-bar-chart-o', 'fa-camera-retro'],
                         ['fa-binoculars', 'fa-birthday-cake', 'fa-calculator'],
                         ['fa-child']],
        extraContent  : [['', ''],
                        ['', '', ''],
                        ['']]
      }
    },
    bpm : {
      titles : ['BPM 1', 'BPM 2', 'BPM 3'],
      slides : {
        content       : [['This is the first slide for the first BPM',
                          'This is the second slide for the first BPM'],
                         ['This is the first slide for the second BPM',
                          'This is the second slide for the second BPM',
                          'This is the third slide for the second BPM'],
                         ['This is the first slide for the third BPM']],
        icon          : [['fa-bar-chart-o', 'fa-camera-retro'],
                         ['fa-binoculars', 'fa-birthday-cake', 'fa-calculator'],
                         ['fa-child']],
        extraContent  : [['', ''],
                        ['', '', ''],
                        ['']]
      }
    },
    mobile : {
      titles : ['Mobile 1', 'Mobile 2', 'Mobile 3'],
      slides : {
        content       : [['This is the first slide for the first Mobile',
                          'This is the second slide for the first Mobile'],
                         ['This is the first slide for the second Mobile',
                          'This is the second slide for the second Mobile',
                          'This is the third slide for the second Mobile'],
                         ['This is the first slide for the third Mobile']],
        icon          : [['fa-bar-chart-o', 'fa-camera-retro'],
                         ['fa-binoculars', 'fa-birthday-cake', 'fa-calculator'],
                         ['fa-child']],
        extraContent  : [['', ''],
                        ['', '', ''],
                        ['']]
      }
    },
    ba : {
      titles : ['BA 1', 'BA 2', 'BA 3'],
      slides : {
        content       : [['This is the first slide for the first BA',
                          'This is the second slide for the first BA'],
                         ['This is the first slide for the second BA',
                          'This is the second slide for the second BA',
                          'This is the third slide for the second BA'],
                         ['This is the first slide for the third BA']],
        icon          : [['fa-bar-chart-o', 'fa-camera-retro'],
                         ['fa-binoculars', 'fa-birthday-cake', 'fa-calculator'],
                         ['fa-child']],
        extraContent  : [['', ''],
                        ['', '', ''],
                        ['']]
      }
    },
    retail : {
      titles : ['Retail 1', 'Retail 2', 'Retail 3'],
      slides : {
        content       : [['This is the first slide for the first Retail',
                          'This is the second slide for the first Retail'],
                         ['This is the first slide for the second Retail',
                          'This is the second slide for the second Retail',
                          'This is the third slide for the second Retail'],
                         ['This is the first slide for the third Retail']],
        icon          : [['fa-bar-chart-o', 'fa-camera-retro'],
                         ['fa-binoculars', 'fa-birthday-cake', 'fa-calculator'],
                         ['fa-child']],
        extraContent  : [['', ''],
                        ['', '', ''],
                        ['']]
      }
    },
    manufacturing : {
      titles : ['Manufacturing 1', 'Manufacturing 2', 'Manufacturing 3'],
      slides : {
        content       : [['This is the first slide for the first Manufacturing',
                          'This is the second slide for the first Manufacturing'],
                         ['This is the first slide for the second Manufacturing',
                          'This is the second slide for the second Manufacturing',
                          'This is the third slide for the second Manufacturing'],
                         ['This is the first slide for the third Manufacturing']],
        icon          : [['fa-bar-chart-o', 'fa-camera-retro'],
                         ['fa-binoculars', 'fa-birthday-cake', 'fa-calculator'],
                         ['fa-child']],
        extraContent  : [['', ''],
                        ['', '', ''],
                        ['']]
      }
    },
    logistics : {
      titles : ['Logistics 1', 'Logistics 2', 'Logistics 3'],
      slides : {
        content       : [['This is the first slide for the first Logistics',
                          'This is the second slide for the first Logistics'],
                         ['This is the first slide for the second Logistics',
                          'This is the second slide for the second Logistics',
                          'This is the third slide for the second Logistics'],
                         ['This is the first slide for the third Logistics']],
        icon          : [['fa-bar-chart-o', 'fa-camera-retro'],
                         ['fa-binoculars', 'fa-birthday-cake', 'fa-calculator'],
                         ['fa-child']],
        extraContent  : [['', ''],
                        ['', '', ''],
                        ['']]
      }
    },
    einvoice : {
      titles : ['E-Invoice 1', 'E-Invoice 2', 'E-Invoice 3'],
      slides : {
        content       : [['This is the first slide for the first E-Invoice',
                          'This is the second slide for the first E-Invoice'],
                         ['This is the first slide for the second E-Invoice',
                          'This is the second slide for the second E-Invoice',
                          'This is the third slide for the second E-Invoice'],
                         ['This is the first slide for the third E-Invoice']],
        icon          : [['fa-bar-chart-o', 'fa-camera-retro'],
                         ['fa-binoculars', 'fa-birthday-cake', 'fa-calculator'],
                         ['fa-child']],
        extraContent  : [['', ''],
                        ['', '', ''],
                        ['']]
      }
    }
  };

  var $mainFooter       = $('#main-footer'),
      $emergys          = $('#emergys'),
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
      appCategory       = $('#app-container').find('.app-container-category'),
      categoryTitle     = $modalHeader.find('.category-title');

  $modalHeader.fadeOut(0);
  $modalContainer.fadeOut(0);
  $modalFooter.fadeOut(0);

  var currentTitle = 0;
  var currentSlide = 0;
  var currentCategory = '';

  // This function allows to show the full category screen
  function showCategory(ev) {
    $appFullCategory.css('left', ev.clientX);
    $appFullCategory.css('top', ev.clientY);
    $appFullCategory.css('background-color', $(this).css('border-color'));
    $appFullCategory.addClass(ev.data.classToAdd);

    categoryTitle.empty();
    categoryTitle.append($(this).attr('name'));

    currentCategory = $(this).attr('id');

    console.log(currentCategory);

    $titlesList.empty();
    $slideshow.empty();

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
  $emergys.on('click', { classToAdd: 'visible light' } ,showCategory);

  // This function allows to render the right titles for the category's slideshow
  function renderTitles(category) {
    currentTitle = 0;

    slideShowObject[currentCategory].titles.forEach(function (title) {
      var elem = titleTemplate.replace(':title:', title);

      var $elem = $(elem);
      $titlesList.append($elem);
    });
  }

  // This function allows to render the right content for the corresponding title at the category's slideshow
  function renderSlides() {
    $slideshow.find('.slide').fadeOut(300);

    var titleSlides = slideShowObject[currentCategory].slides.content[currentTitle];

    titleSlides.forEach(function (slide, slideIndex) {
      var elem = slideTemplate.replace(':slideBody:', slide);

      var $elem = $(elem);
      $elem.addClass(slideShowObject[currentCategory].slides.icon[currentTitle][slideIndex]);
      $elem.appendTo($slideshow).hide().fadeIn(300);
    });

    setTimeout(function() {
        $slideshow.scrollLeft(0);
    }, 300);

    currentSlide = 0;
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

  // This function allows to click to the controller arrows at the slideshow to perform the right animation.
  function slideshowClicks(ev) {
    var elem          = ev.data.toScroll,
        scroll        = parseInt(elem.css('width')) * ev.data.direction,
        actualScroll  = elem.scrollLeft(),
        titlesLenght  = slideShowObject[currentCategory].titles.length - 1,
        slidesLenght  = slideShowObject[currentCategory].slides.content[currentTitle].length -1,
        direction     = ev.data.direction,
        tActualScroll = $titlesList.scrollLeft(),
        tScroll       = parseInt($titlesList.css('width'));

    // Actions to perform when title controls are clicked
    if (ev.data.title) {
      if(!((currentTitle == 0 && direction == -1) || (currentTitle == titlesLenght && direction == 1))) {
        currentTitle = currentTitle + (1 * direction);
        renderSlides();
      }
      else if (currentTitle == titlesLenght) {
        alert('Ya no puedes avanzar más');
        currentTitle = 0;
        actualScroll = 0;
        scroll = 0;
        renderSlides();
      }
      else if(currentTitle == 0) {
        alert('Ya no puedes retroceder más');
        currentTitle = titlesLenght;
        actualScroll = 0;
        scroll = tScroll * titlesLenght;
        renderSlides();
      }
      elem.animate({scrollLeft: actualScroll + scroll}, 300);
    }
    // Actions to perform when slide controls are clicked
    else {
      if((currentSlide == slidesLenght) && direction == 1) {
        if(currentTitle == titlesLenght) {
          // You can't go forward anymore, then change to the first title
          currentTitle = 0;
          $titlesList.animate({scrollLeft: 0}, 300);
          renderSlides();
        }
        else if(currentSlide == slidesLenght) {
          // Change to the next title
          currentTitle = currentTitle + (1 * direction);
          $titlesList.animate({scrollLeft: tActualScroll + (tScroll * ev.data.direction)}, 300);
          renderSlides();
        }
      }
      else if((currentSlide == 0) && direction == -1) {
        if(currentTitle == 0) {
          // You can't go back anymore, then change to the last title,
          currentTitle = titlesLenght;
          $titlesList.animate({scrollLeft: tScroll * titlesLenght}, 300);
          renderSlides();
        }
        else if(currentSlide == 0) {
            // Change to the previous title
            currentTitle = currentTitle + (1 * direction);
            $titlesList.animate({scrollLeft: tActualScroll + (tScroll * ev.data.direction)}, 300);
            renderSlides();
        }
      }
      else {
        currentSlide = currentSlide + (1 * direction);
        elem.animate({scrollLeft: actualScroll + scroll}, 300);
      }
    }
  }

  // Subscribing the slideshow arrow controllers to the click event
  $slideshowRight.on('click', { toScroll: $slideshow, direction: 1, title: false}, slideshowClicks);
  $slideshowLeft.on('click', { toScroll: $slideshow, direction: -1, title: false}, slideshowClicks);
  $titleRight.on('click', { toScroll: $titlesList, direction: 1, title: true}, slideshowClicks);
  $titleLeft.on('click', { toScroll: $titlesList, direction: -1, title: true}, slideshowClicks);
});
