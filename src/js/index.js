import '../css/reset.css'
import '../css/common.css'
import '../css/app.css'
import $ from 'jquery'

$(function(){
    var cards = document.querySelectorAll('.mycode')
    document.addEventListener('scroll', function () {
        checkScroll(cards)
    })
    checkScroll(cards)
})



function checkScroll(cards){
    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        if (document.documentElement.scrollTop > 0) {
            element.classList.add('haha')
            element.classList.remove('hoho')
        } 
    }
}