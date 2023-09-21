// ########### SLIDE-SHOW #########//
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//document.addEventListener("DOMContentLoaded", function () {
//    const loginTrigger = document.getElementById("login-trigger");
//    const loginDropdown = document.getElementById("login-dropdown");
//
//    loginTrigger.addEventListener("click", function (e) {
//        e.preventDefault();
//        if (loginDropdown.style.display === "block") {
//            loginDropdown.style.display = "none";
//        } else {
//            loginDropdown.style.display = "block";
//        }
//    });
//});



    // $('#menu-btn').click(function(){
    // $('nav .navigation ul').addClass('active')
    // });
    // $('#menu-close').click(function(){
    // $('nav .navigation ul').removeClass('active')
    // }); 
