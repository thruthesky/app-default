$(function(){
	//page_header( 'template/header.html' );
	//page_header( 'template/header-cebu-city.html' );
	//page_header( 'template/header-ringing.html' );
	//page_footer( 'template/footer.html' );
	
	// page_content( 'home', "<img class='first-image' src='img/default/first-page.jpg'>" );
	$('.first-image').css('width','100%');
	
	/* debugging */
	if ( debug ) {
	}
	else {
		$('body').on('click', 'a', function(){
			if ( $(this).prop('target') == '_blank' ) {
				if ( ! is_online() ) {
					message('Please connect to Internet');
					return false;
				}
			}
		});
	}
	
});
/*
function callback_device_ready()
{
	trace("callback_device_ready() begins ...");
	//load_app();
	$(".footer .title").append(" (c)");
	
}
*/
function callback_online()
{
	trace("callback_online() begins ...");
}
