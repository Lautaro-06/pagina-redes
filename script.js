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
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.backgroundColor = '#2c3e50';
                header.style.transition = 'all 0.4s ease';
            } else {
                header.style.backgroundColor = '';
            }
        });
    });
}

function createInteractiveButton() {
    const button = document.createElement('button');
    button.textContent = '¡Haz clic para magia!';
    button.style.cssText = `
        display: block;
        margin: 20px auto;
        padding: 12px 24px;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    `;
    
    button.addEventListener('click', function() {
        this.textContent = '¡Magia realizada! 🎉';
        this.style.background = '#2196F3';
    });
    
    waitForElement('main', (main) => main.appendChild(button));
}