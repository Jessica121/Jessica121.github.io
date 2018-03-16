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

/*function to mark selection in nav bar as active*/
$(function() {
  $('.nav li').click(function() {
     $('.nav li').removeClass();
     $(this).addClass('active');
  });
});

/*hover func*/

$(function(){
  $('.hoverText').delegate('span', 'mouseenter mouseleave', function(e){
    
    var span = $(this);
    
    if (e.type === 'mouseenter'){
      span.not(':animated').animate({ fontSize: '50px' });
    }
    else if (e.type === 'mouseleave'){
      span.animate({ fontSize: '70px' });
    }
  });
  
  var newText = '',
      h1 = $('.hoverText').text(),
      len = h1.length;

  for (var i = 0; i < len; i++){
    newText += '<span>' + h1.charAt(i) + '</span>';
}
  $('.hoverText').html(newText);  
});


$(function() {
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
})