let delayInMilliseconds = 1700;

$(window).on('load', function () {
    $("body").addClass("loaded");
    setTimeout(function() {
        $(".slide-from-bottom").removeClass("transparent");
    }, delayInMilliseconds);
});

$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom - 50) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(50,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {
              $(this).fadeTo(50,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

  $("#time").html(moment().format('h:mm'));

let isLightMode = true;

$(".icon").click(function() {
    if (isLightMode) {
        $(".icon").html("brightness_2");
        isLightMode = false;
        $("body").removeClass("light-mode");
        $("body").addClass("dark-mode");
        $(".project").addClass("dark-mode-shadow");
        return;
    } 
    if (isLightMode == false) {
        $(".icon").html("wb_sunny");
        isLightMode = true;
        $("body").removeClass("dark-mode");
        $("body").addClass("light-mode");
        $(".project").removeClass("dark-mode-shadow");
        return;
    }
})

$(".project-one").click(function(){
  $(".one").slideToggle();
  $(".two").slideUp();
  $(".three").slideUp();
  $(".four").slideUp();
});

$(".project-two").click(function(){
  $(".two").slideToggle();
  $(".one").slideUp();
  $(".three").slideUp();
  $(".four").slideUp();
});

$(".project-three").click(function(){
  $(".three").slideToggle();
  $(".one").slideUp();
  $(".two").slideUp();
  $(".four").slideUp();
});

$(".project-four").click(function(){
  $(".four").slideToggle();
  $(".one").slideUp();
  $(".two").slideUp();
  $(".three").slideUp();
});