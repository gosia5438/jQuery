'use strict';
$(function(){  //document ready
    $('p').click(function(){
        $('p').css({color:'black',
                   backgroundColor:'white'});
        $(this).css({color:'red',
                    backgroundColor:'black'});   // this- tylko dla tego na kotrego kliknales a jak chce na wszystkie to zamiast (this) bedzie ('p')
    })
    
    
    
    $('h1').on({  //dla wiecej niz 1 zdarzenie
        'click': function(){
            $(this).css({color:'red'});            
        },
        'mouseleave': function(){
            $(this).css({color:'black'});
        }
    });
    
    
});