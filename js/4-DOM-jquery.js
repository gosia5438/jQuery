'use strict';
// metoda find nie jest do petli lub do iteracji.. 
$(function(){
    var body = $('body');
    var pars = body.find('p'); //szuka wszystkich p
    var par = body.find('p').eq(1); //szuka kokretnego paragrafu o indeksie 1
    
    console.log(par);
    
    $('p').each(function(index){
        console.log($(this)); //zeby wyswietlic zawartosc paragrafu w petli
        $(this).addClass('paragraf-' + index);
    });
    
//    $("input[type='text']")
    
});