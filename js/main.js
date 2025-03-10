/*peticion de edad*/ 
window.onload = function() {
    // Verificar si ya se mostró la alerta de edad
    if (!localStorage.getItem('ageConfirmed')) {
        Swal.fire({
            title: '¿Eres mayor de 18 años?',
            text: "Debes ser mayor de 18 años para ingresar.",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, tengo 18+',
            cancelButtonText: 'No, soy menor',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                // Guardar que el usuario ha confirmado su edad
                localStorage.setItem('ageConfirmed', 'true');
                Swal.fire({
                    title: 'Bienvenido',
                    text: 'Puedes acceder al contenido.',
                    icon: 'success'
                });
            } else {
                Swal.fire({
                    title: 'Acceso denegado',
                    text: 'Debes ser mayor de 18 años para acceder.',
                    icon: 'error'
                }).then(() => {
                    window.location.href = 'https://www.google.com'; // O redirigir donde prefieras
                });
            }
        });
    }
}
/* Petición de edad */

/*desplazamiendo del header*/
// Parallax effect for hero section
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    
    // Solo añade el evento si heroSection existe
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
        });
    }
});


/*desplazamiendo del header*/

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // Cuando el elemento es visible
                const element = entry.target;
                element.classList.remove('hidden'); // Quitar la clase 'hidden'
                element.classList.add('animate__fadeInUp'); // Agregar la animación
                observer.unobserve(element); // Dejar de observar
            }
        });
    });

    // Selecciona todos los elementos con la clase "hidden"
    const elementsToAnimate = document.querySelectorAll('.hidden');
    elementsToAnimate.forEach(el => observer.observe(el));
});



