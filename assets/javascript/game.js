//need counter for win and loses and score
var wins = 0;
var loses = 0;
//user score as they click on stones
var score = 0;

//create render function to update html
function render() {
    $("#win").text(wins);
    $("#lose").text(loses);
    $("#score").text(score);
}

//create a function for cpu to pick a random number between 19-120
var cpuGuess = Math.floor(Math.random() * 102) + 19;

//set number user has to achieve
$("#numToGuess").text(cpuGuess);

//create a function for crystal worth between 1-12
var purpleWorth = Math.floor(Math.random() * 12) + 1;
var redWorth = Math.floor(Math.random() * 12) + 1;
var blueWorth = Math.floor(Math.random() * 12) + 1;
var greenWorth = Math.floor(Math.random() * 12) + 1;

//create a reset button 
var reset = function () {
    //reset score back to 0
    score = 0;
    
    //cpu guess a new number to acheive
    cpuGuess = Math.floor(Math.random() * 102) + 19;

    //set number user has to achieve
    $("#numToGuess").text(cpuGuess);

    //create a function for crystal worth between 1-12
    purpleWorth = Math.floor(Math.random() * 12) + 1;
    redWorth = Math.floor(Math.random() * 12) + 1;
    blueWorth = Math.floor(Math.random() * 12) + 1;
    greenWorth = Math.floor(Math.random() * 12) + 1;
};

//click event for the purple stone
$("#purpleStone").on("click", function () {
    //increase counter on when image is click
    score += purpleWorth;

    if (score === cpuGuess) {
        alert("You Win!");
        wins++;
        reset();
    };
    if (score > cpuGuess) {
        alert("You Lose!");
        loses++;
        reset();
    };
    render();
});

$("#redStone").on("click", function () {
    //increase counter on when image is click
    score += redWorth;

    if (score === cpuGuess) {
        alert("You Win!");
        wins++;
        reset();
    }
    if (score > cpuGuess) {
        alert("You Lose!");
        loses++;
        reset();
    };
    render();
});

$("#blueStone").on("click", function () {
    //increase counter on when image is click
    score += blueWorth;

    if (score === cpuGuess) {
        alert("You Win!");
        wins++;
        reset();
    };
    if (score > cpuGuess) {
        alert("You Lose!");
        loses++;
        reset();
    };
    render();
});

$("#greenStone").on("click", function () {
    //increase counter when image is click
    score += greenWorth;

    if (score === cpuGuess) {
        alert("You Win!");
        wins++;
        reset();
    };
    if (score > cpuGuess) {
        alert("You Lose!");
        loses++;
        reset();
    };
    render();
});

