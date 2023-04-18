function choose() {
    var choose = document.querySelector('.choose')
    document.body.style.overflowY = "scroll";
    choose.style.opacity = "0"

    setInterval(minhaFuncao, 200);
}

function minhaFuncao() {
    var choose = document.querySelector('.choose')
    choose.style.display = "none"
}

function proxSlide() {
    var slide = document.querySelector('.slider')
    var marginLeftAtual = parseInt(window.getComputedStyle(slide).marginLeft) || 0
    var novoMarginLeft = marginLeftAtual + -120
    var larguraSlider = slide.offsetWidth;
    if (novoMarginLeft < -(larguraSlider - 100)) {
        novoMarginLeft = 0;
    }
    slide.style.marginLeft = novoMarginLeft + '%';
}

function prevSlide() {
    var slide = document.querySelector('.slider')

    slide.style.marginLeft = '0%'
}

var header = document.querySelector(".header");
var className = "inverted";
var scrollTrigger = 30;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open')
      document.querySelector('.icon1').src = "assets/img/menu_white_36dp.svg";
    } else {
      menuMobile.classList.add('open')
      document.querySelector('.icon1').src = "assets/img/close_white_36dp.svg";
    }
  }

  function menuHide() {
    let menuMobile = document.querySelector('.mobile-menu')

    menuMobile.classList.remove('open')
    document.querySelector('.icon1').src = "assets/img/menu_white_36dp.svg";
  }