const parrafo = document.getElementById("miParrafo");
const texto ="Soy desarrollador Frontend apasionado por la creación de páginas web intuitivas y atractivas al usuario , Priorizo la creación de interfaces fáciles de usar y brinden una experiencia positiva al usuario, Me aseguro de que mis diseños se vean y funcionen correctamente, Optimiso el código para garantizar que los sitios web carguen rapidamente y funcionen sin problemas"
const velocidad = 50;

typeWriter(parrafo, texto, velocidad);

function typeWriter(elemento,texto,velocidad){
    let i=0;
    elemento.innerHTML="";

    function escribirLetra(){
        if(i<texto.length){
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribirLetra, velocidad);
        }
    }

    escribirLetra();
}


let rec;
    if(!("webkitSpeechRecognition" in window)) {
        alert("Lo siento, no puedes usar la API");
    }else{
        rec = new webkitSpeechRecognition();
        rec.lang = "es";
        rec.continius = true;
        rec.interim = true;
        rec.addEventListener("result",iniciar);
    }

    function iniciar(event){
        for(i = event.resultIndex; i<event.results.length;i++){
            document.getElementById('texto').innerHTML = event.results[i][0].transcript;
            }        
    }

    rec.start();