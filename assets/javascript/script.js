// Initialize Firebase
var config = {
    apiKey: "AIzaSyCNz5EwcDxwvNUZs7tCur0OX7UjMMEAtn4",
    authDomain: "trainscheduler-3757a.firebaseapp.com",
    databaseURL: "https://trainscheduler-3757a.firebaseio.com",
    storageBucket: "trainscheduler-3757a.appspot.com",
    messagingSenderId: "774913011279"
  }
firebase.initializeApp(config);


// VARIABLES
var database = firebase.database();

var trainName = "";
var destination = "";
var nextArrival = "";
var minutesAway = "";

$("#currentTrainSchedule").empty();

// FUNCTIONS + EVENTS
//$("#addTrain").on("click", function() {
function addTrainEntry() {

    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    nextArrival = $("#nextArrival").val().trim();
    minutesAway = $("#minutesAway").val().trim();

     database.ref().push({
          trainName: trainName,
          destination: destination,
          nextArrival: nextArrival,
          minutesAway: minutesAway,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

  // Output all of the new information into the Current Train Schedule section
      $("#currentTrainSchedule").append("<tr>");
      $("#currentTrainSchedule").append("<td>" + trainName + "</td>");
      $("#currentTrainSchedule").append("<td>" + destination + "</td>");
      $("#currentTrainSchedule").append("<td>" + nextArrival + "</td>");
      $("#currentTrainSchedule").append("<td>" + minutesAway + "</td>");
      $("#currentTrainSchedule").append("</tr>");

    // Clear sessionStorage
      sessionStorage.clear();

    // Store all content into sessionStorage
      sessionStorage.setItem("trainName", trainName);
      sessionStorage.setItem("destination", destination);
      sessionStorage.setItem("nextArrival", nextArrival);
      sessionStorage.setItem("minutesAway", minutesAway);

      // MAIN PROCESS + INITIAL CODE
      database.ref().on("child_added", function(snapshot) {
        console.log(snapshot.val().trainName);
        console.log(snapshot.val().destination);
        console.log(snapshot.val().nextArrival);
        console.log(snapshot.val().minutesAway);

      // update the variable with data from the database
      trainName = snapshot.val().trainName;
      destination = snapshot.val().destination;
      nextArrival = snapshot.val().nextArrival;
      minutesAway = snapshot.val().minutesAway;

      
    

      
    });

      $("#frmTrain")[0].reset();

  //});
}


// By default display the content from sessionStorage
//$("#currentTrainSchedule").empty();
//$("#currentTrainSchedule").append("<h2>" + sessionStorage.getItem("trainName"));
//$("#currentTrainSchedule").append("<h4>" + sessionStorage.getItem("destination"));
//$("#currentTrainSchedule").append("<h4>" + sessionStorage.getItem("nextArrival"));
//$("#currentTrainSchedule").append("<h4>" + sessionStorage.getItem("minutesAway"));


////////


