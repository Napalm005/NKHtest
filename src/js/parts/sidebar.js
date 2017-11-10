// Open sidebar
var sidebar = $('.sidebar');
var gamburger = $('#gamburger');
var sidebarBack = $('.sidebar__back');
gamburger.click(function(e) {
    sidebar.addClass('show');
})
sidebarBack.click(function(e) {
    sidebar.removeClass('show');
})

