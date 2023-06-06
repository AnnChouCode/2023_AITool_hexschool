$(document).ready(function () {

    // PRODUCT SECTION 新到舊按鈕呼叫菜單
    $('.select_old_new .select_btn').click(function (e) {
        $('.dropdown_menu').toggleClass('show');
    });

    // PRODUCT SECTION 切換按鈕文字
    $('.new_to_old').click(function (e) {
        e.preventDefault();
        $('.dropdown_menu').toggleClass('show');
        $('.dropdown_btnText').text('由新到舊');
    });

    $('.old_to_new').click(function (e) {
        e.preventDefault();
        $('.dropdown_menu').toggleClass('show');
        $('.dropdown_btnText').text('由舊到新');
    });

    // FOOTER SECTION 回到最上
    $('.scrollToTop').click(function (e) { $('html,body').animate({scrollTop:0},'slow');
});
});