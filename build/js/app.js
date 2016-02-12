$(function(){
  var titleTemplate = '<li>:title:</li>';
  var slideTemplate = '<article class="slide fa fa-5x">' +
                        '<h1>:slideBody:</h1>' +
                        ':extraContent:'
                      '</article>';

  var slideShowObject   = {
    emergys : {
      titles : ['Emergys At-a-glance', 'Services Portfolio', 'Why customers choose Emergys?', 'Our Industry Expertise', 'Our Clients'],
      slides : {
                         // AT A GLANCE
        content       : [['', 'More than 500 employes all around the world', '', 'Industry Leaders', 'Our Partners', 'Emergys MX has 13 years of experience providing innovation to accelerate our customers success'],
                         // SERVICES PORTFOLIO
                         ['Conectivity', 'Business Process Management', 'Mobile / Internet of Things', 'Business Analytics'],
                         // WHY CUSTOMERS CHOOSE EMERGYS
                         ['', '', 'Our Global Operations', 'Our capabilities'],
                         // OUR INDUSTRY EXPERTISE
                         ['Retail' ,'Manufacturing' ,'Logistics' ,'Electronic Invoice'],
                         // CLIENTS
                         ['', '']],
                         // AT A GLANCE
        icon          : [['fa-home', 'fa-globe right', 'fa-male', 'fa-trophy center', 'left', 'fa-lightbulb-o'],
                         // SERVICES PORTFOLIO
                         ['', '', '', ''],
                         // WHY CUSTOMERS CHOOSE EMERGYS
                         ['fa-search', 'fa-users', 'fa-globe right', 'fa-thumbs-up'],
                         // OUR INDUSTRY EXPERTISE
                         ['', '', '', ''],
                         // CLIENTS
                         ['', '']],
                         // AT A GLANCE
        extraContent  : [['<section class="slide-hero">'+
                            '<h1 class="left">Who we are</h1>'+
                            '<h2>EMERGYS MX is a leader in business solutions based on information technology, founded in 2003, Emergys MX is a subsidiary of Emergys Corp.</h2>'+
                            '<h2>Our services are dedicated to helping our customers improve their efficiency and effectiveness.</h2>'+
                          '</section>',
                          // GLOBAL
                          '<section class="flags-container">'+
                             '<div>'+
                               '<img src="../img/flags/ch.png">'+
                               '<img src="../img/flags/in.png">'+
                             '</div>'+
                             '<div>'+
                               '<img src="../img/flags/us.png">'+
                               '<img src="../img/flags/mx.png">'+
                               '<img src="../img/flags/ca.png">'+
                             '</div>'+
                           '</section>',
                           // FLEXIBLE
                           '<section class="slide-hero">'+
                             '<h1 class="left">Flexible</h1>'+
                             '<h2>Partner, Sub-Contract, Staff Augmentation, Minority Supplier, Fixed Rate</h2>'+
                             '<h2>On Site, Near Site, Off Shore</h2>'+
                           '</section>',
                           // INDUSTRY LEADERS
                           '<section class="slide-hero">'+
                             '<img src="../img/emergys/team.png">'+
                           '</section>',
                           // PARTNERS
                           '<section class="slide-hero">'+
                             '<img src="../img/emergys/partners.png">'+
                           '</section>',
                           ''],
                          // SERVICES PORTFOLIO
                          // CONECTIVITY
                          ['<section class="service-section">'+
                              '<div class="column">'+
                                 '<img src="../img/conectivity.png">'+
                              '</div>'+
                              '<div class="column">'+
                                 '<h3>Making it easier and quicker to develop and manage integrations of different systems. Learn, develop, deploy, manage, migrate quickly and easily.</h3>'+
                                 '<button class="conectivity" color="009688">Show me</button>'+
                              '</div>'+
                            '</section>',
                           // BPM
                           '<section class="service-section">'+
                             '<div class="column">'+
                                '<img src="../img/bpm.png">'+
                             '</div>'+
                             '<div class="column">'+
                                '<h3>Practice that involves experience & software to improve performance, visibility and agility of business process.</h3>'+
                                '<button class="bpm">Show me</button>'+
                             '</div>'+
                           '</section>',
                           // MOBILE / IOT
                           '<section class="service-section">'+
                             '<div class="column">'+
                                '<img src="../img/mobile.png">'+
                             '</div>'+
                             '<div class="column">'+
                                '<h3>Mobility & IoT are the most demanded IT capabilities today for companies who are searching optimal productivity anytime & anywhere.</h3>'+
                                '<button class="mobile">Show me</button>'+
                             '</div>'+
                           '</section>',
                           // BUSINESS ANALYTICS
                           '<section class="service-section">'+
                             '<div class="column">'+
                                '<img src="../img/ba.png">'+
                             '</div>'+
                             '<div class="column">'+
                                '<h3>Our BA applications are designed for the way your business operates. We help to create a functionally environment that will aid to make important decisions.</h3>'+
                                '<button class="ba">Show me</button>'+
                             '</div>'+
                           '</section>'],
                          // WHY CUSTOMERS CHOOSE EMERGYS
                          // OUR FOCUS
                          ['<section class="slide-hero">'+
                            '<h1 class="left">Our Focus</h1>'+
                            '<h2>Consulting Software Sales & IT Services</h2>'+
                          '</section>',
                          // OUR PEOPLE
                          '<section class="slide-hero">'+
                            '<h1 class="left">Our People</h1>'+
                            '<h2>Approximately 400 people worldwide, averaging 10 years domain experience</h2>'+
                          '</section>',
                          // OUR GLOBAL OPERATIONS
                          '<section class="flags-container">'+
                             '<div>'+
                               '<img src="../img/flags/ch.png">'+
                               '<img src="../img/flags/in.png">'+
                             '</div>'+
                             '<div>'+
                               '<img src="../img/flags/us.png">'+
                               '<img src="../img/flags/mx.png">'+
                               '<img src="../img/flags/ca.png">'+
                             '</div>'+
                           '</section>',
                          // OUR CAPABILITIES
                          '<section class="slide-hero">'+
                            '<img src="../img/emergys/whycustomers.png">'+
                          '</section>'],
                          // OUR INDUSTRY EXPERTISE
                          // RETAIL
                          ['<section class="service-section">'+
                              '<div class="column">'+
                                 '<img src="../img/retail.png">'+
                              '</div>'+
                              '<div class="column">'+
                                 '<h3>Practice that involves experience & software to improve performance, visibility and agility of business process.</h3>'+
                                 '<button class="retail">Show me</button>'+
                              '</div>'+
                            '</section>',
                          // MANUFACTURING
                          '<section class="service-section">'+
                              '<div class="column">'+
                                 '<img src="../img/manufacturing.png">'+
                              '</div>'+
                              '<div class="column">'+
                                 '<h3>Practice that involves experience & software to improve performance, visibility and agility of business process.</h3>'+
                                 '<button class="manufacturing">Show me</button>'+
                              '</div>'+
                            '</section>',
                          // LOGISTICS
                          '<section class="service-section">'+
                              '<div class="column">'+
                                 '<img src="../img/logistics.png">'+
                              '</div>'+
                              '<div class="column">'+
                                 '<h3>Practice that involves experience & software to improve performance, visibility and agility of business process.</h3>'+
                                 '<button class="logistics">Show me</button>'+
                              '</div>'+
                            '</section>',
                          // ELECTRONIC INVOICE
                          '<section class="service-section">'+
                              '<div class="column">'+
                                 '<img src="../img/e-invoice.png">'+
                              '</div>'+
                              '<div class="column">'+
                                 '<h3>Practice that involves experience & software to improve performance, visibility and agility of business process.</h3>'+
                                 '<button class="einvoice">Show me</button>'+
                              '</div>'+
                            '</section>'],
                          // CLIENTS 1
                          ['<section class="clients-container">'+
                              '<img src="../img/clients/aeroflex.png">'+
                              '<img src="../img/clients/ca.png">'+
                              '<img src="../img/clients/dportenis.png">'+
                              '<img src="../img/clients/ericsson.png">'+
                              '<img src="../img/clients/urrea.png">'+
                              '<img src="../img/clients/harley.png">'+
                              '<img src="../img/clients/hersheys.png">'+
                              '<img src="../img/clients/hunterdouglas.png">'+
                              '<img src="../img/clients/ibm.png">'+
                              '<img src="../img/clients/jabil.png">'+
                              '<img src="../img/clients/lenovo.png">'+
                              '<img src="../img/clients/medtronic.png">'+
                           '</section>',
                           // CLIENTS 2
                           '<section class="clients-container">'+
                              '<img src="../img/clients/nationalsemiconductor.png">'+
                              '<img src="../img/clients/nipro.png">'+
                              '<img src="../img/clients/nokia.png">'+
                              '<img src="../img/clients/samsonite.png">'+
                              '<img src="../img/clients/sprint.png">'+
                              '<img src="../img/clients/sukarne.png">'+
                              '<img src="../img/clients/usgreenbuilding.png">'+
                              '<img src="../img/clients/volvo.png">'+
                            '</section>']]
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
      titles : ['What is it?', 'How Emergys help companies', 'Experience', 'High level examples'],
      slides : {
                         // WHAT IS IT?
        content       : [['Methodology focused on the understanding, documentation, pattern design, implementation and monitoring of business process.',
                          'Eficiency, Simplicity and Agility'],
                         // HOW EMERGYS HELP COMPANIES
                         ['Government, Retail & Healthcare'],
                         // EXPERIENCE
                         ['','','','','','','',''],
                         // HIGH LEVEL EXAMPLES
                         ['Electronic monitoring process orders',
                          'Organize your documents',
                          'Loan Process']],
                         // WHAT IS IT?
        icon          : [['fa-cogs', 'fa-tasks'],
                         // HOW EMERGYS HELP COMPANIES
                         ['fa-users center'],
                         // EXPERIENCE
                         // SME ICONS
                         ['fa-money', 'fa-money',
                         // HEALTHCARE ICONS
                         'fa-heartbeat', 'fa-heartbeat',
                         // SPORTS SHOP ICONS
                         'fa-futbol-o', 'fa-futbol-o',
                         // ANIMAL-PROTEIN ICONS
                         'fa-cutlery', 'fa-cutlery'],
                         // HIGH LEVEL EXAMPLES
                         ['fa-sitemap no-padding', '', 'fa-file']],
                         // WHAT IS IT?
        extraContent  : [['',
                          '<section class="slide-hero">'+
                            '<img src="../img/bpm/definition.png">'+
                          '</section>'],
                         // HOW EMERGYS HELP COMPANIES
                         ['<section class="slide-hero">'+
                            '<img src="../img/bpm/industries.png">'+
                          '</section>'],
                         // EXPERIENCE
                          // SME CHALLENGES
                         ['<section class="slide-header">'+
                            '<h3>SME Loans - Government</h3>'+
                          '</section>'+
                          '<section class="slide-content">'+
                            '<h1>Challenges</h2>'+
                            '<h2>Processes documented on paper</h2>'+
                            '<h2>Lack of flexibility in upgrading processes</h2>'+
                            '<h2>Reduced version control electronic records</h2>'+
                            '<h2>Recaptures information</h2>'+
                          '</section>',
                          // SME SOLUTIONS
                          '<section class="slide-header">'+
                            '<h3>SME Loans - Government</h3>'+
                          '</section>'+
                          '<section class="slide-content">'+
                            '<h1>Adopted Solutions</h2>'+
                            '<h2>The institution was able to document their processes agile and have the updated version at all times</h2>'+
                            '<h2>Emergys helps analysts to always have on hand documentation of any process</h2>'+
                          '</section>',
                           // HEALTHCARE CHALLENGES
                           '<section class="slide-header">'+
                             '<h3>Healthcare</h3>'+
                           '</section>'+
                           '<section class="slide-content">'+
                             '<h1>Challenges</h2>'+
                             '<h2>Establish a process culture</h2>'+
                             '<h2>Identify operational / administrative problems more efficiently</h2>'+
                             '<h2>Improve customer service</h2>'+
                             '<h2>Having statistical process</h2>'+
                             '<h2>Reduce the cycle of complaints</h2>'+
                           '</section>',
                           // HEALTHCARE SOLUTIONS
                           '<section class="slide-header">'+
                             '<h3>Healthcare</h3>'+
                           '</section>'+
                           '<section class="slide-content">'+
                             '<h1>Adopted Solutions</h2>'+
                             '<h2>To establish a process culture was necessary to first identify which areas of the company would be the first to document and model the processes</h2>'+
                             '<h2>After that was taken one process, this process implemented helped to reduce complaints reporting cycle</h2>'+
                           '</section>',
                           // SPORTS SHOP CHALLENGES
                           '<section class="slide-header">'+
                             '<h3>Sports Shop - Retail</h3>'+
                           '</section>'+
                           '<section class="slide-content">'+
                             '<h1>Challenges</h2>'+
                             '<h2>Strong competition on e-commerce</h2>'+
                             '<h2>Many manual tracking activity</h2>'+
                             '<h2>Multiple platforms for monitoring electronic ordering</h2>'+
                             '<h2>Have statistics for every step of the process</h2>'+
                             '<h2>Substantially reduce the cycle of electronic orders sending emails to customers on order status</h2>'+
                           '</section>',
                           // SPORTS SHOP SOLUTIONS
                           '<section class="slide-header">'+
                             '<h3>Sports Shop - Retail</h3>'+
                           '</section>'+
                           '<section class="slide-content">'+
                             '<h1>Adopted Solutions</h2>'+
                             '<h2>Documentation, process modeling and implementation of electronic order tracking</h2>'+
                             '<h2>This process was consolidated on a single platform</h2>'+
                             '<h2>Cycle time reduction from 11 to 3 days</h2>'+
                           '</section>',
                           // ANIMAL PROTEIN CHALLENGES
                           '<section class="slide-header">'+
                             '<h3>Animal Protein - Retail</h3>'+
                           '</section>'+
                           '<section class="slide-content">'+
                             '<h1>Challenges</h2>'+
                             '<h2>Many credit applications created at the same time generating uncrontrolled</h2>'+
                             '<h2>Creating e-mail requests, causing inappropiately track</h2>'+
                             '<h2>Loss of documents</h2>'+
                             '<h2>Slow response by authorizers</h2>'+
                             '<h2>Statistics are performed manually and excel</h2>'+
                           '</section>',
                           // ANIMAL PROTEIN SOLUTIONS
                           '<section class="slide-header">'+
                             '<h3>Animal Protein - Retail</h3>'+
                           '</section>'+
                           '<section class="slide-content">'+
                             '<h1>Adopted Solutions</h2>'+
                             '<h2>Modeling and implementation of more flexible credit management, offering better service and response time</h2>'+
                             '<h2>A single user access, generating creating control applications</h2>'+
                             '<h2>Ensuring tracking information online and send notification to the appropriate users</h2>'+
                             '<h2>Digital documentation management application and user-friendly process</h2>'+
                             '<h2>Automated policy based times in case of default be scaled applications giving timely monitoring of these statistics generation process in real time</h2>'+
                           '</section>'],
                          // HIGH LEVEL EXAMPLES
                         ['<section class="slide-hero">'+
                            '<img src="../img/bpm/bpm1.png">'+
                          '</section>',
                          '<section class="slide-hero">'+
                             '<img src="../img/bpm/bpm2.png">'+
                           '</section>',
                           '<section class="slide-hero">'+
                              '<img src="../img/bpm/bpm3.png">'+
                            '</section>']]
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
      categoryTitle     = $modalHeader.find('.category-title'),
      buttons           = $slideshow.find('.testButton');

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
  function renderTitles() {
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
      var elem  = slideTemplate
                  .replace(':slideBody:', slide)
                  .replace(':extraContent:', slideShowObject[currentCategory].slides.extraContent[currentTitle][slideIndex]);

      var $elem = $(elem);
      $elem.addClass(slideShowObject[currentCategory].slides.icon[currentTitle][slideIndex]);
      $elem.appendTo($slideshow).hide().fadeIn(300);
    });

    buttons = $('button');
    buttons.on('click', goCategory);

    setTimeout(function() {
        $slideshow.scrollLeft(0);
    }, 300);

    currentSlide = 0;
  }

  // This function hides the category full screen and shows again the main dashboard
  function closeModal(ev) {
    $modalHeader.fadeOut(300);
    $modalContainer.fadeOut(300);
    $modalFooter.fadeOut(300);

    $titlesList.scrollLeft(0);

    setTimeout(function() {
      $slideshow.scrollLeft(0);

      $appFullCategory.removeClass();
    }, 300);
  }

  $homeButton.on('click', closeModal);

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
        // You can't go forward anymore, then change to the first title
        currentTitle = 0;
        actualScroll = 0;
        scroll = 0;
        renderSlides();
      }
      else if(currentTitle == 0) {
        // You can't go back anymore, then change to the last title,
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

  function goCategory(ev) {
    var $selectedCategory = $('#' + ev.target.className);
    closeModal();

    console.log($selectedCategory);

    setTimeout(function() {
      $appFullCategory.css('background-color', $selectedCategory.css('background-color'));
      $appFullCategory.addClass('visible');

      categoryTitle.empty();
      categoryTitle.append($selectedCategory.attr('name'));

      currentCategory = ev.target.className;

      $titlesList.empty();
      $slideshow.empty();

      renderTitles();
      renderSlides();
    }, 300);

    setTimeout(function() {
      $modalHeader.fadeIn(300);
      $modalContainer.fadeIn(300);
      $modalFooter.fadeIn(300);
    }, 600);
  }
});
