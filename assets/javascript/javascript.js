// Robert Zuniga Trivia javascript
console.log('TEST TEST TEST');

// window.onload=function() {
//     $("#myStartButton").on("click", console.log("click works"));
//     console.log("here");
// };
$('#submit').on("click", (event) => {
    displayConsoleLog();
    return false;
}
);

function displayConsoleLog() {
   // event.preventDefault();
    //event.stopPropagation();

    var splashscreen;
    var showQuestions;
    var count = 0;




    console.log("count ==> ", count)
    console.log("click works")
    

    console.log("click works")
    startMyTimer()
    console.log("aferparty")
} 

  
// var myQuestionAnswer = [{
//         myQuestion: "Question 0",
//         mySelectionA: "Answer A0",
//         mySelectionB: "Answer B0",
//         mySelectionC: "Answer C0",
//         myAnswer: "mySelectionA"
//     },
//     {
//         myQuestion: "Question 1",
//         mySelectionA: "Answer A1",
//         mySelectionB: "Answer B1",
//         mySelectionC: "Answer C1",
//         myAnswer: "mySelectionB"
//     },
//     {
//         myQuestion: "Question 2",
//         mySelectionA: "Answer A2",
//         mySelectionB: "Answer B2",
//         mySelectionC: "Answer C2",
//         myAnswer: "mySelectionC"
//     }
// ];




function startMyTimer() {
    var secondTic = 5;
    var timeUP = false;
    var myTimer = setInterval(function () {
            console.log("myTimer ==> ", secondTic);
            $("#display-time").html("Time Remaining: " + secondTic +" s");

            if (timeUP === true) {
                clearInterval(myTimer);
                clearTimeout(myTimer);
                $("#display-time").empty();
            } else if (secondTic == 0) {
                secondTic = 5;
                timeUP = true;
                console.log("timeUp ==> ", timeUP);
            } else {
                secondTic--;
            }
        }, 1000);
}


// function stopMyTimer() {
//     clearInterval(showQuestions);
// }

// function displaySplashScreen() {


// }

// displaySplashScreen();

// $("#myStartButton").click(startMyTimer);



// $(document).ready(function () {
//     console.log("ready!");
//     // let countDown = 5;
//     // $("#timer").text(countDown);

//     // var myVar = setInterval(myTimer, 1000);
//     startMyTimer();

//     // function myTimer() {
//     //     if (countDown === 0) {
//     //         console.log("We\'re done counting down!");
//     //         var question1 = $('#question1 input:radio:checked').val()
//     //         $("#timer").text(`Answer to Question 1: ${question1}`);
//     //     } else {
//     //         $("#timer").text(--countDown);
//     //     }
//     // }
//     console.log("done");
// });