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
                               '<img src="img/flags/ch.png">'+
                               '<img src="img/flags/in.png">'+
                             '</div>'+
                             '<div>'+
                               '<img src="img/flags/us.png">'+
                               '<img src="img/flags/mx.png">'+
                               '<img src="img/flags/ca.png">'+
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
                             '<img src="img/emergys/team.png">'+
                           '</section>',
                           // PARTNERS
                           '<section class="slide-hero">'+
                             '<img src="img/emergys/partners.png">'+
                           '</section>',
                           ''],
                          // SERVICES PORTFOLIO
                          // CONECTIVITY
                          ['<section class="service-section">'+
                              '<div class="column">'+
                                 '<img src="img/conectivity.png">'+
                              '</div>'+
                              '<div class="column">'+
                                 '<h3>Making it easier and quicker to develop and manage integrations of different systems. Learn, develop, deploy, manage, migrate quickly and easily.</h3>'+
                                 '<button class="conectivity" color="009688">Show me</button>'+
                              '</div>'+
                            '</section>',
                           // BPM
                           '<section class="service-section">'+
                             '<div class="column">'+
                                '<img src="img/bpm.png">'+
                             '</div>'+
                             '<div class="column">'+
                                '<h3>Practice that involves experience & software to improve performance, visibility and agility of business process.</h3>'+
                                '<button class="bpm">Show me</button>'+
                             '</div>'+
                           '</section>',
                           // MOBILE / IOT
                           '<section class="service-section">'+
                             '<div class="column">'+
                                '<img src="img/mobile.png">'+
                             '</div>'+
                             '<div class="column">'+
                                '<h3>Mobility & IoT are the most demanded IT capabilities today for companies who are searching optimal productivity anytime & anywhere.</h3>'+
                                '<button class="mobile">Show me</button>'+
                             '</div>'+
                           '</section>',
                           // BUSINESS ANALYTICS
                           '<section class="service-section">'+
                             '<div class="column">'+
                                '<img src="img/ba.png">'+
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
                               '<img src="img/flags/ch.png">'+
                               '<img src="img/flags/in.png">'+
                             '</div>'+
                             '<div>'+
                               '<img src="img/flags/us.png">'+
                               '<img src="img/flags/mx.png">'+
                               '<img src="img/flags/ca.png">'+
                             '</div>'+
                           '</section>',
                          // OUR CAPABILITIES
                          '<section class="slide-hero">'+
                            '<img src="img/emergys/whycustomers.png">'+
                          '</section>'],
                          // OUR INDUSTRY EXPERTISE
                          // RETAIL
                          ['<section class="service-section">'+
                              '<div class="column">'+
                                 '<img src="img/retail.png">'+
                              '</div>'+
                              '<div class="column">'+
                                 '<h3>Practice that involves experience & software to improve performance, visibility and agility of business process.</h3>'+
                                 '<button class="retail">Show me</button>'+
                              '</div>'+
                            '</section>',
                          // MANUFACTURING
                          '<section class="service-section">'+
                              '<div class="column">'+
                                 '<img src="img/manufacturing.png">'+
                              '</div>'+
                              '<div class="column">'+
                                 '<h3>Practice that involves experience & software to improve performance, visibility and agility of business process.</h3>'+
                                 '<button class="manufacturing">Show me</button>'+
                              '</div>'+
                            '</section>',
                          // LOGISTICS
                          '<section class="service-section">'+
                              '<div class="column">'+
                                 '<img src="img/logistics.png">'+
                              '</div>'+
                              '<div class="column">'+
                                 '<h3>Practice that involves experience & software to improve performance, visibility and agility of business process.</h3>'+
                                 '<button class="logistics">Show me</button>'+
                              '</div>'+
                            '</section>',
                          // ELECTRONIC INVOICE
                          '<section class="service-section">'+
                              '<div class="column">'+
                                 '<img src="img/e-invoice.png">'+
                              '</div>'+
                              '<div class="column">'+
                                 '<h3>Practice that involves experience & software to improve performance, visibility and agility of business process.</h3>'+
                                 '<button class="einvoice">Show me</button>'+
                              '</div>'+
                            '</section>'],
                          // CLIENTS 1
                          ['<section class="clients-container">'+
                              '<img src="img/clients/aeroflex.png">'+
                              '<img src="img/clients/ca.png">'+
                              '<img src="img/clients/dportenis.png">'+
                              '<img src="img/clients/ericsson.png">'+
                              '<img src="img/clients/urrea.png">'+
                              '<img src="img/clients/harley.png">'+
                              '<img src="img/clients/hersheys.png">'+
                              '<img src="img/clients/hunterdouglas.png">'+
                              '<img src="img/clients/ibm.png">'+
                              '<img src="img/clients/jabil.png">'+
                              '<img src="img/clients/lenovo.png">'+
                              '<img src="img/clients/medtronic.png">'+
                           '</section>',
                           // CLIENTS 2
                           '<section class="clients-container">'+
                              '<img src="img/clients/nationalsemiconductor.png">'+
                              '<img src="img/clients/nipro.png">'+
                              '<img src="img/clients/nokia.png">'+
                              '<img src="img/clients/samsonite.png">'+
                              '<img src="img/clients/sprint.png">'+
                              '<img src="img/clients/sukarne.png">'+
                              '<img src="img/clients/usgreenbuilding.png">'+
                              '<img src="img/clients/volvo.png">'+
                            '</section>']]
      }
    },
    conectivity : {
      titles : ['What is it?', 'How Emergys help companies', 'Experience', 'High level examples'],
      slides : {
                        // WHAT IS IT?
        content       : [['IBM Middleware enables digital transformation across hybrid clouds and traditional IT, enabling rapid innovation, deployment and management of applications and processes across ecosystems.',
                          'IBM Connectivity and application integration solutions deliver access to data, applications and information regardless of platform, device or data formats across both on-premises and cloud environments.', ''],
                          // HOW EMERYGS HELP COMPANIES
                         [''],
                         // EXPERIENCE
                         ['', '', '', ''],
                         // HIGH LEVEL EXAMPLES
                         ['IBM DataPower Auto Balancing Cluster', 'Custom Application to Enteprise (ERP)', 'Consume external services']],
                         // WHAT IS IT?
        icon          : [['fa-cloud', 'fa-database', 'fa-cloud-upload'],
                        // HOW EMERGYS HELP COMPANIES
                         ['fa-thumbs-up'],
                         // EXPERIENCE
                         ['fa-mobile', 'fa-clock-o', 'fa-envelope', 'fa-server'],
                         // HIGH LEVEL EXAMPLES
                         ['fa-sitemap no-padding', 'fa-sitemap no-padding', 'fa-database']],
                         // WHAT IS IT?
        extraContent  : [['', '',
                        '<section class="slide-content">'+
                          '<h1>IBM connectivity and applications solutions help:</h1>'+
                          '<h2>Reduce the time and complexity of integrating your enterprise.</h2>'+
                          '<h2>Rapidly deliver innovative services.</h2>'+
                          '<h2>Share services and extend business processes.</h2>'+
                          '<h2>Help ensure data integrity.</h2>'+
                          '<h2>Harness the Internet of Things.</h2>'+
                        '</section>'],
                        // HOW EMERGYS HELP COMPANIES
                        ['<section class="slide-content">'+
                          '<h1>We offer solutions</h1>'+
                          '<h2>Creating an intelligent fishing ship using MQTT over satellite connection.</h2>'+
                          '<h2>Improve Bandwith usage from point of sale, desktop, web or mobile to corporate infraestructure MQTT.</h2>'+
                          '<h2>Consolidating Information from HUNDREDS of branch offices with MQ.</h2>'+
                          '<h2>Process Digital Signature for Electronic Invoice.</h2>'+
                        '</section>'],
                        // EXPERIENCE
                        ['<section class="slide-content">'+
                          '<h1>Enable the information usage thru modern interfaces as Mobile Phone and IoT</h1>'+
                          '<h2>Support a Sport Retail company to become one of the best companies on the industry.</h2>'+
                        '</section>',
                        '<section class="slide-content">'+
                          '<h1>Improve the performance on the implementation</h1>'+
                          '<h2>Reduce the effort of implement about 100 interfaces from 6 months 2 resources to 2 months one resource.</h2>'+
                        '</section>',
                        '<section class="slide-content">'+
                          '<h1>Guarantee the information arrival on the right time between different locations</h1>'+
                          '<h2>Establish the communication channel on almost real-time to the main office and almost 200 branches.</h2>'+
                        '</section>',
                        '<section class="slide-content">'+
                          '<h1>Simplify the infraestructure and the process to manage it</h1>'+
                          '<h2>Decrease the cryptographic process from 6 general purpose servers to 1 server for document digital signing and increase the company capabilities from 300 documents per second to 7500.</h2>'+
                        '</section>'],
                        // HIGH LEVEL EXAMPLES
                        ['<section class="slide-hero">'+
                          '<img src="img/conectivity/conectivity1.png">'+
                        '</section>',
                        '<section class="slide-hero">'+
                           '<img src="img/conectivity/conectivity2.png">'+
                         '</section>',
                         '<section class="slide-hero">'+
                            '<img src="img/conectivity/conectivity3.png">'+
                          '</section>']]
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
                            '<img src="img/bpm/definition.png">'+
                          '</section>'],
                         // HOW EMERGYS HELP COMPANIES
                         ['<section class="slide-hero">'+
                            '<img src="img/bpm/industries.png">'+
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
                            '<img src="img/bpm/bpm1.png">'+
                          '</section>',
                          '<section class="slide-hero">'+
                             '<img src="img/bpm/bpm2.png">'+
                           '</section>',
                           '<section class="slide-hero">'+
                              '<img src="img/bpm/bpm3.png">'+
                            '</section>']]
      }
    },
    mobile : {
      titles : ['What is it?', 'How Emergys help companies', 'Experience', 'High level examples'],
      slides : {
                        // WHAT IS IT?
        content       : [['Represents the human - computer interaction, involving communication, hardware and software on mobile devices.'+
                          '<br><br>'+'Allows data transmission without physical connection', '', '', ''],
                        // HOW EMERGYS HELP COMPANIES
                        ['Emergys has collaborated with several companies to improve the administration of their systems with agile solutions, intuitive, simple and easy to use mobile experiences.'],
                        // EXPERIENCE
                        ['', '', '', '', '', ''],
                        // HIGH LEVEL EXAMPLES
                        ['Mobile hybrid application']],
                        // WHAT IS IT?
        icon          : [['fa-mobile', 'fa-compress', 'fa-wifi', 'fa-user-secret'],
                        // HOW EMERGYS HELP COMPANIES
                        ['fa-briefcase'],
                        // EXPERIENCE
                        ['fa-futbol-o', 'fa-futbol-o', 'fa-home', 'fa-home', 'fa-road', 'fa-road'],
                        // HIGH LEVEL EXAMPLES
                        ['fa-mobile']],
                        // WHAT IS IT?
        extraContent  : [['',
                          // BENEFITS - BUSINESS LOGIC
                          '<section class="slide-header">'+
                             '<h3>Mobile devices benefits</h3>'+
                           '</section>'+
                           '<section class="slide-content">'+
                             '<h1>Business Logic</h2>'+
                             '<h2>The application interface lives in a mobile device, while the business logic lives in a server making the mobile functionality very fluid and the messages communication require few data between client and server</h2>'+
                           '</section>',
                           // BENEFITS - COMMUNICATION
                           '<section class="slide-header">'+
                              '<h3>Mobile devices benefits</h3>'+
                            '</section>'+
                            '<section class="slide-content">'+
                              '<h1>Communication</h2>'+
                              '<h2>The way to access the information, contact and answer - among other things -, its made with a wireless interaction which sends and receives voice and data</h2>'+
                            '</section>',
                            // BENEFITS - SECURITY
                            '<section class="slide-header">'+
                               '<h3>Mobile devices benefits</h3>'+
                             '</section>'+
                             '<section class="slide-content">'+
                               '<h1>Security</h2>'+
                               '<h2>Involves the protection between personal and business information, located and transmited from a mobile device against malware software threats, reducing the unauthorized risk or loss of information.</h2>'+
                             '</section>'],
                            // HOW EMERGYS HELP COMPANIES
                            [''],
                            // EXPERIENCE
                            // SPORTS SHOP
                            ['<section class="slide-header">'+
                               '<h3>Sports Shop - Recruitment</h3>'+
                             '</section>'+
                             '<section class="slide-content">'+
                               '<h1>Challenges</h2>'+
                               '<h2>Decrease response times and validations during the promotion process for their sales force.</h2>'+
                               '<h2>Decrease data entry errors.</h2>'+
                               '<h2>Automate recruitment tasks.</h2>'+
                               '<h2>Systematize the initial approval of the promoter.</h2>'+
                             '</section>',
                             '<section class="slide-header">'+
                                '<h3>Sports Shop - Recruitment</h3>'+
                              '</section>'+
                              '<section class="slide-content">'+
                                '<h1>Solutions Adopted</h2>'+
                                '<h2>A communitacion protocol with low data usage was implemented.</h2>'+
                                '<h2>THe digitalization of personal identifications being sent to a character recognition system was adopted.</h2>'+
                                '<h2>A process of business rules starts.</h2>'+
                                '<h2>Local storage allowing offline and online use.</h2>'+
                              '</section>',
                              // APPRAISALS
                              '<section class="slide-header">'+
                                 '<h3>Appraisals</h3>'+
                               '</section>'+
                               '<section class="slide-content">'+
                                 '<h1>Challenges</h1>'+
                                 '<h2>Reduce response times.</h2>'+
                                 '<h2>Systematize the flow of property valuations, allowing validation and productivity measurement.</h2>'+
                                 '<h2>Flexibility to incorporate new appraisals processes.</h2>'+
                                 '<h2>Implement geolocation and measurement technology.</h2>'+
                               '</section>',
                               '<section class="slide-header">'+
                                  '<h3>Appraisals</h3>'+
                                '</section>'+
                                '<section class="slide-content">'+
                                  '<h1>Solutions Adopted</h1>'+
                                  '<h2>Location capture using GPS device.</h2>'+
                                  '<h2>Data capture, contemplating 400 fields for the visit format.</h2>'+
                                  '<h2>Visit cancel or reschedule in case of a frustrated visit.</h2>'+
                                  '<h2>Local storage allowing offline and online use.</h2>'+
                                '</section>',
                                // ROADS AND HIGHWAYS
                                '<section class="slide-header">'+
                                   '<h3>Roads and Highways - SCT</h3>'+
                                 '</section>'+
                                 '<section class="slide-content">'+
                                   '<h1>Challenges</h1>'+
                                   '<h2>Implement GPS geolocation technology.</h2>'+
                                   '<h2>Decrease data entry errors.</h2>'+
                                   '<h2>Systematize the creating roads process.</h2>'+
                                 '</section>',
                                 '<section class="slide-header">'+
                                    '<h3>Roads and Highways - SCT</h3>'+
                                  '</section>'+
                                  '<section class="slide-content">'+
                                    '<h1>Solutions Adopted</h1>'+
                                    '<h2>Taking photos for each recording element and its coordinate.</h2>'+
                                    '<h2>GPS device implementation via Bluetooth.</h2>'+
                                    '<h2>Narrow error location margin.</h2>'+
                                  '</section>'],
                                // HIGH LEVEL EXAMPLES
                                ['<section class="slide-hero">'+
                                   '<img src="img/mobile/mobile1.png">'+
                                 '</section>']]
      }
    },
    ba : {
      titles : ['What is it?', 'How Emergys help companies', 'Experience', 'High level examples'],
      slides : {
                          // WHAT IS IT?
        content       : [['IBM BA software delivers data-driven insights that help organizations work smarter and helps to make better business decisions faster.', ''],
                          // HOW EMERGYS HELP COMPANIES
                         ['Emergys have experts for implementing data warehouse modeling and design information cubes to implement dashboard reports to enable companies finding areas for improvement.',
                          'Using SPSS Statistics Professional tools, we can help users to create models to make analysis more accurate and reach dependable conclusions to drive decision-making for corporations. ',
                          'Emergys can help you to recollect all your data generated inside your company and generate a differentiator against your competition.'],
                          // EXPERIENCE
                         ['', '', ''],
                         // HIGH LEVEL EXAMPLES
                         ['Analytics', 'Dashboards']],
                         // WHAT IS IT?
        icon          : [['fa-line-chart', 'fa-area-chart'],
                         // HOW EMERGYS HELP COMPANIES
                         ['fa-sitemap', 'fa-bar-chart', 'fa-database'],
                         // EXPERIENCE
                         ['fa-child', 'fa-child', 'fa-child'],
                         // HIGH LEVEL EXAMPLES
                         ['fa-cloud', 'fa-bar-chart']],
                         // WHAT IS IT?
        extraContent  : [['',
                          '<section class="slide-hero">'+
                            '<h1 class="left no-margin-top">BA solutions enable companies to identify and visualize trends and patterns that helps to:</h1>'+
                            '<h2>Compare scenarios</h2>'+
                            '<h2>Anticipate potential threats and opportunities</h2>'+
                            '<h2>Better planning of budget and forecast resources</h2>'+
                            '<h2>Balance risks against expected returns</h2>'+
                          '</section>'],
                          // HOW EMERGYS HELP COMPANIES
                          ['', '', ''],
                          // EXPERIENCE
                          ['<section class="slide-header">'+
                             '<h3>Caja Popular Mexicana - Credit Portfolio, Administration</h3>'+
                           '</section>'+
                           '<section class="slide-content">'+
                             '<h1>Solution</h2>'+
                             '<h2>Provide a data cube that helps end users to understand the output provided by the reports, and analyze the views to identify trends and improvement areas.</h2>'+
                             '<h2>Help high-level managers to make better decisions to improve their portfolio.</h2>'+
                           '</section>',
                           '<section class="slide-header">'+
                              '<h3>DPortenis - Sales</h3>'+
                            '</section>'+
                            '<section class="slide-content">'+
                              '<h1>Solution</h2>'+
                              '<h2>Provide consulting for implementation of complex reports that provide the sales data to identify trends and sales opportunities in the different regions of the country.</h2>'+
                            '</section>',
                            '<section class="slide-header">'+
                               '<h3>Inter-American Investment Corporation - Finance Portfolio, Operations, Administration</h3>'+
                             '</section>'+
                             '<section class="slide-content">'+
                               '<h1>Solution</h2>'+
                               '<h2>Provide reporting implementation for the different level of end users.</h2>'+
                               '<h2>Provide maintenance for indicators and dashboards.</h2>'+
                               '<h2>Create high-level reports for manager and finance executives.</h2>'+
                             '</section>'],
                            // HIGH LEVEL EXAMPLES
                           ['<section class="slide-hero">'+
                              '<img src="img/ba/ba1.png">'+
                            '</section>',
                            '<section class="slide-hero">'+
                               '<img src="img/ba/ba2.png">'+
                             '</section>']]
      }
    },
    retail : {
      titles : ['Experience', 'How Emergys help companies', 'High level examples'],
      slides : {
                        // EXPERIENCE
        content       : [['Our Experience'],
                        // HOW EMERGYS HELP COMPANIES
                         ['Retail distribution supply chain automation - BPM',
                          'Provide consulting for implementation of complex reports that provide the sales data to identify trends and sales opportunities in the different regions of the country - IBM Cognos Express',
                          'Enable the information usage thru modern interfaces as Mobile Devices and IoT - Integration Bus, MessageSight, MQ, Mobile First',
                         'Guarantee the information arrival on the right time between different locations.'],
                        // HIGH LEVEL EXAMPLES
                         ['Electronic monitoring process orders', 'Loan Process', 'Dashboards']],
                        // EXPERIENCE
        icon          : [['fa-thumbs-up center'],
                         // HOW EMERGYS HELP COMPANIES
                         ['fa-link', 'fa-file-pdf-o', 'fa-mobile', 'fa-envelope'],
                         // HIGH LEVEL EXAMPLES
                         ['fa-sitemap no-padding', 'fa-file', 'fa-bar-chart']],
                         // EXPERIENCE
        extraContent  : [['<section class="slide-hero">'+
                            '<img src="img/retail/experience.png">'+
                          '</section>'],
                        // HOW EMERGYS HELP COMPANIES
                        ['', '', '', ''],
                        // HIGH LEVEL EXAMPLES
                        ['<section class="slide-hero">'+
                           '<img src="img/retail/retail1.png">'+
                         '</section>',
                         '<section class="slide-hero">'+
                           '<img src="img/retail/retail2.png">'+
                         '</section>',
                         '<section class="slide-hero">'+
                           '<img src="img/retail/retail3.png">'+
                         '</section>']]
      }
    },
    manufacturing : {
      titles : ['Experience', 'How Emergys help companies', 'High level examples'],
      slides : {
                        // EXPERIENCE
        content       : [['Our Experience'],
                        // HOW EMERGYS HELP COMPANIES
                         [''],
                         // HIGH LEVEL EXAMPLES
                         ['IBM DataPower Auto Balancing Cluster', 'Organize your documents', 'Custom Application to Enteprise (ERP)']],
                         // EXPERIENCE
        icon          : [['fa-thumbs-up'],
                        // HOW EMERGYS HELP COMPANIES
                         ['fa-question-circle'],
                         // HIGH LEVEL EXAMPLES
                         ['fa-sitemap no-padding', '', 'fa-sitemap no-padding']],
                         // EXPERIENCE
        extraContent  : [['<section class="slide-hero">'+
                            '<img src="img/manufacturing/experience.png">'+
                          '</section>'],
                        // HOW EMERGYS HELP COMPANIES
                        ['<section class="slide-content">'+
                           '<h1>We offer solutions</h2>'+
                           '<h2>Document processes efficiently to reduce cost</h2>'+
                           '<h2>Suppliers communication</h2>'+
                           '<h2>Guarantee the information arrival on the right time between different locations</h2>'+
                           '<h2>ERP information extraction</h2>'+
                           '<h2>Connectivity between new and legacy systems</h2>'+
                         '</section>'],
                        // HIGH LEVEL EXAMPLES
                        ['<section class="slide-hero">'+
                           '<img src="img/manufacturing/manufacturing1.png">'+
                         '</section>',
                         '<section class="slide-hero">'+
                            '<img src="img/manufacturing/manufacturing2.png">'+
                          '</section>',
                          '<section class="slide-hero">'+
                             '<img src="img/manufacturing/manufacturing3.png">'+
                           '</section>']]
      }
    },
    logistics : {
      titles : ['Experience', 'How Emergys help companies', 'High level examples'],
      slides : {
                        // EXPERIENCE
        content       : [['Our Experience'],
                        // HOW EMERGYS HELP COMPANIES
                         ['We offer solutions'],
                        // HIGH LEVEL EXAMPLES
                         ['Electronic monitoring process orders', 'Dashboards', 'Consume external services']],
                         // EXPERIENCE
        icon          : [['fa-thumbs-up center'],
                         // HOW EMERGYS HELP COMPANIES
                         ['fa-question-circle center'],
                         // HIGH LEVEL EXAMPLES
                         ['fa-sitemap no-padding', 'fa-bar-chart', 'fa-database']],
                         // EXPERIENCE
        extraContent  : [['<section class="slide-hero">'+
                            '<img src="img/logistics/experience.png">'+
                          '</section>'],
                        // HOW EMERGYS HELP COMPANIES
                        ['<section class="slide-hero">'+
                           '<img src="img/logistics/solutions.png">'+
                         '</section>'],
                        // HIGH LEVEL EXAMPLES
                        ['<section class="slide-hero">'+
                           '<img src="img/logistics/logistics1.png">'+
                         '</section>',
                         '<section class="slide-hero">'+
                           '<img src="img/logistics/logistics2.png">'+
                         '</section>',
                         '<section class="slide-hero">'+
                           '<img src="img/logistics/logistics3.png">'+
                         '</section>']]
      }
    },
    einvoice : {
      titles : ['Experience', 'How Emergys help companies', 'High level examples'],
      slides : {
                          // EXPERIENCE
        content       : [[''],
                          // HOW EMERGYS HELP COMPANIES
                         [''],
                          // HIGH LEVEL EXAMPLES
                         ['IBM DataPower Auto Balancing Cluster', 'Architecture']],
                         // EXPERIENCE
        icon          : [['fa-file-text'],
                          // HOW EMERGYS HELP COMPANIES
                         ['fa-thumbs-up'],
                         // HIGH LEVEL EXAMPLES
                         ['fa-sitemap no-padding', 'fa-sitemap']],
                         // EXPERIENCE
        extraContent  : [['<section class="slide-content">'+
                           '<h1>Our Experience</h2>'+
                           '<h2>Created systems to generate the electronic invoices</h2>'+
                           '<h2>Agile the suppliers electronic invoices reception</h2>'+
                           '<h2>Verify and Sign Electronics Invoices as Electronic Invoice Provider (PAC)</h2>'+
                         '</section>'],
                         // HOW EMERGYS HELP COMPANIES
                        ['<section class="slide-content">'+
                           '<h1>We offer solutions</h2>'+
                           '<h2>Helps companies to be compliant with the tax legislation.</h2>'+
                           '<h2>Allow companies to receive hundreds of invoices automatically and allow to be processed by Enterprise Information Systems.</h2>'+
                           '<h2>Improve the capabilities to process Invoices for Electronic Invoice Provider (PAC) 25 times more than common technology</h2>'+
                         '</section>'],
                        // HIGH LEVEL EXAMPLES
                        ['<section class="slide-hero">'+
                           '<img src="img/einvoice/einvoice1.png">'+
                         '</section>',
                         '<section class="slide-hero">'+
                            '<img src="img/einvoice/einvoice2.png">'+
                          '</section>']]
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
    $slideshow.scrollLeft(0);

    setTimeout(function() {

      $appFullCategory.removeClass();

      currentCategory = '';
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

  // Subscribing the keyboard keys to the arrow controllers event, and the closeModal event
  document.onkeydown = function(e) {
    if (currentCategory != '') {
      switch (e.keyCode) {
        case 37:
          $slideshowLeft.trigger('click', { toScroll: $slideshow, direction: -1, title: false}, slideshowClicks);
          break;
        case 39:
          $slideshowRight.trigger('click', { toScroll: $slideshow, direction: 1, title: false}, slideshowClicks);
          break;
        case 27:
          closeModal();
          break;
      }
    }
  }

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
