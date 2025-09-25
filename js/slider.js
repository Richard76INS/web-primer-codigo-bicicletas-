(function(){
    // 1. SELECTORES CORRECTOS - usar IDs que existen
    const sliders = [...document.querySelectorAll('.testimonio_body')];
    const buttonNext = document.querySelector('#next'); // ← ID correcto
    const buttonBefore = document.querySelector('#before'); // ← ID correcto
    let value;

    console.log( sliders.length);
    console.log( buttonNext);
    console.log( buttonBefore);

    // 2. VALIDAR que los elementos existen
    if (!buttonNext || !buttonBefore) {
        console.error();
        return;
    }

    if (sliders.length === 0) {
        console.error();
        return;
    }

    // 3. INICIALIZAR si no hay testimonio activo
    if (!document.querySelector('.testimonio_body--show')) {
        sliders[0].classList.add('testimonio_body--show');
        console.log();
    }

    // 4. EVENT LISTENERS
    buttonNext.addEventListener('click', ()=>{
        console.log();
        changePosition(1);
    });
    
    buttonBefore.addEventListener('click', ()=>{
        console.log();
        changePosition(-1);
    });

    // 5. FUNCIÓN DE CAMBIO MEJORADA
    const changePosition = (add) => {
        const currentElement = document.querySelector('.testimonio_body--show');
        
        if (!currentElement) {
            console.error();
            return;
        }

        const currentTestimonio = currentElement.dataset.id;
        value = Number(currentTestimonio);
        value += add;

        // Remover clase del actual
        currentElement.classList.remove('testimonio_body--show');

        // Manejar límites
        if (value > sliders.length) {
            value = 1;
        } else if (value < 1) {
            value = sliders.length;
        }

        console.log(value);

        // Agregar clase al nuevo
        const nextElement = document.querySelector(`[data-id="${value}"]`);
        if (nextElement) {
            nextElement.classList.add('testimonio_body--show');
        } else {
            console.error(value);
        }
    }

})();

// acordeon.js - Funcionalidad del acordeón
document.addEventListener('DOMContentLoaded', function() {
    const acordeonItems = document.querySelectorAll('.acordeon-item');
    
    acordeonItems.forEach(item => {
        const header = item.querySelector('.acordeon-header');
        
        header.addEventListener('click', function() {
            // Cerrar otros acordeones
            acordeonItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('activo')) {
                    otherItem.classList.remove('activo');
                }
            });
            
            // Toggle acordeón actual
            item.classList.toggle('activo');
        });
    });
    
    // Abrir primer acordeón por defecto (opcional)
    // acordeonItems[0].classList.add('activo');
});
