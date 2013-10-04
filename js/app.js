$(document).ready(function() {
	$(window).on('scroll', function() {
		var scrollTop = $('html').scrollTop() + $('body').scrollTop();
		$('body').css('background-position', 'center ' + (-scrollTop / 1.5) + 'px');
	});
});