let nombre = prompt ("Ingrese su nombre");
alert ("Bienvenido a su simulador de préstamos, " + nombre);

let prestamo = prompt("Ingrese el valor del préstamo que desea solicitar, el mínimo permitido es de 100.000 pesos y el máximo de 2.000.000");

while(prestamo<100000 || prestamo > 2000000){
    prestamo = prompt("El monto ingresado es invalido, ingrese un nuevo monto");
}
let devolucion = prestamo * 1.8;
alert("El monto que debera devolver es de: " + devolucion + " pesos, en 18 cuotas de " + devolucion / 18) + " pesos"

function despedida (){
    alert("Gracias por utilizar nuestro servicio, " + nombre + ", esperamos que nos sigas teniendo en cuenta!")
}

despedida();