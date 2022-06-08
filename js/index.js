/* Efeito 3D - Vanilla */
    VanillaTilt.init(document.querySelectorAll('.mini-banners-3d'),  {
        max: 30,
        speed: 400
    });

/* Efeito Scroll - Javascript */
window.addEventListener('scroll', function(){
    var nav = document.querySelector('#bottom-navbar-container');
    nav.classList.toggle("sticky", window.scrollY > 0);
})    



