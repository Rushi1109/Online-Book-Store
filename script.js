searchForm = document.querySelector('.search-form');

// For search bar pop up
document.querySelector('#search-btn').addEventListener('click', () => {
    searchForm.classList.toggle('active');
});

let loginForm = document.querySelector('.login-form-container');

// For login form pop up
document.querySelector('#login-btn').addEventListener('click', ()=>{
    loginForm.classList.toggle('active');
});

// For login form pop back
document.querySelector('#close-login-btn').addEventListener('click', ()=>{
    loginForm.classList.remove('active');
});

window.onscroll = () => { 
    searchForm.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header-2').classList.add('active');
    }
    else{
        document.querySelector('.header-2').classList.remove('active');    
    }
};

window.onload = () => { 
    if(window.scrollY > 80){
        document.querySelector('.header-2').classList.add('active');
    }
    else{
        document.querySelector('.header-2').classList.remove('active');    
    }
};


// SwiperJS
var swiper = new Swiper(".books-slider",{
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".featured-slider",{
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
});