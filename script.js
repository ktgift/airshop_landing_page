let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

//ทำให้เมนูเด้งออกมาเมื่อคลิป
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.revome('fa-times');
    navbar.classList.revome('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
//เมื่อคลิกที่ภาพเล็กจะทำให้เปลี่ยนภาพเป็นภาพเล็กที่คลิก
document.querySelectorAll('.residential-image-1').forEach(image_1 => {
    image_1.addEventListener('click', () => {
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.residential-image-2').forEach(image_2 => {
    image_2.addEventListener('click', () => {
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.residential-image-3').forEach(image_3 => {
    image_3.addEventListener('click', () => {
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});