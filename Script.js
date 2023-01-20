const header = Document.querySelector("header");

Window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", Window.scrollY > 0); 
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.ClassList.toggle('bx-x'); 
    navlist.ClassList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};
const sr= scrollreveal({
    distance:'45px',
    duration:2700,
    reset:true
})
sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.about,.education,.my technical skills,.certificates,..cta,contact',{delay:200, origin:'bottom'})