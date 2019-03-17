// hide all slides
$(".slide").hide();

// options
var speed = 500; //transition speed - fade
var autoswitch = false; //auto slider options
var autoswitch_speed = 5000; //auto slider speed

// add first initial active class
$(".slide").first().addClass("active");

// show only active class slide
$(".active").show();

// Next Event Handler
$('#next').on('click', nextSlide);  // call function nextSlide

// Prev Event Handler
$('#prev').on('click', prevSlide);  // call function prevSlide

// Auto Slider Handler
if(autoswitch == true){
  setInterval(nextSlide,autoswitch_speed);// call function and value 4000
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
