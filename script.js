$(document).ready(function() {
    setInterval ('cursorAnimation0()', 700);
});

function cursorAnimation0() {
    $('#curser').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
} 

/*Smooth scroll function*/
$('#About').on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 600, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

/*function to mark selection in nav bar as active*/
$(function() {
  $('.nav li').click(function() {
     $('.nav li').removeClass();
     $(this).addClass('active');
  });
});