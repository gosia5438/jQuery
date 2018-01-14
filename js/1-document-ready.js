'use strict';
//console.log( $ ); w konsoli sprawdzamy czy podpiety jQuerry

/*$(document).ready(function(){  //powoduje ze nasz kod sie wywola
    alert('Czolem, wczytalem DOM');    
});*/

$(function(){
//    $('#paragraf').css('color', 'red'); zmiana pojedynczej wlasciwosci
    $('#paragraf').css({color:'red',
                        backgroundColor:'#000',
                        textDecoration: 'underline'});    
});