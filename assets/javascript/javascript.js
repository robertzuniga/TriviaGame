// Robert Zuniga Trivia javascript
console.log('TEST TEST TEST');

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

var splashscreen;

var myTimer;
var showQuestions;

var count = 0;
var timeUP = false;

function startMyTimer() {
    var secondTic = 5;
    var myTimer = setInterval(function () {
            secondTic--;
            console.log("myTimer ==> ", secondTic);
            $("#display-time").html("Time Remaining: " + secondTic);

            if (timeUP === true) {
                clearInterval(myTimer);
                clearTimeout(myTimer);
                $("#display-time").empty();
            } else if (secondTic == 0) {
                secondTic = 15;
            } // end if
        }, 1000);
}


function stopMyTimer() {
    clearInterval(showQuestions);
}

function displaySplashScreen() {


}

displaySplashScreen();














































$(document).ready(function () {
    console.log("ready!");
    let countDown = 5;
    $("#timer").text(countDown);

    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
        if (countDown === 0) {
            console.log("We\'re done counting down!");
            var question1 = $('#question1 input:radio:checked').val()
            $("#timer").text(`Answer to Question 1: ${question1}`);
        } else {
            $("#timer").text(--countDown);
        }
    }
});