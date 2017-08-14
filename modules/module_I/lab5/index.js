function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        $('#site-wrapper').removeClass('show-nav');
    } else {
        $('#site-wrapper').addClass('show-nav');
    }
}

$(document).ready(function() {
	 $('.toggle-nav').click(function() {
        toggleNav();
    });
});