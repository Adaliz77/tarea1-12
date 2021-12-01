//ejercicio 1
let horasTrabajadas = 55;
let precioHoraNormal = 20;
 

function calcularSueldo(horTrab, precHorNor){
    let rango1 = 40;
    let rango2 = 8;
    let rango3 = horasTrabajadas - 48;
    if(horTrab <= 40){
        return horTrab * precHorNor;
    }
    
    if(horTrab > 40 && horTrab <=48){
        let precHorasNormales = 40 * precioHoraNormal;
        let precHorasExtras = (precHorNor * 2) * (horTrab - 40);
        return precHorasNormales + precHorasExtras;
    }
    if(horTrab >= 49){
        let precHorasNormales = 40 * precioHoraNormal;
        let precHorasExtrasInterv2 = (precHorNor * 2) * 8;
        let tripleHorExtrasInterv3 = (precHorNor * 3) * (horTrab - 48);
        return precHorasNormales + precHorasExtrasInterv2 + tripleHorExtrasInterv3;
    }
}

console.log( 'Cantidad recibida es: '+calcularSueldo(horasTrabajadas, precioHoraNormal));

//ejercicio 2
let mes = "Diciembre";

if(mes === "Octubre"){
    console.log("Es Octubre");

}else if(mes === "Noviembre"){
    console.log("Es noviembre");

}else if(mes === "Diciembre"){
    console.log("Es navidad");
}

//ejercicio 3
let numeroHombres = 6;
let numeroMujeres = 7;

let numeroGrupo = numeroHombres + numeroMujeres;
let porcentajeHom = (numeroHombres * 100) / numeroGrupo;
let porcentajeMuj = (numeroMujeres * 100) / numeroGrupo;
console.log('Porcentaje de mujeres: '+porcentajeMuj );
console.log('Porcentaje de hombres: '+porcentajeHom);