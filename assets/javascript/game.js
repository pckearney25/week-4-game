$(document).ready(function() {
    //Note as written there is a minimum 1/32 chance that the game is unwinnable.
    //if all variables are even and the target number is odd. 
    //Will fix after basic game is functioning.
    //Also want to attempt to replace the variables with an array.
    //Insert those variables in as the values on the buttons. 
        
    //The variables global to the runtime of the application.
    var targetNumber;
    var roundScore;
    var valCryst1;
    var valCryst2;
    var valCryst3;    
    var valCryst4;     
    var roundsCompleted = 0;
    var wins = 0;
    var losses = 0;    

    //Use a function to initialize a round. 
    function initializeRound(){   
        roundScore = 0;
        targetNumber = Math.floor(Math.random()*112) + 19;
        valCryst1 = Math.floor(Math.random()*12) + 1;
        valCryst2 = Math.floor(Math.random()*12) + 1;
        valCryst3 = Math.floor(Math.random()*12) + 1;    
        valCryst4 = Math.floor(Math.random()*12) + 1;

        $(".win-box").html(wins);
        $(".loss-box").html(losses);
        $(".completed-box").html(roundsCompleted);
        $(".roundscore-box").html(roundScore); 
        $(".target-box").html(targetNumber);
        $("#idCryst1").html(valCryst1); //can be removed to comply with original instructions.
        $("#idCryst2").html(valCryst2); //can be removed to comply with original instructions.
        $("#idCryst3").html(valCryst3); //can be removed to comply with original instructions.
        $("#idCryst4").html(valCryst4); //can be removed to comply with original instructions.

        console.log("Target Number: " + targetNumber + " valCryst numbers: " + valCryst1 + " " + valCryst2 + " " + valCryst3 + " " + valCryst4);
        console.log("RS1: " + roundScore);
    }
    
    initializeRound();

    $(".crystal-button").on("click", function() {

        operator =  $(this).val();

        console.log(operator);

        if (operator === "quartz") {
                    
            console.log("RS2: " +roundScore);
            roundScore += valCryst1;
            console.log("RS3: " + roundScore)

        } else if (operator === "sulphur"){
            roundScore += valCryst2

        } else if (operator === "diamond"){
            roundScore += valCryst3
        } else if (operator === "ruby"){
            roundScore += valCryst4
        };

        $(".roundscore-box").html(roundScore); 

        if (roundScore === targetNumber) {
            console.log("You win!");
            alert("You won! Let's play gain!")
            wins++;
            roundsCompleted++;
            initializeRound();

        } else if (roundScore >= targetNumber) {
            console.log("You lose!!");
            alert("Better luck next time. Loss. Let's try again.")
            losses++;
            roundsCompleted++;
            initializeRound();  
        };


    });
 
});