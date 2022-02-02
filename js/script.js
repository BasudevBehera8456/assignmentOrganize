// Onscroll
window.addEventListener("scroll",()=>{
    let navBar = document.querySelector(".navItems");
    navBar.classList.toggle("sticky",window.scrollY>0);
});

// Owl carousel 
$('#mainSlider').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    navText:false,
    autoplay:true,
    margin:100,
    autoplayHoverPause:true,

    responsive:{
        0:{
            items:1,
            dots:false,
        },
        768:{
            items:2,
            dots:false
        },
        1200:{
            items:3
        }
    }
})


// Navmenu side responsive
const hamburger = document.querySelector("#bar");
const Navigation = document.querySelector(".navigation");
const body = document.querySelector("body")
hamburger.addEventListener("click",()=>{
    Navigation.classList.toggle("active");
    hamburger.classList.toggle('toggle');
//    body.classList.toggle("link");
})

