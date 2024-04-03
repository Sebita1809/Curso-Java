dineroCofla = "3";
dineroCofla = parseInt(dineroCofla); // ESTA FUNCION SIRVE PARA PASAR ESE 3 (EN FORMATO STRING) A UN 3 EN FORMATO NUMERO//
//////////////////////////////////////////////
let usuario = {
    nombre: "Sebita",
    edad: "20",
    nacionalidad: "argentino",
    documento: 45257656
}; //ESTO ES UN ARRAY ASOCIATIVO//
/////////////////////////////////////////////
//DIFERENCIAS ENTRE EL FOR IN Y EL FOR OF
let animales = ["perro", "gato", "pajaro"];

for(let animal in animales){
    document.write(animal);
} //ESTO LO QUE HACE, ES QUE ANIMAL, NO VA A GUARDAR CADA ANIMAL QUE SE ENCUENTRA EN "ANIMALES", LO QUE VA A GUARDAR, ES LA POSICION 
  //EN LA QUE SE ENCUENTRAN // EJEMPLO: SI PONEMOS EL document.write(animal), NOS VA A MOSTRAR 0,1,2 (SON LAS POSICIONES DE CADA UNO)

for(let animal of animales){
    document.write(animal);
} //ESTO LO QUE HACE, ES QUE ANIMAL, GUARDA CADA ANIMAL QUE SE ENCUENTRA EN "ANIMALES"
  // EJEMPLO: SI PONEMOS EL document.write(animal), NOS VA A MOSTRAR "PERRO", "GATO", "PAJARO".

//ESAS SON LAS DIFERENCIAS QUE TIENEN, PERO OTRA DE LAS DIFERENCIAS, ES QUE EL for in, PUEDE ALMACENAR EL NOMBRE DE PROTOTIPOS (LO VEMOS DSP)
//EN CAMBIO EL for of NO
////////////////////////////////////////////
//PODEMNOS RECORRER UN ARRAY DENTRO DE OTRO
let array1 = ["jose","matias","lucas"];
let array2 = ["pedro","juan",array1];

for(let array in array2){
    if(array == 2){
        for(let array of array1){
            document.write(array + "<br>"); //EL <br> ES PARA QUE SE ESCRIBA UNA DEBAJO DE LA OTRA
        }
    } else {
        document.write(array2[array] + "<br>");
    }
} //ESTO VA A ESCRIBIR "PEDRO", "JUAN", "JOSE", "MATIAS", "LUCAS"; VA A ESCRIBRI TODO
//PERO QUE PASA SI AGREGAMOS UN DATO MAS EN AL ARRAY2, PERO QUEREMOS QUE CUANDO EL ARRAY TERMINE DE GUARDAR LOS DATOS DEL ARRAY1, NO
//GUARDE ESE DATO EXTRA QUE LE AGREGAMOS AL ARRAY2

let array1 = ["jose","matias","lucas"];
let array2 = ["pedro","juan",array1,"pepito"];

for(let array in array2){
    if(array == 2){
        for(let array of array1){
            document.write(array + "<br>");
            break;
        }
    } else {
        document.write(array2[array] + "<br>");
    }
} 
