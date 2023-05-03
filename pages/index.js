// setInterval(() => {
//     // $(".lantern").removeClass(".lanternShadowTwo")
//     // $('.lantern').slideDown(400, function(){
//     //     $(this.addClass(".lanternShadowTwo"))
//     // },400)

//     // $(".lantern").delay(500).addClass("lanternShadowTwo").delay(500).removeClass("lanternShadowTwo");

//     $(".lantern").css("box-shadow", "0px 0px 50px 5px rgb(228, 137, 137)").delay(1000).css("box-shadow", "0px 0px 60px 10px rgb(223, 171, 93);").delay(1000).css(".lantern").css("box-shadow", "0px 0px 50px 5px rgb(228, 137, 137)");

//     //     $(".lantern").removeClass(".lanternShadowTwo")
//     // $('.lantern').slideUp(400, function(){
//     //     $(this.addClass(".lanternShadowTwo"))
//     // })
    
//    console.log('hello')

// },2000)




//carousel

'use strict'

$(function(){
    //setting for slider
    //we need to know the width of the slide so that we dknow how far it should slide down

    var width=720;
    //takes 2 seconds to transition between slides
    var animationSpeed=200;
    //jQuery will quite up actions and events so make sure thay you add your animationspeed to the pause or will keep running with no pause
    var pause = animationSpeed + 500;
    var currentSlide = 1;

    //cache DOM elements
    var $slideContainer = $('.slides')
    var $slides=$('.slide')

    var interval;

    //create a function that will start the slider 

    //Create a function that will remove the slider
    function pauseSlider(){
           clearInterval(interval)
            let hover = pause + animationSpeed;
            sliding(animationSpeed, hover);
    } 

    $('.slider').click(function(){
        if(click== 2){
            $slideContainer.animate({'margin-left': '-='+width}, 
            animationSpeed == 4000, 
            function(){
                currentSlide++
                if(currentSlide === $slides.length){
                    currentSlide = 1;
                    $slideContainer.amimate('margin-left', 0 )
                }
            })
        }
    });


    //start Slider

    startSlider();

    //if mouse hovers over the slide then the animations stops and then it leaves it starts again
    $slideContainer
    .on('mouseenter', pauseSlider)
    .on('mouseleave', startSlider)
})

//spin the wheeels


$('.wheel').on('click', function(){
    $('.wheel').stop().animate({  borderSpacing: -360 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration: 3000
},'linear'); 
})
