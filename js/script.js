$(function () {

  /////////////////////popup contact//////
  //menu toggle
  $(".menu i").click(function () {
    $(".contact-page").animate(
      {
        height: "100vh",
      },
      500
    );
  });

  //close popup contact page
  $(".contact-page .menu i").click(function () {
    $(this).parents(".contact-page").animate(
      {
        height: 0,
      },
      500
    );
  });

  //envelop contact
  $("header .contact").click(function (e) {
    e.preventDefault();
    $(".contact-page").animate(
      {
        height: "100vh",
      },
      500
    );
  });

  $(".about-me .content p:last-child a").click(function (e) {
    e.preventDefault();
    $(".contact-page").animate(
      {
        height: "100vh",
      },
      500
    );
  });
  ////////////////popoup contact///////////

  //////up button//////////
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".top-button").fadeIn(600);
    } else {
      $(".top-button").fadeOut(500);
    }
  });

  $(".top-button").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });

  $(".explore").on("click", function () {
    $("html,body").animate({
      scrollTop: $("header").height(),
    });
  });
});

$(window).on("load", function () {
  $(".welcome")
    .animate(
      {
        top: "50%",
        opacity: "1",
      },
      1000
    )
    .delay(5000)
    .animate({
      left: "-50%",
      opacity: "0",
    });
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
