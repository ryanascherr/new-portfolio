let delayInMilliseconds1 = 1700;
let delayInMilliseconds2 = 2200;
let delayInMilliseconds3 = 2700;
let longerDelayInMilliseconds = 1700;

$(window).on('load', function () {
    $("body").addClass("loaded");
    setTimeout(function() {
        $(".slide-from-bottom-one").removeClass("transparent");
        $(".block-one").addClass("hidden");
        $(".block-one-empty").removeClass("hidden");
    }, delayInMilliseconds1);
    setTimeout(function() {
      $(".slide-from-bottom-two").removeClass("transparent");
      $(".block-two").addClass("hidden");
      $(".block-two-empty").removeClass("hidden");
  }, delayInMilliseconds2);
  setTimeout(function() {
    $(".slide-from-bottom-three").removeClass("transparent");
    $(".block-three").addClass("hidden");
    $(".block-three-empty").removeClass("hidden");
}, delayInMilliseconds3);
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
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

  $("#time").html(moment().format('h:mm'));

let isLightMode = true;

$(".mode").click(function() {
    if (isLightMode) {
        $(".icon").html("wb_sunny");
        isLightMode = false;
        $("body").removeClass("light-mode");
        $("body").addClass("dark-mode");
        $(".project").addClass("dark-mode-shadow");
        return;
    } 
    if (isLightMode == false) {
        $(".icon").html("brightness_2");
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
  $(".five").slideUp();
  $(".six").slideUp();
});

$(".project-two").click(function(){
  $(".two").slideToggle();
  $(".one").slideUp();
  $(".three").slideUp();
  $(".four").slideUp();
  $(".five").slideUp();
  $(".six").slideUp();
});

$(".project-three").click(function(){
  $(".three").slideToggle();
  $(".one").slideUp();
  $(".two").slideUp();
  $(".four").slideUp();
  $(".five").slideUp();
  $(".six").slideUp();
});

$(".project-four").click(function(){
  $(".four").slideToggle();
  $(".one").slideUp();
  $(".two").slideUp();
  $(".three").slideUp();
  $(".five").slideUp();
  $(".six").slideUp();
});

$(".project-five").click(function(){
  $(".five").slideToggle();
  $(".one").slideUp();
  $(".two").slideUp();
  $(".three").slideUp();
  $(".four").slideUp();
  $(".six").slideUp();
});

$(".project-six").click(function(){
  $(".six").slideToggle();
  $(".one").slideUp();
  $(".two").slideUp();
  $(".three").slideUp();
  $(".four").slideUp();
  $(".five").slideUp();
});

$(".text-button").click(function() {
  if ($(".text-box").val() == "") {
    return;
  }

  let text = $(".text-box").val().trim();
  $(".text-box").val("");
  let paragraph = $("<p></p>").text(text);
  let innerDiv = $("<div></div>").addClass("text-bubble-right");
  let outerDiv = $("<div></div>").addClass("text-box-right");

  innerDiv.append(paragraph);
  outerDiv.append(innerDiv);
  $(".texting").append(outerDiv);
})

const textSubmitButton = document.querySelector(".text-box");
textSubmitButton.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
      if ($(".text-box").val() == "") {
        return;
      }
      let text = $(".text-box").val().trim();
      $(".text-box").val("");
      let paragraph = $("<p></p>").text(text);
      let innerDiv = $("<div></div>").addClass("text-bubble-right");
      let outerDiv = $("<div></div>").addClass("text-box-right");
    
      innerDiv.append(paragraph);
      outerDiv.append(innerDiv);
      $(".texting").append(outerDiv);
  }
});

$(".button").click(function(event) {
  event.stopPropagation();
});