function testSize(num) 
{
  // Cambia solo el código debajo de esta línea
    if(num < 5)
    {
        return "Tiny";
    }
    else if(num < 10)
    {
        return "Small";
    }
    else if(num < 15)
    {
        return "Medium";
    }
    else if(num < 20)
    {
        return "Large";
    }
    else
    {
        return "Huge";
    }
  // Cambia solo el código encima de esta línea
}

console.log(testSize(19));