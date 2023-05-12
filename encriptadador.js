function encriptar() {
    let texto = document.querySelector('#text-encriptar').value.trim().toLowerCase();
    if (/^[a-z ]+$/.test(texto)) {
        let encriptar = texto.replace(/a/gi, 'ai').replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/o/ig, 'ober').replace(/u/ig, 'ufat');
        document.querySelector("#text-resultado").value = encriptar;
    } else {
        alert('Solo se permiten letras minúsculas sin caracteres especiales ni acentos.');
    }
}

window.onload = function() {
    let botonEncriptar = document.querySelector('#encriptar');
    botonEncriptar.onclick = function() {
    let contenidoVacio = document.querySelector('.contenido-vacio');
    let contenidoResultado = document.querySelector('.resultado');
    contenidoVacio.style.display = 'none';
    contenidoResultado.style.display = 'block';
    encriptar();
    };
};

function desencriptar() {
    let texto = document.querySelector('#text-resultado').value.trim().toLowerCase();
    if (/^[a-z ]+$/.test(texto)) {
        let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector('#text-resultado').value = textoCifrado;
    } else {
        alert('Solo se permiten letras minúsculas sin caracteres especiales ni acentos.');
    }
}


let botonDesencriptar = document.querySelector('#desencriptar');
botonDesencriptar.onclick = function() {
let contenidoVacio = document.querySelector('.contenido-vacio');
let contenidoResultado = document.querySelector('.resultado');
contenidoVacio.style.display = 'none';
contenidoResultado.style.display = 'block';
desencriptar();
};

document.querySelector('#copiar').addEventListener('click', function() {
    let text = document.querySelector('#text-resultado');
    text.select();
    document.execCommand('copy');
});





