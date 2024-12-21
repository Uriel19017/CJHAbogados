// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const hamburguesa = document.querySelector('.hamburguesa');
    const navegacion = document.querySelector('.navegacion');
    const enlaces = document.querySelectorAll('.navegacion a');
    const fecha = document.querySelector('.fecha');
    const serviciosLink = document.getElementById('servicios-link');
    const serviciosSubmenu = document.getElementById('servicios-submenu');
    const serviciosContainer = document.querySelector('.servicios-container');
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    const sliders = [...document.querySelectorAll('.testimony__body')];

    // Mostrar el menú al hacer clic en la hamburguesa
    if (hamburguesa && navegacion) {
        hamburguesa.addEventListener('click', () => {
            navegacion.classList.toggle('ocultar');
        });
    }

    // Cerrar el menú al hacer clic en los enlaces
    if (enlaces.length > 0) {
        enlaces.forEach(enlace => {
            enlace.addEventListener('click', (e) => {
                const href = e.target.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const seccion = document.querySelector(href);
                    if (seccion) {
                        cambioSeccion(seccion);
                    }
                }
                if (e.target.tagName === 'A') {
                    navegacion.classList.add('ocultar');
                }
            });
        });
    }

    // Actualizar el año en el elemento .fecha
    if (fecha) {
        fechaActual();
    }

    function fechaActual() {
        let fechaHoy = new Date().getFullYear();
        fecha.textContent = fechaHoy;
    }

    // Configurar el slider de testimonios
    if (buttonNext && buttonBefore && sliders.length > 0) {
        buttonNext.addEventListener('click', () => {
            changePosition(1);
        });

        buttonBefore.addEventListener('click', () => {
            changePosition(-1);
        });
    }

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        let value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony) - 1].classList.remove('testimony__body--show');
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('testimony__body--show');
    }

    // Mostrar/ocultar el submenú de servicios
    if (serviciosLink && serviciosContainer) {
        serviciosLink.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace redirija
            serviciosContainer.classList.toggle('active'); // Alterna la clase activa para mostrar/ocultar el submenú
        });
    }

    // Mostrar/ocultar el menú de navegación en pantallas pequeñas
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
});

// Función para cambiar de sección con desplazamiento suave
function cambioSeccion(seccion) {
    seccion.scrollIntoView({
        behavior: 'smooth'
    });
}
