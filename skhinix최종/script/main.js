// =========slide
$(function(){
$('.slide:gt(0)').hide()
setInterval(function(){
    $('.slide:first').fadeOut(3000).next().fadeIn(3000)
    $('.slide:first').appendTo('.slide-wrap')
},5000)
})
