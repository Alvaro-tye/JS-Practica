//          -- Notas y Ejercicios del Curso de JavaScript -- 
//
// Declaracion de Variables

var a_var = 2; //Usando 'var', es posible re-declarar la variable y/o asignarle otro valor
let b_let = 3; //Usando 'let', la variable no se puede volver a declarar, pero el valor si se puede cambiar
const VARIABLE_CONSTANTE = 'Hola'; //Usando 'const', la variable y su valor no se pueden cambiar
//console.log (VARIABLE_CONSTANTE);



//Operadores matematicos

let a_mat = 0, b_mat = 1;   //Es posible declarar en una linea, haciendo uso de comas

a_mat = 1 + b_mat;          //Suma
a_mat = 1 - b_mat;          //Resta
a_mat = 1 * b_mat;          //Multiplicacion
a_mat = 1 / b_mat;          //Division (Devuelve el cociente)
a_mat = 1 % b_mat;          //Obtener resto de una Division

a_mat = 1;

a_mat++;                    //Añade 1 al valor de la variable, esto es igual a: a_mat = a_mat + 1;
b_mat--;                    //Resta 1 al valor de la variable, esto es igual a: a_mat = a_mat - 1;

a_mat = 1;

a_mat += 2;                 //Añade el valor de un numero al valor de la variable, esto es igual a: a_mat = a_mat + 2; Este operador puede ser usado con cadenas de caracteres, lo que concatena dos cadenas.
a_mat -= 2;                 //Resta el valor de un numero al valor de la variable, esto es igual a: a_mat = a_mat - 2;
a_mat *= 1;                 //Multiplica el valor de un numero con el valor de la variable, esto es igual a: a_mat = a_mat * 1;
a_mat /= 1;                 //Divide el valor de la variable entre el valor de un numero, esto es igual a: a_mat = a_mat / 1;

//console.log(a_mat);


//Manipulacion de cadena de caracteres

let a_char = "", b_char = "";

a_char = "Puedes poner 'comillas simples' dentro de comillas dobles para poder mostralas en las consolas"; 
b_char = "\\\\ Las barras invertidas dobles, muestran una barra invertida"
b_char = "\\\' La barra invertida con comilla simple, muestra una comilla simple"
b_char = "\\\" La barra invertida con comilla doble, muestra una comilla doble"
b_char = "\\n La barra invertida con una letra 'n', hace un salto de linea"
b_char = "\\t La barra invertida con una letra 't', hace un espaciado con tabulador"
b_char = "\\r La barra invertida con una letra 'r', hace un retorno de carro"
b_char = "\\b La barra invertida con una letra 'b', hace un retroceso"
b_char = "\\f La barra invertida con una letra 'f', fuente de formulario"
b_char = "Hola y ";
a_char = "adios";

//console.log(b_char + a_char); //se pueden concatenar cadenas de caracteres con un signo "+"
//console.log(a_char.length);   //Con la funcion "length" puedes obetener la longitud de una cadena de caracteres, en una variable de tipo string.
//console.log(a_char[3]);       //Se puede obtener el valor en una posicion especifica de una cadena de caracteres, haciendo uso de los corchetes despues de la variable y, con un el numero de la posicion entre ellos.
//                              //La funcion anterior no puede usarse para sustituir valores en las posisciones de una cadena de caracteres, este tipo de variables tiene la caracteristica de inmutabilidad, si se quiere hacer esto, es necesario re-asignar el valor completo de la variables
//console.log(a_char[a_char.length - 1]); //Usando en conjunto la funcion length y restando un valor determinado, podemos obtener el valor en una posicion de la cadena, pero empezando de la dercha a la izquierda


//Arreglos

const miArreglo = [[1,"a"],["b","c","d"],2];//Una variable puede ser simple o de arreglo, a su vez puede ser arreglo de 1 o multidimensional
let auxArreglo;
//console.log(miArreglo[0][1]);             //Para acceder al valor de la variable, se agregan corchetes a continuacion del nombre de la variable, estos corchetes van en funcion de la dimension del arreglo, el primer corchete seria para las filas, y las siguiente para las columnas, para este caso

miArreglo.push(["e",3]);                    //Con la funcion push, puedes añadir valores al final de un arreglo
auxArreglo = miArreglo.pop();               //Con la funcion pop, puedes extraer el ultimo valor de un arreglo y lo devuelve, haciendo que se pueda guardar en otra variable
auxArreglo = miArreglo.shift();             //Con la funcion shift, puedes extraer el primer valor en un arreglo y lo devuelve
miArreglo.unshift(auxArreglo);              //Con la funcion unshift, puedes añadir valores al inicio de un arreglo


//Funciones

function nombreFuncion(param1,param2)       //Las funciones se declaran usando la palabra "function"
{                                           //Los parametros usados en una funcion solo requieren un nombre, y que este nombre difiera del nombre de las variables globales que pudieran entrar en conflicto
    let resp = param1 + param2;             //Notar que la variables declaradas con "let" o "const" tienen alcance por bloques, es decir que la variable declarada aqui, solo afecta dentro de la funcion    
    return resp;                            //Con la palabra return puedes devolver un valor o el valor de una variable.
}

//Estructura: Queue                         //Estructura de datos abstracta donde los elementos se mantienen en orden

/*
function siguienteEnLaFila(arr, item)       //Esta funcion, recibe un arreglo y un numero, el valor de los numero en el arreglo y el numero a añadir, no tienen relacion por su valor, solo por la posicion
{
  arr.push(item);                           //Se añade el valor nuevo al final del arreglo
  return arr.shift();                       //Se extrae el primer valor del arreglo, y es devuelto por la funcion
}

auxArreglo = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(auxArreglo));
console.log(nextInLine(auxArreglo, 6));
console.log("After: " + JSON.stringify(auxArreglo));
*/


//Sentencia if, else y else/if

function tuNumero(num)                                                      //Nota: Los if no estan correctamente ordenados :c
{
    console.log("El numero " + JSON.stringify(num)+ "...")                  //La sentencia "if" requiere  de una condicion, de no cumplirse, se puede usar (o no) un "else", si se desea poner mas condiciones puede usarse un "else if"
    if(num == 1)                                                            // == Verdadero si son iguales, convierte el tipo de dato de ser necesario.
    {
        console.log("Es igual a 1");
    }
    else if(num === 1)                                                      // === Verdaderos si son iguales en valor y tipo de dato, no convierte.
    {
        console.log("Es igual a 1 y el valor es de tipo 'number'");
    }
    else if(num != 1)                                                       // != Verdadero si son diferentes, convierte el tipo de dato de ser necesario.
    {
        console.log("Es diferente de 1");
    }
    else if(num !== 1)                                                      // !== Verdadero si son diferentes en valor o tipo de dato, no convierte.
    {
        console.log("Es diferente de 1 o el valor no es de tipo 'number'");
    }
    else if(num > 1)                                                        // > Verdadero si el valor de la izquierda es mayor, convierte el tipo de dato.
    {
        console.log("Es mayor a 1");
    }
    else if(num >= 1)                                                       // >= Verdadero si el valor de la izquierda es mayor o igual, convierte el tipo de dato.
    {
        console.log("Es mayor o igual a 1");
    }
    else if(num < 1)                                                        // < Verdadero si el valor de la izquierda es menor, convierte el tipo de dato.
    {
        console.log("Es menor a 1");
    }
    else if(num <= 1)                                                       // <= Verdadero si el valor de la izquierda es menor o igual, convierte el tipo de dato
    {
        console.log("Es menor o igual a 1");
    }
    else if(num >= -10 && num <= 10)                                        // && Verdadero solo si ambos valores booleanos son verdaderos
    {
        console.log("Esta entre -10 y 10");
    }
    else if(num < -10 || num > 10)                                          // || Verdadero si alguno o ambos valores son verdaderos
    {
        console.log("Es menor de -10 o mayor a 10");
    }
    else 
    {
        console.log("Error")
    }
}

//tuNumero(1);


//Sentencia Switch

let auxSwitch = "b";          
switch (auxSwitch)            //La sentencia switch, es una forma de definir varias porciones de codigo que se ejecutaran si la igualdad de un case en concreto se cumple.
{
  case "a":                   //La sentencia case, define una condicion de igualdad estricata "===", que de cumplirse, ejecutara la porcion de codigo debajo de ella, hasta encontrar un break;
    answer = "apple";       
    break;                    //La sentencia break, detienen o para el ultmo case que se este ejecutando, es una forma de delimitar el codigo que se ejecutara despues de que un case se haya cumplido.
  case "b":
    answer = "bird";
    break;
  case "c":
  case "ca":                  //Aqui se puede observar que si el case "c" o el case "ca" se cumplen, ambos ejecutaran las mismas lineas de codigo, hasta el mismo break, debido a la ausencia de un break entre ellos. 
    answer = "cat";
    break;
  default:                    //default, es un "case" especial que se ejecuta si ningun otro case cumplio su condicion.
    answer = "stuff";
    break;
}


//Objetos

const miPerro =                                             //Las variables de tipo objeto son como los arreglos, pero sus valores estan asociados a una propiedad
{
  nombrePerrito: "Scrash",                                  //Los nombres de la propiedades pueden tener un nombre similar  auna variable
  "Numero de piernas": 4,                                              //pero tambien pueden tener un nombre de tipo string o number
  colas: 1,                                               
  amigos: ["Vela","Cerezo"]                                 //Los valores de cada propiedad pueden ser de cualquier tipo de dato
};

console.log(miPerro.nombrePerrito);                         //La forma de acceder a los valores de las propiedades, depende de su nombre, si este es similar a las variables, entonces se accede usando el "."
console.log(miPerro["Numero de piernas"]);                  //Si el nombre es de tipo string o number, entonces se usan los corchetes, similar a como lo hariamos con un arreglo.











 

