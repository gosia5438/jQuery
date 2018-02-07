'use strict';
$(function(){
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
        
     //USTAWIENIE MARGINESU LEWEGO KTORY SPYCHA POZOSTALE ELEMENTY   
    slideShow.css({'width': slideCount * 100 + '%'});
    slideShow.find('.single-slide').each(function(index){
    $(this).css({
        'width' : slideWidth + '%',
        'margin-left' : index * slideWidth + '%'});
    });

    
    //NAWIGACJA
    function slide(newSlideIndex){
        //jesli bedzie wieksza ilosc niz nasz slajdow to zatrzymujemy dzialanie
        if (newSlideIndex < 0 || newSlideIndex > (slideCount-1)){
            return;
        }
        var slideCaption = $('p.slide-caption');
        var marginLeft = newSlideIndex * -100 + '%';
        slideCaption.hide('3000');
        
        slideShow.animate({
            'margin-left':marginLeft
        }, 800);
        
        
    }
    
        //Funkcja click
    
    $('.prev-slider').click({
        $(this).function(){
        
    }
    });
    $('.next-slider').click();
    
     
    
    
});