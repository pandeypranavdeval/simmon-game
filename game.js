// alert("Play game");
var buttonColors=["red","blue","green","yellow"];
// pandeypranavdeval
gamePattern=[];

$(".btn").click(function(){
    //alert("i mclicked");
    var userChosenColor= $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    //console.log(userChosenColor);
    
    playsound(userChosenColor);
    animatePress(userChosenColor);
    // var audio = new Audio("sounds/" + userChosenColor + ".mp3");
    // audio.play();
    checkAnswer(userClickedPattern.length-1);
});

// userClickedPattern[userClickedPattern.length-1]
//currentLevel==gamePattern[gamePattern.length-1]

function checkAnswer(currentLevel){
    //console.log(currentLevel);
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function () {
                nextsequence();
              }, 1000);
        }

    }
    else{
        
        
        var s="wrong";
        playsound(s);
        $("body").addClass("game-over");
        
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          $("#level-title").text("Game Over, Press Any Key to Restart");
          startOver();
    }
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}


var level=0;

function nextsequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level"+" "+level);
    randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);    
    
    // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    // audio.play();
    
}
var started =false;
    $(document).keypress(function(event){
    if(started==false){
    nextsequence();
    started= true;
    }
    
    //console.log(event.key);
});


function playsound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function() {
        $("."+currentColor).removeClass("pressed");
    }, 100);

}



// var ran=randomChosenColour;
// var hh="#"+"ran";
// document.getElementById("#ran");





