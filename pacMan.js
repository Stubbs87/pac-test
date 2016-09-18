
$(document).ready(function(){
    $(document).keydown(function(key){
        switch(parseInt(key.which, 10)) {
            case 37:
                $('#pacman').animate({left:"-=20px"}, {duration:10});
                break;
            case 38:
                $('#pacman').animate({top:"-=20px"}, {duration:10});
                break;
            case 39:
                $('#pacman').animate({left: "+=20px"}, {duration:10});
                break;
            case 40:
                $('#pacman').animate({top: "+=20px"}, {duration:10});
                break;
            case 32:
                $('#pacman').animate({top: "-=50px", left:"+=30px"}, {duration:50});
                $('#pacman').animate({top: "+=50px", left: "+=30px"}, {duration:50});
                break;
            case 8:
                $('#pacman').animate({top: "-=50px", left:"-=30px"}, {duration:50});
                $('#pacman').animate({top: "+=50px", left: "-=30px"}, {duration:50});
                break;
        }
    });   
     
    
    $('#ghost').mouseenter(function(){
            $('#ghost').slideUp(2000).slideDown(2000);
     });
    
 
   
    $('.food').mouseenter(function(){
        $(this).effect('explode', 500);
        });
     
    
     
});
    


    