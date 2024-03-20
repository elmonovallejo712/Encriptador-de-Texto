const campo_texto = document.querySelector("#Encriptar");
const campo_mensaje = document.querySelector("#Mensaje");


const matriz_code = [
    ["e","enter"],
    ["i","ismi"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]

function btnEncriptar(){
    const texto= encriptar(campo_texto.value);
    campo_mensaje.value = texto
}

function encriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i ++) {
        if (fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
            matriz_code[i][0],
            matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar(){
    const texto= desencriptar(campo_texto.value);
    campo_mensaje.value = texto
}

function desencriptar(frasedesencriptada){
    for (let i = 0; i < matriz_code.length; i ++) {
        if (frasedesencriptada.includes(matriz_code[i][1])){
            frasedesencriptada = frasedesencriptada.replaceAll(
            matriz_code[i][1],
            matriz_code[i][0]
            );
        }
    }
    return frasedesencriptada;
}