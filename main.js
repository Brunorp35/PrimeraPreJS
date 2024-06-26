let nombre = prompt ("Ingrese su nombre");
alert ("Bienvenido a su simulador de préstamos, " + nombre);

alert(" A continuacion encontrará los prestamos mas solicitados ordenados de forma ascendente segun su monto. Si el que busca no se encuentra ahí, puede solicitarlo manualmente, con un monto mínimo de 100.000 y un tope de 2.000.000. La tasa es del 40%")

class Prestamo{
    constructor(titulo, monto, cuotas){
        this.titulo = titulo
        this.monto = monto
        this.cuotas = cuotas
    }
}

let prestamo3 = new Prestamo("Prestamo 3", 2000000, 30);
let prestamo1 = new Prestamo("Prestamo 1", 100000, 12);
let prestamo2 = new Prestamo("Prestamo 2", 500000, 18);


const arrayPrestamos = [prestamo3, prestamo1, prestamo2];

arrayPrestamos.sort((a, b) => a.monto - b.monto);

alert(`${arrayPrestamos[0].titulo} : $${arrayPrestamos[0].monto} a devolver en ${arrayPrestamos[0].cuotas} cuotas\n${arrayPrestamos[1].titulo} : $${arrayPrestamos[1].monto} a devolver en ${arrayPrestamos[1].cuotas} cuotas\n${arrayPrestamos[2].titulo} : $${arrayPrestamos[2].monto} a devolver en ${arrayPrestamos[2].cuotas} cuotas`);

function solicitar(){
    let eleccion = parseInt(prompt(`Pulse 1 si desea solicitar el ${arrayPrestamos[0].titulo}\nPulse 2 si desea solicitar el ${arrayPrestamos[1].titulo}\nPulse 3 si desea solicitar el ${arrayPrestamos[2].titulo}\nPulse 4 si desea solicitar otro monto.` ));
    while(eleccion<1 || eleccion>4 ){
        eleccion = parseInt(prompt(`Pulse 1 si desea solicitar el ${arrayPrestamos[0].titulo}\nPulse 2 si desea solicitar el ${arrayPrestamos[1].titulo}\nPulse 3 si desea solicitar el ${arrayPrestamos[2].titulo}\nPulse 4 si desea solicitar otro monto.` ));
    }
    
    if(eleccion === 1){
        const total = calculoDevolucion(arrayPrestamos[0].monto);
        const montoCuotas = calculoCuotas (arrayPrestamos[0].cuotas, total);
        let confirmacion1 = confirm(`Ha solicitado el ${arrayPrestamos[0].titulo}, el monto a devolver es de ${total} pesos, en 12 cuotas de ${montoCuotas} pesos, confirma la operación?`)
        confirmaciones(confirmacion1);
    }else if(eleccion === 2){
        total = calculoDevolucion(arrayPrestamos[1].monto);
        montoCuotas = calculoCuotas (arrayPrestamos[1].cuotas, total);
        let confirmacion2 = confirm(`Ha solicitado el ${arrayPrestamos[1].titulo}, el monto a devolver es de ${total} pesos, en 12 cuotas de ${montoCuotas} pesos, confirma la operación?`);
        confirmaciones(confirmacion2);
    }else if(eleccion === 3){
        total = calculoDevolucion(arrayPrestamos[2].monto);
        montoCuotas = calculoCuotas (arrayPrestamos[2].cuotas, total);
        let confirmacion3 = confirm(`Ha solicitado el ${arrayPrestamos[2].titulo}, el monto a devolver es de ${total} pesos, en 12 cuotas de ${montoCuotas} pesos, confirma la operación?` );
        confirmaciones(confirmacion3);
    } else if(eleccion === 4){
        let prestamoManual = parseInt(prompt("Ingrese el monto del prestamo que desea solicitar"));
      while(prestamoManual<100000 || prestamoManual>2000000){
        prestamoManual = parseInt(prompt("El monto se encuentra fuera del rango permitido, intente nuevamente"));
      }  
        let cantidadCuotas
        if(prestamoManual>99999 && prestamoManual<500000){
            cantidadCuotas = 12;
        }else if (prestamoManual>499999 && prestamoManual<1300000){
            cantidadCuotas = 18;
        } else if (prestamoManual>1299999 && prestamoManual<2000001){
            cantidadCuotas = 30;
        }
        total = calculoDevolucion(prestamoManual);
        montoCuotas = calculoCuotas(cantidadCuotas, total);
        let confirmacion = confirm(`Ha solicitado un prestamo de ${prestamoManual} pesos, el monto a devolver es de ${total} pesos, en ${cantidadCuotas} cuotas de ${montoCuotas} pesos, confirma la operación?` );
        confirmaciones(confirmacion);
    }
}

function calculoDevolucion(monto){
    let devolucion = monto * 1.4;
    return devolucion;
}

function confirmaciones(decision){
    if (decision == true){
        alert("El prestamo ha sido otorgado exitosamente");
    } else {
        alert("El prestamo ha sido cancelado");
    }
}

function calculoCuotas(cuotas, monto){
    let totalcuotas = monto / cuotas;
    return Math.round(totalcuotas);
}

function despedida (){
    alert("Gracias por utilizar nuestro servicio, " + nombre + ", esperamos que nos sigas teniendo en cuenta!");
}
solicitar();
despedida();
