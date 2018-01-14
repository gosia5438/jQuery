'use strict';
$(function(){
    
    // DODANIE TEKSTU DO H1 I POKOLOROWANIE
    var textHeadline1 = $('#first');
    textHeadline1.append(' Hello')
                 .css({color:'yellow',
                      backgroundColor:'red'});
        
    //ZMIANA TEKSTU W PARAGRAFIE NA INNY    
    var textParagrafu = $('#paragraf').text('Nowy paragraf o id paragraf');
    console.log($('#paragraf').text());
        
    // zmiana tresci i czesc jest pogrubiona i dodanie kolejnego paragrafu za  
    var nowyParagrafPogrubiony = $('p.paragrafnext');
    nowyParagrafPogrubiony.html('Nowa <b>tresc</b>')
                          .after('Tresc za elementem')
                          .append('<br>dodajemy tresc do elementu') 
                          .css({backgroundColor: 'black',
                                color:'white'});
    $('h3').remove();
    $('h2#second').empty();
    $('h2#second').html("<span style='color:red;'>Kolorowy span h2</span>");
    $('h1').css({fontSize:'50px'});
    
    var imie = $('input#imie').val('Gosia');
    console.log(imie.val());   
    
    /*var title = $('h1').attr('title'); //pobiera atrybut
    $('h1').attr('title', 'Naglowek h1');
    console.log(title);*/
    
    $('p.paragraf').addClass('blue, bg'); //dodanie kilku klas
    $('p.paragraf').removeClass('blue, bg');  //usuwanie kilku klas  
    
    
});