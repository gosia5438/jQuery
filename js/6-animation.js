'use strict';
$(function () {
        $('p').click(function(){
    //       $(this).fadeOut(1000).fadeIn(1000);
           $('p').fadeOut(1000, /*function(){alert('Hide skonczony')}*/).fadeIn(1000); // dla wszystkich p
        
        });
        $('h1').hide(1000).show(1000);
        
        $('h2').slideUp(3000).slideDown(2000);
    });

    function animacja() {
        console.log('No i dotarlismy do konca, tu wywoluje sie funkcja callback');
        $('h3').animate({
            'font-size': '5px',
            'margin-left': '0'
        }, 3000);
    }

    $('h3').animate({
        'font-size': '40px',
        'margin-left': '100px'
    }, 4000, animacja);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
