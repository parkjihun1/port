$(document).ready(function(){
    // 햄버거 효과
    $('.icon .hamberger').click(function(e){
        e.preventDefault();
        $('.icon .hamberger').click(()=>{
            $('.tab-header').stop().fadeIn();
        })
    })

    $('.menu .depth1 li').mouseenter(()=>{
        $('.menu').addClass('hoverbg')
        $('.headerinner::before').addClass('headerline')
        $('.icon p a').addClass('icondark')
        $('.depth1 li a').addClass('depth1black')
        $('.btn_lang').addClass('btnblack')
        $('.icon .search-btn').addClass('searchdark')
        $('.icon .hamberger .line').addClass('hambergerdark')
        $('.depth2 li').show()
    })

    $('.menu .depth1 li').mouseleave(()=>{
        $('.menu').removeClass('hoverbg')
        $('.icon p a').removeClass('icondark')
        $('.depth1 li a').removeClass('depth1black')
        $('.btn_lang').removeClass('btnblack')
        $('.icon .search-btn').removeClass('searchdark')
        $('.icon .hamberger .line').removeClass('hambergerdark')
        $('.depth2 li').hide()
    })

    const header = $('.headerinner'),
    page = $('.page-start'),    // 색이 변할 부분
    pageOffsetTop = page.offset().top; 


})
// 탭 닫기
$(document).ready(function(){
    $('.tab-close').click(()=>{
        $('.tab-header').fadeOut();
    })
})
// 검색 열기
$(document).ready(function(){
    $('.search-btn').click(()=>{
        $('.search-wrap').fadeIn();
        $('.icon p a').hide();
        $('.logo').hide();
    })
})
// 검색 닫기
$(document).ready(function(){
    $('.search-inner .close').click(()=>{
        $('.search-wrap').fadeOut();
        $('.icon p a').show();
        $('.logo').show();
    })
})
// 언어변경 열기
$(document).ready(function(){
    $('.lang_area').mouseenter(()=>{
        $('.lang_open').fadeIn();
    })
})
// 언어 변경 닫기
$(document).ready(function(){
    $('.lang_area').mouseleave(()=>{
        $('.lang_open').fadeOut();
    })
})

// 스크롤 헤더 숨기기
// $(window).scroll(function(){
//     if($(this).scrollTop() > 200){
//         $headerinner.addClass('sticky');
//     }else {
//         $headerinner.removeClass('sticky');
//     }
// });
