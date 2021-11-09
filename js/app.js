/* Funcionalidad  para el menu hamburguesa */
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

/* Funcionalidad que oculta el menu una ves se hace la acción de scroll */
window.onscroll = () => {
    navbar.classList.remove('active');
}

/* Funcionalidad para  el modal que reproduce los videos */
let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video').forEach(vid => {
    vid.onclick = () => {
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }
});

/* Funcionalidad para cerrar el video */
document.querySelector('#close-vid').onclick = () => {
    mainVid.classList.remove('active');
}




