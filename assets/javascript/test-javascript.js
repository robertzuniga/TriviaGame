// Robert Zuniga Trivia javascript



$('#submit').on("click", function(e) {
    displayConsoleLog(e);
}
);

function displayConsoleLog(e) {
    e.preventDefault();
    console.log("click works");

} 

var timeAllowed = 5;
var done = startMyTimer(timeAllowed)


     var splashscreen;
     var showQuestions;
     var count = 5;
 
     console.log("count ==> ", count)
 
    var done = startMyTimer(5);
 
     console.log("done =>", done)  
 
 
function startMyTimer(secondTic) {
    var  mySecondTic = secondTic;
    var timeUP = false;
    var myTimer = setInterval(function () {
            console.log("myTimer ==> ", mySecondTic);
            $("#display-time").html("Time Remaining: " + mySecondTic +" s");

            if (timeUP === true) {
                clearInterval(myTimer);
                clearTimeout(myTimer);
                $("#display-time").html("Time Remaining: " + mySecondTic +" s");
                // $("#display-time").empty();
            } else if (mySecondTic == 0) {
                // secondTic = 5;
                timeUP = true;
            } else {
                mySecondTic--;
            }

//do stuff here









            console.log("secondTic => ", mySecondTic)
        }, 1000);




    return timeUP;
}