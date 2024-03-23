let nombre = prompt ("Ingrese su nombre");
alert ("Bienvenido a su simulador de préstamos, " + nombre);

alert(" A continuacion encontrará los prestamos mas solicitados. Si el que busca no se encuentra ahí, puede solicitarlo manualmente, con un monto mínimo de 100.000 y un tope de 2.000.000. La tasa es del 40%")

class Prestamo{
    constructor(titulo, monto, cuotas){
        this.titulo = titulo
        this.monto = monto
        this.cuotas = cuotas
    }
}

let prestamo1 = new Prestamo("Prestamo 1", 100000, 12);
let prestamo2 = new Prestamo("Prestamo 2", 500000, 18);
let prestamo3 = new Prestamo("Prestamo 3", 2000000, 30);


const arrayPrestamos = [prestamo1, prestamo2, prestamo3];

alert("Prestamo 1: $100000, 12 cuotas\n Prestamo 2: $500000, 18 cuotas\n Prestamo 3: $2000000, 30 cuotas");
solicitar();
function solicitar(){
    let eleccion = parseInt(prompt(`Pulse 1 si desea solicitar el ${arrayPrestamos[0].titulo}\nPulse 2 si desea solicitar el ${arrayPrestamos[1].titulo}\nPulse 3 si desea solicitar el ${arrayPrestamos[2].titulo}\nPulse 4 si desea solicitar otro monto.` ));
    while(eleccion<1 || eleccion>4 ){
        eleccion = parseInt(prompt(`Pulse 1 si desea solicitar el ${arrayPrestamos[0].titulo}\nPulse 2 si desea solicitar el ${arrayPrestamos[1].titulo}\nPulse 3 si desea solicitar el ${arrayPrestamos[2].titulo}\nPulse 4 si desea solicitar otro monto.` ));
    }
    
    if(eleccion === 1){
        const total = calculoDevolucion(arrayPrestamos[0].monto);
        const montoCuotas = calculoCuotas (arrayPrestamos[0].cuotas, total);
        alert(`Ha solicitado el ${arrayPrestamos[0].titulo}, el monto a devolver es de ${total} pesos, en 12 cuotas de ${montoCuotas} pesos` )
    }else if(eleccion === 2){
        total = calculoDevolucion(arrayPrestamos[1].monto);
        montoCuotas = calculoCuotas (arrayPrestamos[1].cuotas, total);
        alert(`Ha solicitado el ${arrayPrestamos[1].titulo}, el monto a devolver es de ${total} pesos, en 12 cuotas de ${montoCuotas} pesos` )
    }else if(eleccion === 3){
        total = calculoDevolucion(arrayPrestamos[2].monto);
        montoCuotas = calculoCuotas (arrayPrestamos[2].cuotas, total);
        alert(`Ha solicitado el ${arrayPrestamos[2].titulo}, el monto a devolver es de ${total} pesos, en 12 cuotas de ${montoCuotas} pesos` )
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
        alert(`Ha solicitado un prestamo de ${prestamoManual} pesos, el monto a devolver es de ${total} pesos, en ${cantidadCuotas} cuotas de ${montoCuotas} pesos` )
    }
}

function calculoDevolucion(monto){
    let devolucion = monto * 1.4;
    return devolucion;
}

function calculoCuotas(cuotas, monto){
    let totalcuotas = monto / cuotas;
    return Math.round(totalcuotas);
}

function despedida (){
    alert("Gracias por utilizar nuestro servicio, " + nombre + ", esperamos que nos sigas teniendo en cuenta!")
}

despedida();