$(function(){
	page_header( 'template/header.html' );
	page_footer( 'template/footer.html' );
	$('body').on('click', 'a', function(){
		if ( $(this).prop('target') == '_blank' ) {
			if ( ! is_online() ) {
				message('인터넷을 연결 해 주세요.');
				return false;
			}
		}
	});
});

function callback_device_ready()
{
}

function callback_online()
{
	api_load(
		{
			url: 'http://philgo.com/?module=api&action=post_list_list_view&post_id=apps&submit=1',
			callback: 'api_callback_apps'
		}
	);
}

function api_callback_apps(data)
{
	listview_add_html( '#home .listview', data.html );
	/** 안드로이드 인 경우, 안드로이드 앱 다운로드를 할 수 있도록 해 준다. */
	if ( is_android() ) {
		$('.post').each(function(index){
			var url = $(this).attr('varchar1');
			if ( url ) {
				$(this).find('a').prop('href', url);
			}
		});
	}
}