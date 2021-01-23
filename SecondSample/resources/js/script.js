$(document).ready(function() {
    $(".fullScreenSlider").owlCarousel ({
        responsive: {
            0: {
                items : 1
            },
            768: {
                items : 2
            },
            992: {
                items : 3
            },
            1200: {
                items : 4
            }
        },
      responsiveRefreshRate: 100  
    });
    
    
});