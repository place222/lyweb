window.onload = function () {
    var cards = document.querySelectorAll('.mycode')
    document.addEventListener('scroll', function () {
        for (let index = 0; index < cards.length; index++) {
            const element = cards[index];
            if (document.documentElement.scrollTop > 0) {
                //判断存在不存在
                element.classList.add('haha')
            }else{
                //判断存在不存在
                element.classList.add('hoho')
            }
        }
    })
}