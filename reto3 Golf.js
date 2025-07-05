const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) 
{
  // Cambia solo el código debajo de esta línea
    if (strokes == 1)
    {
        return "Hole-in-one!";
    }
    else if(strokes <= par - 2)
    {
        return "Eagle";
    }
    else if(strokes <= par - 1)
    {
        return "Birdie";
    }
    else if(strokes == par)
    {
        return "Par";
    }
    else if(strokes <= par + 1)
    {
        return "Bogey";
    }
    else if(strokes <= par + 2)
    {
        return "Double Bogey";
    }
    else
    {
        return "Go Home!";
    }  
  // Cambia solo el código encima de esta línea
}

console.log(golfScore(5, 4));