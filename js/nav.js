var lastScrollTop = 0;

function navToggle() {
    var btn = document.getElementById('menuBtn');
    var nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}

var nav = document.getElementById('site-menu');
var header = document.getElementById('top');

function hideNav() {
    nav.classList.remove('nav-sticky');
    header.classList.remove('pt-scroll');
}

function showNav() {
    nav.classList.add('nav-sticky');
    header.classList.add('pt-scroll');
}

window.addEventListener('scroll', function() {
    

    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
        // downscroll code
    } else {
        // upscroll code
        nav.classList.add('nav-sticky');
        header.classList.add('pt-scroll');
    }
    
    lastScrollTop = st <= 0 ? 0 : st;
     
});


$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });