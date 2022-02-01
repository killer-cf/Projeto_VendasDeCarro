$(function() {

    var currentValue = 0;
    var isDrag = false;

    $('.pointer-barra').mousedown(function() {
        isDrag = true;
        console.log('presionado')
    })

    $(document).mouseup(function() {
        isDrag = false;
    })
    $('.barra-preco').mousemove(function(e) {
        if (isDrag == true) {
            var elBase = $('this');
            var mouseX = e.pageX - elBase.offset().left;
            if (mouseX < 0)
                mouseX = 0;
            if (mouseX > elBase.width())
                mouseX = elBase.width();

            var percent = (mouseX / elBase.width()) * 100;
        }
    })






    $('nav a').click(function() {
        var href = $('this').attr('href');
        var offSetTop = $('href').offSet().top;

        $("html, body").animate({
            'scrolltop': offSetTop
        })

        return false
    })


    $('.menu-mobile').click(function() {
        $(this).find('.ssd').slideToggle();
    })


    var amtDepoimento = $('.single-depoimento p').length;
    var curIndex = 0;

    navegarSlides();
    iniciarDepoimentos();

    function iniciarDepoimentos() {
        $('.single-depoimento p').hide();
        $('.single-depoimento p').eq(0).show();
    }

    function navegarSlides() {
        $('[next]').click(function() {
            curIndex++;
            if (curIndex >= amtDepoimento)
                curIndex = 0;
            $('.single-depoimento p').hide();
            $('.single-depoimento p').eq(curIndex).show();
        })

        $('[prev]').click(function() {
            curIndex--;
            if (curIndex < 0)
                curIndex = amtDepoimento - 1;
            $('.single-depoimento p').hide();
            $('.single-depoimento p').eq(curIndex).show();
        })
    }




})