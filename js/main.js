
$(".openmenu").click(function(e){
  $( ".mobileMenu" ).addClass( "active" );
  e.preventDefault();
});

$(".closemenu").click(function(a){
  $( ".mobileMenu" ).removeClass( "active" );
  a.preventDefault();
});

$(".arrowWork").click(function(){
  $('html, body').animate({
      scrollTop: $("#work").offset().top
   }, 800);
});
