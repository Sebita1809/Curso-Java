// FUNCION .toString SIRVE PARA QUE UN DATO TIPO NUMERO, PASE A SER UN DATO TIPO STRING //
//var numero = 46;
//var cadena = numero.toString();

//console.log(typeof(numero));
//console.log(cadena);
//console.log(typeof(cadena));

//////////////////////////////////////////////////////////////////////////////////////////
// FUNCION instanceof SIRVE PARA CORROBORAR SI UNA VARIABLE ES DE ALGUN TIPO//
//color = new String("Verde");
//color instanceof String;
//color2 = "Azul";

//if (color2 instanceof String) {
//    console.log("aprobado");
//} else {
//    console.log("no aprobado");
//}

//////////////////////////////////////////////////////////////////////////////////////////
function Perro(nombre, criadero, color, sexo) {
    this.nombre = nombre;
    this.criadero = criadero;
    this.color = color;
    this.sexo = sexo;
  }
  
  elPerro = new Perro("Gabby", "Laboratorio", "chocolate", "femenino");
  elPerro.toString(); //devuelve [object Object]
  
  Perro.prototype.toString = function perroToString() {
    var retorno = `Perro ${this.nombre} es ${this.sexo} ${this.color} ${this.criadero}`;
    console.log(elPerro);
    return retorno;
  };
  console.log(elPerro);