$(document).ready(function(){
    // banner-list 닫기
    $('.banner-list .close a').click(()=>{
        $('.banner-list').hide();
    })

    // banner-list 열기
    $('.btn-contorl .btn-list').click(()=>{
        $('.banner-list').slideDown();
    })
    $('.site-item li').click(()=>{
        $('body').css({
            'transform': 'scale(1.1) translateX(-50%)',
            'position' : 'relative',
            'left' : '50%',
            
        })
    })

    // 섹션7 열기
    $('.box .sitelink:nth-child(1)').click(()=>{
        $('.box .sitelink:nth-child(1) .layer').fadeIn();
    })
    $('.box .sitelink:nth-child(2)').click(()=>{
        $('.box .sitelink:nth-child(2) .layer').fadeIn();
    })
    $('.box .sitelink:nth-child(3)').click(()=>{
        $('.box .sitelink:nth-child(3) .layer').fadeIn();
    })
    $('.box .sitelink:nth-child(4)').click(()=>{
        $('.box .sitelink:nth-child(4) .layer').fadeIn();
    })
    // 섹션7 닫기
    $('.layer .close-link').click(()=>{
        $('.box .sitelink:nth-child(1) .layer').fadeOut();
    })
    $('.layer .close-link').click(()=>{
        $('.box .sitelink:nth-child(2) .layer').fadeOut();
    })
    $('.layer .close-link').click(()=>{
        $('.box .sitelink:nth-child(3) .layer').fadeOut();
    })
    $('.layer .close-link').click(()=>{
        $('.box .sitelink:nth-child(4) .layer').fadeOut();
    })


    // 섹션6 버튼
    $('.tab-two .tab-btn:nth-child(1)').click(()=>{
        $('.tab-two .tab-btn::before:nth-child(1)').show();
    })
    $('.tab-two:nth-child(1)').click(()=>{
        $('.tab-two #a2').stop().toggle();
    })
    $('.tab-two:nth-child(2)').click(()=>{
        $('.tab-two #b2').toggle();
    })
    $('.tab-two:nth-child(3)').click(()=>{
        $('.tab-two #c2').show();
    })
    $('.tab-two:nth-child(4)').click(()=>{
        $('.tab-two #d2').show();
    })
})