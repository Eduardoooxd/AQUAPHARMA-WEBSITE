 // smooth scrool 

$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;
});

 $('.navbar-menu a').on('click', function (e) {
   if (this.hash !== '') {
     e.preventDefault();

     const hash = this.hash;

     $('html, body')
       .animate({
         scrollTop: $(hash).offset().top
       },600);
   }
});

$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  // podia melhorar o codigo 

  $('.navbar-menu').click(function(){
    $(".navbar-menu").toggleClass("active");
    $('.menu-toggler').toggleClass("active");
  });
 
  let slidePosition = 0;
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  document.getElementById('carousel-button-next').addEventListener('click',nextSlide);

  function nextSlide(){
    if(slidePosition=== totalSlides-1){
      slidePosition = 0 ;
    }else{
      slidePosition++;
    }
    updateSlidePosition();
  }

  document.getElementById('carousel-button-previous').addEventListener('click',function(){
    
    if(slidePosition===0){
      slidePosition = totalSlides-1;
    }else{
      slidePosition--;
    }
    updateSlidePosition()
  });

  let myTimer = setInterval(nextSlide,5000);

  function updateSlidePosition(){
    for(let slide of slides){
      slide.classList.remove('carousel-item-visible');
      slide.classList.add('carousel-item-hidden');
    }
    slides[slidePosition].classList.add('carousel-item-visible');
    clearInterval(myTimer);
    myTimer = setInterval(nextSlide,5000);
  }

  

  

});







