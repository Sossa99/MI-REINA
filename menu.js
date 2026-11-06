    document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Buscamos el botón mediante su ID
    const botonMusica = document.getElementById('musica');
    
    // 🛑 SEGURIDAD: Validamos si el botón realmente existe en esta página
    if (botonMusica) {
        
        // 2. Cargamos tu archivo de música
        const cancion = new Audio("musica.mp3");
        cancion.volume = 0.5; 
        cancion.loop = false; 

        // 3. Programamos la acción al presionar el botón
        botonMusica.addEventListener("click", () => {
            if (cancion.paused) {
                cancion.play();
                botonMusica.innerText = "⏸️ Pausar Música";
            } else {
                cancion.pause();
                botonMusica.innerText = "🎵 Reproducir Música";
            }
        });

        // 4. Resetear el botón cuando la canción termine
        cancion.addEventListener("ended", () => {
            botonMusica.innerText = "🎵 Reproducir Música";
        });

    } else {
        // Este mensaje saldrá en la consola si entras a una página que no tiene el botón
        console.warn("No se encontró el botón con ID 'musica' en esta página.");
    }
});
