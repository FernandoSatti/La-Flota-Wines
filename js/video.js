/*index entrevista y 3 fotos*/
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video-flotawines');
    const boton = document.getElementById('boton-play');

    boton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            boton.innerHTML = '<span class="icono-play">❚❚</span><span class="texto-play">Pausar</span>';
        } else {
            video.pause();
            boton.innerHTML = '<span class="icono-play">▶</span><span class="texto-play">Play para ver entrevista</span>';
        }
    });

    video.addEventListener('play', function() {
        boton.classList.add('reproduciendo');
    });

    video.addEventListener('pause', function() {
        boton.classList.remove('reproduciendo');
    });

    video.addEventListener('timeupdate', function() {
        const porcentaje = (video.currentTime / video.duration) * 100;
        document.getElementById('progreso').style.width = porcentaje + '%';
    });

    // Para dispositivos táctiles
    const tarjetas = document.querySelectorAll('.tarjeta-vino');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('touchstart', function() {
            this.classList.toggle('activo');
        });
    });
});
/*index entrevista y 3 fotos*/