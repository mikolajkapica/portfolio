$(document).ready(function(){
    $("body").hide(0).fadeIn(1000)
});

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});


$(function() {
    var header = $(".name");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            header.removeClass('name').addClass("outName");
        } else {
            header.removeClass("outName").addClass('name');
        }
    });
});
$(function() {
    var header = $(".logo");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            header.removeClass('logo').addClass("outLogo");
        } else {
            header.removeClass("outLogo").addClass('logo');
        }
    });
});


// rotate scroll
// var $sun = $('.sun');
// var $win = $(window);
//
// $win.on('scroll', function () {
//   var top = $win.scrollTop() /3;
//   $sun.css('transform', 'rotate(' + top + 'deg)');
// })
//
// $( document ).ready(function() {
//
//   // Get started!
//
// });
//
//show-hide
// var $dipper = $('.dipper');
//
// $dipper.waypoint(function (direction) {
//   if (direction == 'down') {
//     $dipper.addClass('js-dipper-animate');
//   }
//   else {
//     $dipper.removeClass('js-dipper-animate');
//   }
// }, { offset: '50%' });


//smooth scroll
// $(document).ready(function() {
//
//   var scrollLink = $('.scroll');

  // Smooth scrolling
  // scrollLink.click(function(e) {
  //   e.preventDefault();
  //   $('body,html').animate({
  //     scrollTop: $(this.hash).offset().top - 60
  //   }, 1000);
  // });

  // Active link switching
  // $(window).scroll(function() {
  //   var scrollbarLocation = $(this).scrollTop();
  //
  //   scrollLink.each(function() {
  //
  //     var sectionOffset = $(this.hash).offset().top - 20;
  //
  //     if ( sectionOffset <= scrollbarLocation ) {
  //       $(this).addClass('active');
  //       $(this).siblings().removeClass('active');
  //     }
  //   })
  //
  // })

// })
//scroll to id
// $(function() {
//     $('a[href*=#]:not([href=#])').click(function() {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
//         if (target.length) {
//             $('html,body').animate({
//               scrollTop: target.offset().top
//             }, 1000);
//             return false;
//         }
//     });
// });
//scroll to horizontal/vertical
// $({myScrollTop:window.pageYOffset}).animate({myScrollTop:300}, {
//   duration: 600,
//   easing: 'swing',
//   step: function(val) {
//     window.scrollTo(0, val);
//   }
// });

//click and drag to scrolll
// var curYPos, curXPos, curDown;
//
// window.addEventListener('mousemove', function(e){
//   if(curDown){
//     window.scrollTo(document.body.scrollLeft + (curXPos - e.pageX), document.body.scrollTop + (curYPos - e.pageY));
//   }
// });
//
// window.addEventListener('mousedown', function(e){
//   curYPos = e.pageY;
//   curXPos = e.pageX;
//   curDown = true;
// });
//
// window.addEventListener('mouseup', function(e){
//   curDown = false;
// });

// $(document).ready(function(){
//   $('#sidebar-btn-1').click(function(){
//     $('#sidebar-1').toggleClass('visible')
//   });
// });
//
// $(document).ready(function(){
//   $('#sidebar-btn-1').click(function(){
//     $('#sidebar-btn-1').toggleClass('clicked')
//   });
// });
// Hide .menu-bar-bar on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.menu-bar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.menu-bar').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.menu-bar').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
