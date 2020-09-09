// _ibg====================================================================================================================================================================
   //clean js
   function ibg() {
      let ibg=document.querySelectorAll("._ibg");
      for (var i = 0; i < ibg.length; i++) {
         if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundimage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
         }
      };
   }
   ibg();
   // jquery
/* function ibg() {
   $.each($("_ibg"), function (index, val) {
      if ($(this).find("img").length > 0) {
      $(this).css("background-image",'url("' + $(this).find("img").attr("src") + '")');
      }
   });
}
ibg(); */

// ========================================================================================================================================================================

// Add webp image in html==================================================================================================================================================
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};

testWebP(function (support) {
   if (support == true) {
      document.querySelector("body").classList.add("webp");
   } else {
      document.querySelector("body").classList.add("no-webp");
   }
});
// ========================================================================================================================================================================
// Burger_Side_active======================================================================================================================================================
   $(document).ready(function () {
      $(".side-menu").click(function (event) {
         $(".side-menu-container").toggleClass("active");
         $(".side-menu-list").toggleClass("show");
      });
   });
// ========================================================================================================================================================================
// Burger_active===========================================================================================================================================================
   $(document).ready(function () {
      $(".main-menu-burger").click(function (event) {
         $(".main-menu-burger,.main-menu-list").toggleClass("active");
         $("body").toggleClass("lock");
      });
   });
// ========================================================================================================================================================================
// Ограничение символов==================================================================================================================================================

// ========================================================================================================================================================================
// удаление класса при изменении размера окна====================================================================================================================================================================
/* document.addEventListener("DOMContentLoaded", function (event) {
var element = document.querySelector(".main-menu-burger, .main-menu-list");

   function resize() {
      if (window.innerWidth > 805) {
      element.classList.add("mobile");
   } else {
      element.classList.remove("active");
      }
   }
  // For performance reasons, this method should be
  // "debounced" so that it doesn't have to execute
  // on every resize event, only when you're done resizing.
   window.onresize = resize;
}); */

document.addEventListener("DOMContentLoaded", function (event) {
var element = document.querySelector(".main-menu-burger, .main-menu-list");

   function resize() {
      if (window.innerWidth > 805) {
      element.classList.remove("active");
      }
   }
   window.onresize = resize;
   });
// ========================================================================================================================================================================

// Swiper==================================================================================================================================================================
let imageslider = new Swiper('.image-slider-body ', {
   spaceBetween: 20,
   centeredSlides: true,
   // effect: 'fade',
   // parallax: true,
   observer: true,
   obseveParents: true,
   slidesPerView: 3,
   // autoHeight: true,
   speed: 800,
   // touchRatio: 0,
   // simulateTouch: false,
   loop: true,
   // preloadImages: false,
   lazy: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   keyboard: {
      enabled: true,
   },
   // pagination: {
   //    el: '.swiper-pagination',
   //    // el: '.slider-quality__pagging',
   //    clickable: true,
   //    dynamicBullets: true,
   //    clickable: true,
   //    // renderBullet: function (index, className) {
   //    //    return '<span class="' + className + '">' + (index + 1) + '</span>';
   //    // }
   // },
   navigation: {
      nextEl: '.image-carousel-button-next',
      prevEl: '.image-carousel-button-prev',
   },
   breakpoints: {
      1200: {
         slidesPerView: 3,
         spaceBetween: 15,
      },
      1149: {
         slidesPerView: 2,
         spaceBetween: 100,
         centeredSlides: true,
      },
      },
   on: {
      lazyImageReady: function () {
      ibg();
      }
   },
   // And if we need scrollbar
   // scrollbar: {
      // el: '.swiper-scrollbar',
   // },
});
// ========================================================================================================================================================================



