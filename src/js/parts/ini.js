$(function() {
    //wow
    // var wow = new WOW({
    //     offset: 100 // distance to the element when triggering the animation (default is 0)
    // });
    // wow.init();

    var dinamicContent = $('.main-page__dinamic-content');

    $('.button--slide').on('click', function () {
    	if (dinamicContent.hasClass('slide-1')) {
    		dinamicContent.removeClass('slide-1').addClass('slide-2');
    	} else if(dinamicContent.hasClass('slide-2')) {
    		dinamicContent.removeClass('slide-2').addClass('slide-1');
    	}
    })
})