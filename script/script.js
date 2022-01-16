$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: true, auto: true,
    });
});

$(document).ready(function(){
    $('.bxslider_team').bxSlider({
        pager: true, controls: false,
    });
});

$(document).ready(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 200,
        itemMargin:25,
        touch: true
    });
});

$(document).ready(function(){
    $('.accordion').accordion({
        defaultOpen:''
    });
});
