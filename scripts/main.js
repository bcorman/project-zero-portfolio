// The elements on the landing page will be saved to an array of objects

var aboutPage = `<section class="about">
                    <img src=images/prince-william.png>
                    <h3>Ben Corman</h3>
                    <p>This is the website of Ben Corman. This is a close approximation of what he looks like.</p>
                </section>`

var projectsPage = {

}


// Nav Buttons
$('#hello').on('click', function () {
  $('main').slideToggle(500);
});

$('#about-button').on('click', function() {
  $('main').html('');
  $('main').hide(500);
  $('main').append(aboutPage);
  $('main').show(500);
})
