$(window).on('load', function () {
  $("body").addClass("loaded");
  setTimeout(function () {
    $(".slide-from-bottom-one").removeClass("transparent");
    $(".block-one").addClass("hidden");
    $(".block-one-empty").removeClass("hidden");
  }, 1700);
  setTimeout(function () {
    $(".slide-from-bottom-two").removeClass("transparent");
    $(".block-two").addClass("hidden");
    $(".block-two-empty").removeClass("hidden");
  }, 2200);
  setTimeout(function () {
    $(".slide-from-bottom-three").removeClass("transparent");
    $(".block-three").addClass("hidden");
    $(".block-three-empty").removeClass("hidden");
  }, 2700);
});

$(window).on("load", function () {
  $(window).scroll(function () {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function () {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom - 50) { //object comes into view (scrolling down)
        if ($(this).css("opacity") == 0) { $(this).fadeTo(50, 1); }
      }
    });
  //invoke scroll-handler on page-load
  }).scroll();
});

$("#time").html(moment().format('h:mm'));

let isLightMode = true;

$(".mode").click(function () {
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

// $("#email-submit").click(function (event) {
//   event.preventDefault();
//   let sender = "katie@katie.com";
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "sender@email_address.com",
//     Password: "Enter your password",
//     To: 'ryanascherr@gmail.com',
//     From: sender,
//     Subject: "Message from Portfolio!",
//     Body: "Well that was easy!!",
//   })
//     .then(function (message) {
//       alert("mail sent successfully")
//     });
// })

$(".project-one").click(function () {
  $(".one").slideToggle();
  $(".two").slideUp();
  $(".three").slideUp();
  $(".four").slideUp();
  $(".five").slideUp();
  $(".six").slideUp();
});

$(".project-two").click(function () {
  $(".two").slideToggle();
  $(".one").slideUp();
  $(".three").slideUp();
  $(".four").slideUp();
  $(".five").slideUp();
  $(".six").slideUp();
});

$(".project-three").click(function () {
  $(".three").slideToggle();
  $(".one").slideUp();
  $(".two").slideUp();
  $(".four").slideUp();
  $(".five").slideUp();
  $(".six").slideUp();
});

$(".project-four").click(function () {
  $(".four").slideToggle();
  $(".one").slideUp();
  $(".two").slideUp();
  $(".three").slideUp();
  $(".five").slideUp();
  $(".six").slideUp();
});

$(".project-five").click(function () {
  $(".five").slideToggle();
  $(".one").slideUp();
  $(".two").slideUp();
  $(".three").slideUp();
  $(".four").slideUp();
  $(".six").slideUp();
});

$(".project-six").click(function () {
  $(".six").slideToggle();
  $(".one").slideUp();
  $(".two").slideUp();
  $(".three").slideUp();
  $(".four").slideUp();
  $(".five").slideUp();
});

function sendText() {
  let text = $(".text-box").val().trim();
  $(".text-box").val("");
  let paragraph = $("<p></p>").text(text);
  let innerDiv = $("<div></div>").addClass("text-bubble-right");
  let outerDiv = $("<div></div>").addClass("text-box-right");
  
  innerDiv.append(paragraph);
  outerDiv.append(innerDiv);
  $(".texting").append(outerDiv);
}

$(".text-button").click(function () {
  if ($(".text-box").val() == "") {
    return;
  }
  sendText();
})

$(".text-box").addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    if ($(".text-box").val() == "") {
      return;
    }
    sendText();
  }
});

$(".button").click(function (event) {
  event.stopPropagation();
});