
function myFunction(){

    document.getElementById('demo').innerHTML=Date();


}


$(document).ready(function(){


    $("#butt1").click(function(){
    $(".item").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
});



});


$(document).ready(function(){

   // jQuery methods go here...
                   $("#butt2").click(function(){
    $(".item").animate({
        right: '250px',
        opacity: '1',
        height: '90px',
        width: '40px',
        rotate: '100px'

    });
    });

});


