// Robert Zuniga Trivia javascript
console.log('TEST TEST TEST');

// window.onload=function() {
//     $("#myStartButton").on("click", console.log("click works"));
//     console.log("here");
// };
// $('#submit').on("click", (event) => {
//     displayConsoleLog();
//     return false;
// }
// );

$("#submit").click(displayConsoleLog);

var myQuestionAnswer = [{
        myQuestion: "Question 0",
        mySelectionA: "Answer A0",
        mySelectionB: "Answer B0",
        mySelectionC: "Answer C0",
        myAnswer: "mySelectionA"
    },
    {
        myQuestion: "Question 1",
        mySelectionA: "Answer A1",
        mySelectionB: "Answer B1",
        mySelectionC: "Answer C1",
        myAnswer: "mySelectionB"
    },
    {
        myQuestion: "Question 2",
        mySelectionA: "Answer A2",
        mySelectionB: "Answer B2",
        mySelectionC: "Answer C2",
        myAnswer: "mySelectionC"
    }
];

// #questionsHere


function displayConsoleLog() {
    // event.preventDefault();
     //event.stopPropagation();
 
     var splashscreen;
     var showQuestions;
     var count = 5;
 
     console.log("count ==> ", count)
 
    var done = startMyTimer(5);
 
     console.log("done =>", done)  
 } 
 
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

