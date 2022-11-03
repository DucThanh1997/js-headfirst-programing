var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire!")
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number")
    } else {
        guesses++
        if (guess == location1) {
            hits++
            alert("hits")
        } else if (guess == location2) {
            hits++
            alert("hits")
        } else if (guess == location2) {
            hits++
            alert("hits")
        } else {
            alert("miss")
        }
    }

    if (hits == 3) {
        isSunk = true
        alert("winn")
        var stats = "you took " + guesses + " guesses to sink the ship, " + "which mean your shotting accuracy was " + (3/guesses)
        alert(stats)
    }
}