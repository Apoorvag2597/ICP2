function game() {

    var number = prompt("Please enter your number");
    var random = Math.floor((Math.random() * 10) + 1);
    if (number == random) {
        document.getElementById('output').innerHTML = 'Win';

    }
    else {
        game();
    }
}
game();
