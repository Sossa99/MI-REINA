document.addEventListener('DOMContentLoaded', ()=>{


  const click = document.getElementById('click-aqui')


  click.addEventListener('click', ()=>{
    click.textContent = "TE AMO MUCHO"

    const mensaje = new SpeechSynthesisUtterance();
    mensaje.text = "Te Amo Mucho";
    mensaje.rate = 0.3;
    window.speechSynthesis.speak(mensaje)

    setTimeout(()=>{
        window.location.href = "pagina1.html"
    },2500)

  });


})


  


const parrafada = document.getElementById('parrafo')

parrafada.addEventListener('click', ()=>{
    
    window.location.href = "pagina2.html"
})






// Buscamos el elemento con la clase .texto
const elementoTexto = document.querySelector(".texto");
const textoCompleto = elementoTexto.textContent;
elementoTexto.textContent = ""; // Vaciamos el texto para empezar a escribirlo

let i = 0;
function escribirMecanografia() {
  if (i < textoCompleto.length) {
    elementoTexto.textContent += textoCompleto.charAt(i);
    i++;
    setTimeout(escribirMecanografia, 60); // 💡 Modifica el 60 para cambiar la velocidad (en milisegundos)
  }
}

// Iniciamos el efecto
escribirMecanografia();




    

