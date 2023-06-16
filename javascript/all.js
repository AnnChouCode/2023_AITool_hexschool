// jQuery ---------------------------

$(document).ready(function () {

    // PRODUCT SECTION 新到舊按鈕呼叫菜單
    $('.select-old-new .select-btn').click(function (e) {
        $('.dropdown-menu').toggleClass('show');
    });

    // PRODUCT SECTION 切換按鈕文字
    $('.new-to-old').click(function (e) {
        e.preventDefault();
        $('.dropdown-menu').toggleClass('show');
        $('.dropdown-btnText').text('由新到舊');
    });

    $('.old-to-new').click(function (e) {
        e.preventDefault();
        $('.dropdown-menu').toggleClass('show');
        $('.dropdown-btnText').text('由舊到新');
    });

    // FOOTER SECTION 回到最上
    $('.scrollToTop').click(function (e) {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    });
});


// ENTERPRISE SECTION swiper --------------------
const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1, //手機版每頁顯示卡片數量

    // RWD Responsive breakpoints
    breakpoints: {
      // when window width is >= 768px
      767.98: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      // when window width is >= 1200px
      1199.98: {
        slidesPerView: 3,
        spaceBetween: 24
      }
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets', //點擊換頁前置設定
        clickable:'true' //可點擊換頁
      },
  })