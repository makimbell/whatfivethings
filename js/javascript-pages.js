// This code is for the slider on the secondary pages
// Slides start out hidden because of CSS. They are shown as the user scrolls through

// Options
var speed = 500; // Transition speed - fade
var autoswitch_speed = 5000; // Auto slider speed

// Add first initial active class
$(".slide").first().addClass("active");

// Show only active class slide
$(".active").show();

// If user clicks Next button, call function nextSlide()
$('#next').on('click', nextSlide);

// If user clicks Prev button, call function prevSlide()
$('#prev').on('click', prevSlide);

// If the user presses the forward or back arrow on the keyboard,
//  call the prev/next functions
document.onkeydown = keypress;

function keypress(event) {
  var keyDownEvent = event || window.event,
  keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;
  
  if (keycode == 37) {
    prevSlide();
  } else if (keycode == 39) {
    nextSlide();
  }
}

// Switch to next slide
function nextSlide(){
  $('.active').removeClass('active').addClass('oldActive');
  if($('.oldActive').is(':last-child')){
    $('.slide').first().addClass('active');
  } else {
    $('.oldActive').next().addClass('active');
  }
  $('.oldActive').removeClass('oldActive');
  $('.slide').fadeOut(speed);
  $('.active').fadeIn(speed);
}

// Switch to prev slide
function prevSlide(){
  $('.active').removeClass('active').addClass('oldActive');
  if($('.oldActive').is(':first-child')){
    $('.slide').last().addClass('active');
  } else {
    $('.oldActive').prev().addClass('active');
  }
  $('.oldActive').removeClass('oldActive');
  $('.slide').fadeOut(speed);
  $('.active').fadeIn(speed);
}