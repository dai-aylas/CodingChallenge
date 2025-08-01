//EJERCICIO 1
function Evaluar(){
    const nota = parseFloat(document.getElementById("nota").value);
    let respuesta = Rendimiento(nota);

    document.getElementById("rendimiento").textContent = respuesta;
}
function Rendimiento(nota){
    if(nota < 0 || nota >10){
        return("Ingrese nota VALIDA !")
    }
    else{
        if(nota>=0 && nota<2){
        return("Rendimiento: Muy Mal")
        }
        else if(nota>=2 && nota<5){
        return("Rendimiento: Mal")
        }
        else if(nota==5){
        return("Rendimiento: Tn cerca pero tan lejos")
        }
        else if(nota>=6 && nota<8){
        return("Rendimiento: Bien !")
        }
        else if(nota>=8 && nota<=10){
        return("Rendimiento: Muy Bien !!")
        }
    }
}
/// TIEMPO: 12 MIN (con html incluido, sin css)

//EJERCICIO 2
function Ejecutar2(){
    const num1 = parseFloat(document.getElementById("Num1").value);    
    const num2 = parseFloat(document.getElementById("Num2").value);
    const palabra = document.getElementById("Palabra").value;

    let respuesta = BiggestOne(num1,num2,palabra);

    document.getElementById("biggetone").textContent = respuesta;
}
function BiggestOne(uno, dos, blabla){
    if(uno > dos){
        return(uno)
    }
    else if(dos > uno){
        return(dos)
    }
    else if(dos == uno){
        return(blabla[0]+","+blabla[blabla.length-1])
    }
}
/// TIEMPO: 15 MIN (con html incluido, sin css)

//EJERCICIO 3
function FiltrarFrutas(){
    let frutasYVerduras = [{fruta:"banana"},{verdura:"apio"},{fruta:"manzana"},{fruta:"frutilla"},{verdura:"zanahoria"},{fruta:"kiwi"},{fruta:"sandia"},{fruta:"melon"},{verdura:"repollo"},{fruta:"mango"}];

    frutasYVerduras = frutasYVerduras.filter(item => item.fruta);
    frutasYVerduras = frutasYVerduras.map(item => item.fruta);

    document.getElementById("filtrado").textContent = frutasYVerduras.join(" , ");
}
/// TIEMPO: 20 MIN (con html incluido, sin css)

//EJERCICIO 4
let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];

function dispenserGaseosas() {
  let nombre = document.getElementById("bebidas").value.toLowerCase();

  let gaseosasEnStock = {};
  for (let i = 0; i < gaseosas.length; i++) {
    gaseosasEnStock[gaseosas[i]] = unidades[i];
  }
    document.getElementById("dispenser").textContent = "Stock de " + nombre + ": " + gaseosasEnStock[nombre] + " unidad(es)";
}

/// TIEMPO 30 MIN (con html incluido, sin css)

//EJERCICIO 5
let personas = [{nombre: "Juan", edad:19},{nombre:"Mario", edad: 22}];

function AnioNacido(){

    for(let i = 0; i< personas.length; i++){
        const anioactual = 2025;
        personas[i].nacimiento = anioactual - personas[i].edad;

    }

    document.getElementById("arraymodificada").textContent = JSON.stringify(personas)
}
///TEIMPO: 35 MIN (con html incluido, sin css)