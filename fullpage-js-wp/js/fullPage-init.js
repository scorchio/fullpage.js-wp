var $j = jQuery.noConflict();

$j(document).ready(function() {
    $j.fn.fullpage({
        verticalCentered: true,
        resize : true,
        slidesColor : ['#ccc', '#fff'],
        anchors:['firstSlide', 'secondSlide'],
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        menu: false,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        autoScrolling: true,
        scrollOverflow: false,
        css3: true,
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#element1, .element2',
        normalScrollElements: '#element1, .element2',
        keyboardScrolling: true,
        touchSensitivity: 15,
        continuousVertical: false,
        animateAnchor: true,

        //events
        onLeave: function(index, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
});