/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#7d7d7d" });
 });


  $(document).ready(function(){
   $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1400);
      e.preventDefault();
   });
   return false;
});


$(document).ready(function() {
	$(".fancybox").fancybox({
		maxWidth	: 500,
		maxHeight	: 500,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});