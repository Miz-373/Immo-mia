// Nav Burger-menu script start -----------------------------------
const navslide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.navLinks li');


  burger.addEventListener('click', () =>{
     //toggle nav
    nav.classList.toggle('nav-active');

  //animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5}s`;
    }
  });
  //burger animation
  burger.classList.toggle('toggle');
  });
}

navslide();
// Nav Burger-menu script End ----------------------------------

//back to top Button scrolling activation----------------------------
var timeOut;
  function scrollToTop() {
    if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0) {
      window.scrollBy(0,-50);
      timeOut=setTimeout('scrollToTop()',10);
    }
    else clearTimeout(timeOut);
  }
