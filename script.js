// script.js - Funcionalidades interactivas para la página
console.log('JavaScript cargando correctamente');

// Función para esperar a que elementos del DOM estén listos
function waitForElement(selector, callback, maxWait = 5000) {
    const startTime = Date.now();
    
    function checkElement() {
        const element = document.querySelector(selector);
        if (element) {
            callback(element);
        } else if (Date.now() - startTime < maxWait) {
            setTimeout(checkElement, 100);
        }
    }
    checkElement();
}

// Inicializar todas las funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando funcionalidades JavaScript...');
    initScrollEffect();
    createInteractiveButton();
    initFormValidation();
});

// Efecto de cambio de color en header al hacer scroll
function initScrollEffect() {
    waitForElement('header', function(header) {
        console.log('Aplicando efecto scroll al header');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.backgroundColor = '#2c3e50';
                header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                header.style.transition = 'all 0.4s ease';
            } else {
                header.style.backgroundColor = '';
                header.style.boxShadow = '';
            }
        });
    });
}