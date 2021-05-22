$(document).ready(function() {
    


let delayInMilliseconds = 1700;

setTimeout(function() {
    $(".slide-from-bottom").removeClass("transparent");
}, delayInMilliseconds);


});

$(window).on('load', function () {
    $("body").addClass("loaded");
});