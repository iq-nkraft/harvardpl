(function ($) {


$( '.call-out h2' ).wrapInner( '<span></span>');
$( 'h2.section-heading' ).wrapInner( '<span></span>');
//$( '.call-out' ).wrapInner( '<div class="call-out-inner"></div>');

	


$( '.call-out.with-image' ).each(function() {
  var calloutImage = $(this).children('.background');
  var imgSrc = $(calloutImage).attr('src');
  $(calloutImage).hide();
  $(this).css('background-image', 'url(' + imgSrc + ')');
});

$( '.hero' ).each(function() {
  var calloutImage = $(this).children('.background');
  var imgSrc = $(calloutImage).attr('src');
  $(calloutImage).hide();
  $(this).css('background-image', 'url(' + imgSrc + ')');
});	

$( '.featured' ).each(function() {
  var calloutImage = $(this).children('.background');
  var imgSrc = $(calloutImage).attr('src');
  $(calloutImage).hide();
  $(this).css('background-image', 'url(' + imgSrc + ')');
});	


$( '.circular' ).each(function() {
	var circular = $(this),
    circleimage = $(this).find('img');
	circular.width(circleimage.height());
});	

})(jQuery);