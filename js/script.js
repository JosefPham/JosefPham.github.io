$(document).ready(function(){
   $(window).scroll(function(){
       // scroll-up button show/hide script
       if(this.scrollY > 500){
           $('.scroll-up-btn').addClass("show");
       }else{
           $('.scroll-up-btn').removeClass("show");
       }
   });

   // slide-up script
   $('.scroll-up-btn').click(function(){
       $('html').animate({scrollTop: 0});
       // removing smooth scroll on slide-up button click
       $('html').css("scrollBehavior", "auto");
   });

   // toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

   // flickity library for project slider
   $('.container-slides').flickity({
      cellAlign: 'left',
      wrapAround: true
   });


});
