$(document).ready(function(){

    $("#start").click, function(event) {
        var clickedTime = $("#range").val();
        var submittedGoal = $("#bb").val().trim();
        
        alert("Clicked Time is " + clickedTime);
        console.log("Submitted Goal is " + submittedGoal);

        if (submittedGoal === "") {
            alert("Please enter a goal");
        }
        
    };

});