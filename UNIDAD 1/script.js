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

function divide_entre_cero_y_opera(num) {
    var resultado = num / 0;
    console.log("El resultado de dividir " + num + " entre cero es: " + resultado);
    var suma = resultado + 5;
    console.log("El resultado de sumar 5 al resultado anterior es: " + suma);
}

function check_ambito_var() {
    let prueba = 5;
    console.log("Valor de prueba: " + prueba);
    {
        let prueba2 = 10;
        console.log("Insisto valor de prueba dentro del bloque: " + prueba);
        console.log("Valor de prueba2 dentro del bloque: " + prueba2);
    }
    console.log("Valor de prueba2 fuera del bloque: " + prueba2);
}

function contar_y_temporizar() {
    let valor = 0;
    let inicio = new Date();
    for (let i = 0; i < 100; i++) {
        valor +=10;
    }
    let fin = new Date();
    let tiempoTranscurrido = fin - inicio;
    console.log("El valor final es: " + valor);
    console.log("Tiempo transcurrido en milisegundos: " + tiempoTranscurrido);
}