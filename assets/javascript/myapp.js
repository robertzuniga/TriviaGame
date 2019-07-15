console.log('TEST TEST TEST');

$(document).ready(function() {
    console.log( "ready!" );

    let countDown = 5;
    $("#timer").text(countDown);
    
    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
        if (countDown === 0) {
            console.log("We\'re done counting down!");
            var question1 = $('#question1 input:radio:checked').val()
            $("#timer").text(`Answer to Question 1: ${question1}`);
        }
        else {
            $("#timer").text(--countDown);
        }
    }
});