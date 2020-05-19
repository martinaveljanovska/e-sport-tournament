$(function () {

  // accordion
  $('.toggle').click(function (e) {
    e.preventDefault();

    var toggle = $(this);

    if (toggle.next().hasClass('show')) {
      toggle.next().removeClass('show');
      toggle.next().slideUp(350);
      toggle.removeClass('active');
    } else {
      toggle.parent().parent().find('.inner').removeClass('show');
      // toggle.next().slideUp(350);
      toggle.next().toggleClass('show');
      toggle.next().slideToggle(350);
      toggle.addClass('active');
    }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 250, 'easeOutSine');
    event.preventDefault();
  });


  // back to top button

  var offset = 550;
  var duration = 300;

  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(duration);
    } else {
      $('.back-to-top').fadeOut(duration);
    }

  });

  $('.back-to-top').click(function (event) {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  })




  var toggle = $('#toggle');

  $('#menu a').on('click', function () {
    console.log()
    if ($(window).width() < 790) {
      $('#toggle').click();
    }

  });

  toggle.on('click', function () {
    $(this).toggleClass('is-active');

    $("#menu").addClass('flex');
    $('#menu').toggleClass('slideInDown slideOutUp');
    $('body').toggleClass('overflow');
  })
});
