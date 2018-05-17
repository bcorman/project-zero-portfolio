// The elements on the landing page will be saved to an array of objects

var landingPage = {
  section: $('.landing-page'),
  image: $('section img'),
  h3: $('section h3'),
  p: $('section p')
}

var aboutPage = {

}

$('#hello').on('click', function () {
  landingPage.section.slideToggle(500);
});
