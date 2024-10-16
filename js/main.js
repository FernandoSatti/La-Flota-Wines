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

