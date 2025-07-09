const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value)                                            //Funcion para actualizar una estructura de datos flexible, que almacena informacion de discos, clasificada por id
{
    switch(value)
    {
        case "":                                                                            //La funcion identifica si el valor que se le ingresa es una cadena vacia, en este caso debe borrar el registro que tenga la propiedad del nombre ingresado en prop
            delete records[id][prop];
            break;
        default:
            if(records[id].hasOwnProperty("tracks") && Array.isArray(records[id][prop]))    //Si el valor no esta vacio pero la propiedad ingresada es "tracks" (pista/cancion), entonces comprara si existe la propiedad, de ser cierto, añadira el valor al final de la cadena
            {
                records[id][prop].push(value);  
            }
            else if(prop === "tracks")                                                      //De no tener un a propiedad "tracks", entonces creara una con el valor en forma de arreglo
            {
                records[id][prop] = [value];
            }
            else                                                                             //Para todos los otros casos creara o sustituira la propiedad ingresada con el valor ingresado
            {
                records[id][prop] = value;
            }
            break;

    }
    return records;
}

//updateRecords(recordCollection, 5439, 'artist', 'ABBA');
//updateRecords(recordCollection, 2468, "tracks", "Free");
//console.log(recordCollection[2468].tracks);