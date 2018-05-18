// Animation for landing page text

var landingPageText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

$('header').on('click', function () {
  $('#landing-page p').setTimeout(function () {
    for (var i = 0; i < landingPageText.length; i++) {
      $('#landing-page p').delay(5000).append(landingPageText[i]);
    }
  }, 10);
  });
