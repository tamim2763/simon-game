var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*4) + 1;
    level += 1;
    $("h1").text("Level " + level);
    var randomChosenColour = buttonColours[randomNumber-1];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    // return randomNumber;
}


// console.log(gamePattern);
$(".btn").click(function(event){
    var userChosenColour = event.target.id;
    // console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    // console.log(userClickedPattern);
    // console.log(event.target.id);
});

function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    // console.log(event.target.classList);
    var tmp = $("#"+currentColour);
    setTimeout(function () {
      tmp.removeClass("pressed");
    }, 100);
}

$(document).keypress(function() {
    if (!started) {
        $("h1").text("Level 0");
        nextSequence();
        started = true;
    }
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
        // console.log("success");
        if (gamePattern.length===userClickedPattern.length) {
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    } else {
        // console.log("failed");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver () {
    level=0;
    gamePattern = [];
    started = false;
    userClickedPattern = [];
}