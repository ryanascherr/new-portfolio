let delayInMilliseconds = 1700;

$(window).on('load', function () {
    $("body").addClass("loaded");
    setTimeout(function() {
        $(".slide-from-bottom").removeClass("transparent");
    }, delayInMilliseconds);
});