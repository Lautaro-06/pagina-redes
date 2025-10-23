// script.js - Funcionalidades JavaScript
console.log('✅ JavaScript cargado');

function waitForElement(selector, callback) {
    const checkElement = () => {
        const element = document.querySelector(selector);
        if (element) callback(element);
        else setTimeout(checkElement, 100);
    };
    checkElement();
}

document.addEventListener('DOMContentLoaded', function() {
    initScrollEffect();
    createInteractiveButton();
    initFormValidation();
});

function initScrollEffect() {
    waitForElement('header', function(header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.backgroundColor = '#2c3e50';
            } else {
                header.style.backgroundColor = '';
            }
        });
    });
}

function createInteractiveButton() {
    const button = document.createElement('button');
    button.textContent = '¡Haz clic!';
    
    button.addEventListener('click', function() {
        alert('¡Botón funcionando!');
    });
    
    waitForElement('main', (main) => main.appendChild(button));
}

function initFormValidation() {
    waitForElement('main', function(main) {
        const input = document.createElement('input');
        input.placeholder = 'Ingresa tu email';
        
        const button = document.createElement('button');
        button.textContent = 'Validar';
        
        button.addEventListener('click', function() {
            if (input.value.includes('@')) {
                alert('Email válido');
            } else {
                alert('Email inválido');
            }
        });
        
        main.appendChild(input);
        main.appendChild(button);
    });
}