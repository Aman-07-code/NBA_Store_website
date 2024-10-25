let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

// const swiper = new Swiper(".swiper", {
//   loop: true,
//   slidesPerView: "auto",
//   spaceBetween: 20,
// });