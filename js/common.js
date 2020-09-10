(function($){

    
    $('.depth1 > li').hover(
        function(){
            $(this).find('.depth2')
            .stop().slideDown(700)
        },
        function(){
            $(this).find('.depth2')
            .stop().slideUp(500)
        }
    )


    $('#newBox').load('main.html')

    $('.topmenu > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#newContainer').remove()
        $('#newBox').load(url)
    })


    $('.h1Nav > h1').on('click', function(e){
        e.preventDefault()
        $(this).load('index.html')
    })


})(jQuery)