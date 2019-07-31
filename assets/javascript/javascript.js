// Robert Zuniga Trivia javascript

//Intro Page 
$(document).ready(function () {
    $("#start-button").on("click", myTimer.startTimer);
});
////////////////////////////////////////////////////////////////
//questions available
////////////////////////////////////////////////////////////////
var questionVault =
    [{
            question: "Which one is NOT a primary color?",
            answers: ["red", "orange", "blue"],
            correct: "orange"
        },
        {
            question: "Which is the state of the sun?",
            answers: ["liquid", "gas", "plasma"],
            correct: "plasma"
        },
        {
            question: "What is the fastest speed an object can have?",
            answers: ["speed of light", "speed of sound", "speed of plasma"],
            correct: "speed of light"
        },
    ]
////////////////////////////////////////////////////////////////
//post questions
////////////////////////////////////////////////////////////////
function displayQuestions() {
    var divContainer = $("#questions-box");
    divContainer.append('<h2>Answer the following questions:</h2>');
    for (var i = 0; i < questionVault.length; i++) {
        divContainer.append('<div id="question">' + questionVault[i].question + '</div>');
        var answer1 = questionVault[i].answers[0];
        var answer2 = questionVault[i].answers[1];
        var answer3 = questionVault[i].answers[2];
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer1 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer2 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer3 + '</label></div>');
    }
}
////////////////////////////////////////////////////////////////
// run the timer
////////////////////////////////////////////////////////////////
var myTimer = {
    timeRemaining: 10, //10 seconds
    startTimer: function () {
        $("#timer").text("Time remaining: " + myTimer.timeRemaining);
        setInterval(myTimer.countdown, 1000);
        $("#start-page").hide();
        displayQuestions();
    },
    countdown: function () {
        myTimer.timeRemaining--;
        $("#timer").text("Time remaining: " + myTimer.timeRemaining);
        if (myTimer.timeRemaining === 0) {
            myTimer.stopTimer();
            $("#timer").empty();
        }
    },
    stopTimer: function () {
        clearInterval();
        checkAnswers();
    }
}
////////////////////////////////////////////////////////////////
//check answers submitted and post results
////////////////////////////////////////////////////////////////
function checkAnswers() {
    var correctAnswer;
    var userAnswer;
    var numCorrect = 0;
    var numIncorrect = 0;
    var numUnanswered = 0;

    for (var i = 0; i < questionVault.length; i++) {
        correctAnswer = questionVault[i].correct;
        userAnswer = $('input[id=radio' + i + ']:checked + label').text();
        if (userAnswer === correctAnswer) {
            numCorrect++;
        } else if (userAnswer === "") {
            numUnanswered++;
        } else if (userAnswer !== correctAnswer) {
            {
                numIncorrect++;
            }
        }
    }
        $("#end-page").show();
        $("#questions-box").empty();
        $("#timer").empty();
        $("#timer").hide();
        $("#correct-answers").text("Correct: " + numCorrect);
        $("#incorrect-answers").text("Incorrect: " + numIncorrect);
        $("#unanswered").text("Not Answered: " + numUnanswered);
}