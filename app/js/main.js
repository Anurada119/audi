console.log('wtf');

$(document).ready(function(){
    $('.regiter-please').on('click', function(e){
        e.preventDefault();
        $(this).hide();
        $('.login-screen').toggleClass('active');
        $('.register-screen').toggleClass('active');
    });
});