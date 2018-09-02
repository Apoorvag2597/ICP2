function game() //Creating a function named game
{

    var number = prompt("Please enter your number"); //entering a number by user
    var random = Math.floor((Math.random() * 10) + 1); // A random number is generated in between 1 to 10
    if (number == random) //Checking if both the numbers are equal or not
    {
        document.getElementById('output').innerHTML = 'Win'; //If both the numbers are equal, Output is given as Win

    }
    else //Loop is repeated until the output is given as win
        {
        game();
    }
}
game();
