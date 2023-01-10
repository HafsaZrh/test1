/**
* Template Name: Mentor - v4.9.1
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

$(document).ready(function(){     
  //Dès qu'on clique sur #b1, on applique hide() au titre
      $("#toggleDiv").hide();
  $("#togg1").click(function(){
        $("#d1").show();
        $("#d2").hide();
        $("#d3").hide();
        $("#d4").hide();
        $("#d5").hide();
        $("#d6").hide();
        $("#d7").hide();
        $("#d8").hide();
        $("#d9").hide();
        $("#d10").hide();
        $("#d11").hide();
        $("#d12").hide();
        $("#d13").hide();
        $("#d14").hide();
        $("#d15").hide();
        $("#d16").hide();
        $("#d17").hide();
        $("#d18").hide();
        $("#d19").hide();
        $("#d20").hide();
        $("#d21").hide();
        $("#d22").hide();
        $("#d23").hide();
        $("#d24").hide();
  
  });    
  $("#togg2").click(function(){
        $("#d2").show();
        $("#d1").hide();
        $("#d3").hide();
        $("#d4").hide();
        $("#d5").hide();
        $("#d6").hide();
        $("#d7").hide();
        $("#d8").hide();
        $("#d9").hide();
        $("#d10").hide();
        $("#d11").hide();
        $("#d12").hide();
        $("#d13").hide();
        $("#d14").hide();
        $("#d15").hide();
        $("#d16").hide();
        $("#d17").hide();
        $("#d18").hide();
        $("#d19").hide();
        $("#d20").hide();
        $("#d21").hide();
        $("#d22").hide();
        $("#d23").hide();
        $("#d24").hide();
  });
  
  $("#togg3").click(function(){
        $("#d3").show();
        $("#d1").hide();
        $("#d2").hide();
        $("#d4").hide();
        $("#d5").hide();
        $("#d6").hide();
        $("#d7").hide();
        $("#d8").hide();
        $("#d9").hide();
        $("#d10").hide();
        $("#d11").hide();
        $("#d12").hide();
        $("#d13").hide();
        $("#d14").hide();
        $("#d15").hide();
        $("#d16").hide();
        $("#d17").hide();
        $("#d18").hide();
        $("#d19").hide();
        $("#d20").hide();
        $("#d21").hide();
        $("#d22").hide();
        $("#d23").hide();
        $("#d24").hide();
  });
  $("#togg4").click(function(){
    $("#d3").hide();
    $("#d1").hide();
    $("#d2").hide();
    $("#d4").show();
    $("#d5").hide();
    $("#d6").hide();
    $("#d7").hide();
    $("#d8").hide();
    $("#d9").hide();
    $("#d10").hide();
    $("#d11").hide();
    $("#d12").hide();
    $("#d13").hide();
    $("#d14").hide();
    $("#d15").hide();
    $("#d16").hide();
    $("#d17").hide();
    $("#d18").hide();
    $("#d19").hide();
    $("#d20").hide();
    $("#d21").hide();
    $("#d22").hide();
    $("#d23").hide();
    $("#d24").hide();
});
$("#togg5").click(function(){
  $("#d5").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d3").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg6").click(function(){
  $("#d6").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d3").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg7").click(function(){
  $("#d7").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d3").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg8").click(function(){
  $("#d8").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d3").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg9").click(function(){
  $("#d9").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d3").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg10").click(function(){
  $("#d10").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d3").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg11").click(function(){
  $("#d11").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d3").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg12").click(function(){
  $("#d12").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d3").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg13").click(function(){
  $("#d13").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d3").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg14").click(function(){
  $("#d14").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d3").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg15").click(function(){
  $("#d15").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d3").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg16").click(function(){
  $("#d16").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d3").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg17").click(function(){
  $("#d17").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d3").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg18").click(function(){
  $("#d18").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d3").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg19").click(function(){
  $("#d19").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d3").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg20").click(function(){
  $("#d20").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d3").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg21").click(function(){
  $("#d21").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d3").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg22").click(function(){
  $("#d22").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d3").hide();
  $("#d23").hide();
  $("#d24").hide();
});
$("#togg23").click(function(){
  $("#d23").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d3").hide();
  $("#d24").hide();
});
$("#togg24").click(function(){
  $("#d24").show();
  $("#d1").hide();
  $("#d2").hide();
  $("#d4").hide();
  $("#d5").hide();
  $("#d6").hide();
  $("#d7").hide();
  $("#d8").hide();
  $("#d9").hide();
  $("#d10").hide();
  $("#d11").hide();
  $("#d12").hide();
  $("#d13").hide();
  $("#d14").hide();
  $("#d15").hide();
  $("#d16").hide();
  $("#d17").hide();
  $("#d18").hide();
  $("#d19").hide();
  $("#d20").hide();
  $("#d21").hide();
  $("#d22").hide();
  $("#d23").hide();
  $("#d3").hide();
});



  //Dès qu'on clique sur #b1, on applique show() au titre
  
});

$('div.toggleDiv').hide();
$('.show_hide').showHide({
    speed: 500,
    changeText: 0,
    showText: 'View',
    hideText: 'Close'
});
jQuery('.thumbnail').one('inview', function (event, visible) {
  if (visible == true) {
      jQuery(this).addClass("animated fadeInDown");
  } else {
      jQuery(this).removeClass("animated fadeInDown");
  }
});

$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {
    
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }
  
  sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });


});




   