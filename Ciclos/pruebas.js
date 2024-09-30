const numero = 1;
var nombre = "Juan";
let decimal = 2.5;

console.log(typeof numero, typeof nombre);

console.log(numero == nombre);

var resultado = '';
resultado = numero + decimal;
console.log(resultado);

function pruebas(param) { //declarar la funcion 
    console.log(param);
}

pruebas("Juan");  //llamar a la funcion

function sumar(num1, num2) {
    var resultado = 0;
    resultado = num1 + num2;
    return resultado;
}

console.log(sumar(1, 2));


var rest = sumar(4, 5);
console.log(rest);

function sumar3(num1, num2, num3) {
    let resultado = 0;
    resultado = num1 + num2 + num3;
    return resultado;
}

var resulSuma = sumar3(4,6,7);
console.log(resulSuma);

function promedio(num1, num2, num3, num4){
    let sumaTotal=0;
    sumaTotal = num1 + num2 + num3 +num4;
    let prom = sumaTotal / 4;
    return prom;
}

console.log(promedio(2,4,6,8));


var ArregloPruebas =[2,3,7];
console.log(ArregloPruebas[2]);

console.log(ArregloPruebas);

ArregloPruebas.push(2, 5);
console.log(ArregloPruebas);


var strVariablesGuardar = "";
for(let item of ArregloPruebas){
    strVariablesGuardar += item;
}
console.log(strVariablesGuardar);


var i =0;
for(let item of ArregloPruebas){
    console.log("Posicion", i);
    console.log("Numero", item);
    i++;
}


for(let i = 0; i < ArregloPruebas.length; i++){
    console.log("Posicion", i);
    console.log("Numero", ArregloPruebas[i]);
}

var usuario= {
    "nombre":"Juan",
    "edad":24,
    "is_mayor":true,
    "hijos":{
        "primer_hijo" : "Jorge",
        "segundo_hijo" : "Maria"
    },
    "trabajos": [2, 4, 6]
};
console.log(usuario.trabajos.push(8));

console.log(usuario);

console.log(JSON.stringify(usuario));
console.log(JSON.parse('{"nombre":"Juan","edad":24,"is_mayor":true,"hijos":{"primer_hijo":"Jorge","segundo_hijo":"Maria"},"trabajos":[2,4,6,8]}'));



console.log(JSON.stringify(usuario).nombre);