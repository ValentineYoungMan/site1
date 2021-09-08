function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('.ibg-img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('.ibg-img').getAttribute('src') + ')';
        }
    }
}

ibg();



$(document).ready(function () {
    $('.header-top_burger').click(function (event) {
        $('.header-top_burger,.header-top_nav').toggleClass('active');
        $('.header_overlay').toggleClass('header_overlay-active');
        $('body').toggleClass('lock');
    });

});

new Swiper('.block2-slider-container', {
    navigation: {
        nextEl: '.block2-arrows_arrowRight',
        prevEl: '.block2-arrows_arrowLeft'
    },
});

new Swiper('.block5-slider', {
    navigation: {
        nextEl: '.block5-arrows_arrowRight',
        prevEl: '.block5-arrows_arrowLeft'
    },

    slidesPreView: 1,
    centerSlides: true,
    loop: true,
    loopedSlides: 3,
})
/*----------------------------*/

let block4CenterParametres1 = document.querySelector('.block4-center_parametres1');
let block4CenterParametres1Parameter = document.querySelector('.block4-center_parametres1_parameter');
let block4CenterParametres1ParameterProperty = document.querySelector('.block4-center_parametres1_parameter_property');
let block4CenterParametres1ParameterValue = document.querySelector('.block4-center_parametres1_parameter_value');

let block4CenterParametres2 = document.querySelector('.block4-center_parametres2');
let block4CenterParametres2Parameter = document.querySelector('.block4-center_parametres2_parameter');
let block4CenterParametres2ParameterProperty = document.querySelector('.block4-center_parametres2_parameter_property');
let block4CenterParametres2ParameterValue = document.querySelector('.block4-center_parametres2_parameter_value');

console.log("block4CenterParametres1-margintop=" + getComputedStyle(block4CenterParametres1).marginTop);
console.log("block4CenterParametres2-margintop=" + getComputedStyle(block4CenterParametres2).marginTop);
console.log("block4CenterParametres1Parameter-marginBottom=" + getComputedStyle(block4CenterParametres1Parameter).marginBottom);
console.log("block4CenterParametres2Parameter-marginBottom=" + getComputedStyle(block4CenterParametres2Parameter).marginBottom);
console.log("block4CenterParametres1ParameterProperty-marginBottom=" + getComputedStyle(block4CenterParametres1ParameterProperty).marginBottom);
console.log("block4CenterParametres2ParameterProperty-marginBottom=" + getComputedStyle(block4CenterParametres2ParameterProperty).marginBottom);
console.log("block4CenterParametres1ParameterProperty-fontsize=" + getComputedStyle(block4CenterParametres1ParameterProperty).fontSize);
console.log("block4CenterParametres2ParameterProperty-fontsize=" + getComputedStyle(block4CenterParametres2ParameterProperty).fontSize);
console.log("block4CenterParametres1ParameterValue-fontsize=" + getComputedStyle(block4CenterParametres1ParameterValue).fontSize);
console.log("block4CenterParametres2ParameterValue-fontsize=" + getComputedStyle(block4CenterParametres2ParameterValue).fontSize);