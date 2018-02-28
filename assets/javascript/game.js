// Arrays

var blueCrystal = [];

var greenCrystal = [];

var redCrystal = [];

var yellowCrystal = [];


// Game counters
var winCounter = 0;
var lossCounter = 0;
var guessCounter = 0;


//Functions

// If you exceed the random number, you lose, and the game resets (the lossCounter increases by 1)

//If you match the random number, you win, and the game resets (the winCounter increases by 1)

function startGame() {

    for (var i = 0; i < 12; i++) {
        var random = Math.floor(Math.random() * 12) + 1;

    };}
