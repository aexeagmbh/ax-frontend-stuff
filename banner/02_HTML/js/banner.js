(function($){
	$(function(){
		// Save the closed funcionality in the localstorage
		$('.ax-banner .alert').on('closed.bs.alert', function(e){
			localforage.setItem('hideBanner', true);
		});
		// Initialize the tooltip
		$('.ax-tooltip').tooltip({
			'container': 'body'
		});
		// Hide the banner if needed
		localforage.getItem('hideBanner', function(hide){
			if ( hide == null ) $('.ax-banner').show();
		});
	});
})(jQuery);