function pintar_ruta() {
    console.log("El acceso a la ruta C:\\usuario\\ tarda 1'23 segundos");
}

function pintar_ruta2() {
    var substring = "El acceso a la ruta C:\\\\usuario\\tarda 1'23 segundos\, algo";
    var substring2 = "considerado \"lento\" en la actualidad.";
    console.log(substring + " " + substring2);
}

function saludar() {
var edad = prompt("Por favor, introduce tu edad:");
            if (edad <=18) {
                alert("Eres menor de edad.");
            } else {
                alert("Eres mayor de edad.");
            }
            alert("Tu edad es: " + edad);
}

function muestra_potencia() {
    var num= 2* Math.pow(10, -9);
    console.log("el resultado es" + num);
}

function muestra_n_distintas_bases(num) {
    var numBinario = num.toString(2);
    var numDecimal = num.toString(10);
    var numOctal = num.toString(8);
    var numHexadecimal = num.toString(16);
    console.log("Número en binario: " + numBinario);
    console.log("Número en decimal: " + numDecimal);
    console.log("Número en octal: " + numOctal);
    console.log("Número en hexadecimal: " + numHexadecimal);
}