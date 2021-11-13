$(document).ready(function(){

   
    $(".prodTime-left-slider-wrapper").slick({ 
        // navigation arrows
        prevArrow: $('#previousButton'),
        nextArrow: $('#nextButton'),
        asNavFor: ".prodTime-right-slider-wrapper", //let this slider control/sync with the other slider (#productionTimeline-chart-wrapper)
    
        // fade transition
        speed: 500,
        fade: true,
        cssEase: 'linear',

        autoplay: false,
        draggable: false
    });

    
    
    // production timeline gantt chart
    $(".prodTime-right-slider-wrapper").slick({
        // remove the arrows
        arrows:false,

        // fade transition
        speed: 500,
        fade: true,
        cssEase: 'linear',

        autoplay: false,
        draggable: false
    })


   

    console.log("productionChart.js loaded");

});

// SLICK SLIDER - SOURCE AND TUTORIAL 
// https://kenwheeler.github.io/slick/
//https://www.youtube.com/watch?v=S05EWIHAVcc&ab_channel=AwaMelvine
