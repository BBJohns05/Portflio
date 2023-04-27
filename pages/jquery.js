$(element).addClass('shadow-pulse');
$(element).on('animationend', function(){    
    $(element).removeClass('shadow-pulse');
    // do something else...
});