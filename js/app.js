// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const selectors = {
        hamburger: '.hamburger',
        navMenu: '.nav-menu',
        enlaces: '.nav-menu a',
        fecha: '.fecha',
        serviciosLink: '#servicios-link',
        serviciosDropdown: '.dropdown-content',
        buttonNext: '#next',
        buttonBefore: '#before',
        sliders: '.testimony__body',
    };

    const hamburger = document.querySelector(selectors.hamburger);
    const navMenu = document.querySelector(selectors.navMenu);
    const enlaces = document.querySelectorAll(selectors.enlaces);
    const fecha = document.querySelector(selectors.fecha);
    const serviciosLink = document.querySelector(selectors.serviciosLink);
    const serviciosDropdown = document.querySelector(selectors.serviciosDropdown);
    const buttonNext = document.querySelector(selectors.buttonNext);
    const buttonBefore = document.querySelector(selectors.buttonBefore);
    const sliders = [...document.querySelectorAll(selectors.sliders)];

    // Mostrar/ocultar el menú de navegación en pantallas pequeñas
    hamburger?.addEventListener('click', () => navMenu?.classList.toggle('show'));

    // Delegación de eventos para cerrar el menú al hacer clic en los enlaces
    navMenu?.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') navMenu.classList.remove('show');
    });

    // Actualizar el año dinámicamente
    if (fecha) fecha.textContent = new Date().getFullYear();

    // Configurar el slider de testimonios
    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.testimony__body--show')?.dataset.id;
        if (!currentTestimony) return;

        let value = Number(currentTestimony) + add;
        sliders[Number(currentTestimony) - 1]?.classList.remove('testimony__body--show');
        if (value > sliders.length) value = 1;
        if (value < 1) value = sliders.length;

        sliders[value - 1]?.classList.add('testimony__body--show');
    };

    buttonNext?.addEventListener('click', () => changePosition(1));
    buttonBefore?.addEventListener('click', () => changePosition(-1));

    // Mostrar/ocultar el submenú de servicios
    serviciosLink?.addEventListener('click', (event) => {
        event.preventDefault();
        serviciosDropdown?.classList.toggle('active');
    });
});

// Función para desplazamiento suave
function cambioSeccion(seccion) {
    seccion.scrollIntoView({
        behavior: 'smooth',
    });
}
