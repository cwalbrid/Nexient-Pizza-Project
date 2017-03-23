Hello!

Brick Oven Pizza Co. is pizza chain website built with AngularJS. It must be run on a server to view. Just open the command line and run command ‘http-server’ while inside the directory, and view the localhost address in a web browser.

The site has two views:

1. home.html: This view is the landing page for the site. It’s built with standard HTML markup, and includes a nav to different franchise locations. When users select a location in the nav, a corresponding filter keyword is set in the model (factory.js).

2. location.html: This view is where users can see information about each franchise. Rather than writing markup for each franchise page, this view uses AngularJS expressions to render elements.  Data for each franchise is stored in the model (factory.js). When the location.html page loads, data for a specific franchise is bound to the $scope. The filter keyword determines which franchise’s information is bound to the $scope and rendered in the markup. 

Because the data for each franchise populates a single view, adding new franchises does not require writing additional markup or linking to new html files. Instead, the information for the new franchise is added to the model (factory.js -> navData, viewData) and AngularJS does all the rendering. 

The repo for the site can be viewed here: https://github.com/cwalbrid/Nexient-Pizza-Project
