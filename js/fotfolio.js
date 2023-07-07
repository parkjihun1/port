$(function(){
    const menu = $('header-inner nav ul li'),
            content = $('section > div')
        menu.click(function(e){
            e.preventDefault();
            $(this).addClass('on').siblings().removeClass('on')

            let idx = $(this).index();
            let section = contents.eq(idx)
            let sectionDistance = section.offset().top-(141)
            $('html, body').animate({
                scrollTop : sectionDistance
            })
        })
        
      //   $(window).scroll(function(){
      //     contents.each(function(){
      //         if($(this).offset().top <= $(window).scrollTop(+141)){
      //             let idx = $(this).index()
      //             menu.removeClass('on')
      //             menu.eq(idx).addClass('on')
      //         }
      //     })
      // })
})

// 슬라이드
$(function(){
    new Swiper('.main_news .swiper-container',
    {       
        slidesPerView: 'auto',
        
        centeredSlides: true,
        breakpoints:  {
          1200: {slidesPerView: 5},
          650: {slidesPerView: 3},
          400: {slidesPerView: 1},
          350: {slidesPerView: 1}
        },
        autoplay:true,
        loop:true,
          scrollbar : {
               el : '.swiper-scrollbar',
               draggable: true,
                dragSize:100,
            },
            // mousewheel: {
            //     enabled: true,
            //     sensitivity: 5.5,
            //     // sensitivity: 10,
            // },
    });
});

// 웹디자인 슬라이드
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

// 팝업

$('#about').hide(0);
$('.pop-inner').hide(0);

$('#about').click(function(){
  $('.pop-inner').show(0);
  $('#about').fadeIn(300);
});
$('.web-top span:nth-child(1)').click(function() {
  $('.pop-inner').hide(0);
  $('.#about').hide(0);
  $('.header').show(0);
});


// 효과
var square = document.getElementsByClassName('square');

for(var i = 0; i<square.length; i++){
  square[i].addEventListener('mouseenter', function(){
    this.classList.add("rubberBand");
    this.addEventListener("animationend", function(){
      this.classList.remove("rubberBand");
    }, false);
  })
}

// go-top
$(document).ready(function(){
  // 윈도우에 스크롤이 300px이상 생기면 gotop 나타나도록
  $(window).scroll(function(){
      if($(this).scrollTop() >=300){
          // gotop 버튼 보여줘
          $('.go_top').fadeIn();
      }else {
          $('.go_top').fadeOut();
          // gotop 버튼 숨어줘
      }
  })

  //gotop 버튼을 클릭하면 html, body 스크롤양이 0으로 가도록
  $('.go_top').click(function(e){
      e.preventDefault();
      $('html, body').stop().animate({
          scrollTop : 0
      }, 500)
        
      
  })
})