
// Client logo slide js
$(document).ready(function () {
    $('.logo-slider').slick({
      prevArrow: $('.custom-prev1'),
      nextArrow: $('.custom-next1'),
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 4,
        arrows: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
              },
            },
            {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                },
              },
          ],
    });
});

// Pillow slide js
$(document).ready(function () {
  $('.pillow-slider').slick({
    prevArrow: $('.custom-prev'),
    nextArrow: $('.custom-next'),
      dots: false,
      arrrows:false,
      infinite: true,
      speed: 300,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplaySpeed: 3000,
      responsive: [
          {
            breakpoint: 1499,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1299,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 1,
              autoplay: true,
            },
          },
          {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                autoplay: true,
              },
            },
        ],
  });
});

// Mega menu js
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMobileMenu = document.getElementById("close-mobile-menu");
  const desktopMenus = [
    {
      button: document.getElementById("desktop-menu-button"),
      menu: document.getElementById("desktop-mega-menu"),
    },
    {
      button: document.getElementById("desktop-menu-button1"),
      menu: document.getElementById("desktop-mega-menu1"),
    },
  ];
  const mobileMegaMenuToggle = document.getElementById("mobile-mega-menu-toggle");
  const mobileMegaMenu = document.getElementById("mobile-mega-menu");
  const mobileMegaIcon = document.getElementById("mobile-mega-icon");
  mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("-translate-x-full");
  });
  closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
  });
  desktopMenus.forEach(({ button, menu }) => {
    button.addEventListener("click", () => {
      const isActive = !menu.classList.contains("hidden");
      menu.classList.toggle("hidden");
      button.classList.toggle("underline", !isActive);
    });
    document.addEventListener("click", (event) => {
      if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.add("hidden");
        button.classList.remove("underline");
      }
    });
  });
  mobileMegaMenuToggle.addEventListener("click", () => {
    mobileMegaMenu.classList.toggle("hidden");
    mobileMegaIcon.classList.toggle("rotate-180");
  });
});


// Sticky header js
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('fixed', 'bg-gray-800', 'text-white', 'shadow-lg', 'top-0');
  } else {
    header.classList.remove('fixed', 'bg-gray-800', 'text-white', 'shadow-lg');
  }
});


