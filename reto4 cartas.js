let count = 0;

function cc(card) 
{
    switch(card)
    {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            
            break;
        case 7:
        case 8:
        case 9:
            count = count;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count -= 1;
            break;
    }
    if (count > 0)
    {
        return console.log(count + " Bet");
    }
    else
    {
        return console.log(count + " Hold");
    }

}

cc(10); cc("J"); cc("Q"); cc("K"); cc("A");
