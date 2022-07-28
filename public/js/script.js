
// Javascript for Navbar
window.addEventListener("scroll", () => {
    var menu = document.querySelector(".menu");
    var packageSvg = document.querySelector(".menu_left");
    if (window.scrollY > 100) {
        menu.style.animation = "animateMenu 1s ease-in-out";
        menu.style.top = "0px";
    } else {
        menu.style.animation = "";
        menu.style.top = "16%";

    }
    menu.classList.toggle('menuhieght', window.scrollY > 100);
    packageSvg.classList.toggle('menu_leftHieght', window.scrollY > 100);
})

// var slides = document.querySelectorAll('.slide');
// var btns = document.querySelectorAll('.btn');
// let currentSlide = 1;

// // Javascript for image slider manual navigation
// var manualNav = function(manual){
//   slides.forEach((slide) => {
//     slide.classList.remove('active');

//     btns.forEach((btn) => {
//       btn.classList.remove('active');
//     });
//   });

//   slides[manual].classList.add('active');
//   btns[manual].classList.add('active');
// }

// btns.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     manualNav(i);
//     currentSlide = i;
//   });
// });



// // Javascript for image slider autoplay navigation
// var repeat = function(activeClass){
//   let active = document.getElementsByClassName('active');
//   let i = 1;

//   var repeater = () => {
//     setTimeout(function(){
//       [...active].forEach((activeSlide) => {
//         activeSlide.classList.remove('active');
//       });

//     slides[i].classList.add('active');
//     btns[i].classList.add('active');
//     i++;

//     if(slides.length == i){
//       i = 0;
//     }
//     if(i >= slides.length){
//       return;
//     }
//     repeater();
//   }, 3000);
//   }
//   repeater();
// }
// repeat();
