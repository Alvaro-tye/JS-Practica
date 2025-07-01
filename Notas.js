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

a_mat += 2;                 //Añade el valor de un numero al valor de la variable, esto es igual a: a_mat = a_mat + 2;
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
a_char = "FirstLine\n\t\\SecondLine\nThirdLine";                                                       

//console.log(b_char);



//
