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