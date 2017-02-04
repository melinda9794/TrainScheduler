// Initialize Firebase
var config = {
    apiKey: "AIzaSyCNz5EwcDxwvNUZs7tCur0OX7UjMMEAtn4",
    authDomain: "trainscheduler-3757a.firebaseapp.com",
    databaseURL: "https://trainscheduler-3757a.firebaseio.com",
    storageBucket: "trainscheduler-3757a.appspot.com",
    messagingSenderId: "774913011279"
  };
firebase.initializeApp(config);


// VARIABLES
var database = firebase.database();

var trainName = "";
var destination = "";
var nextArrival = "";
var minutesAway = "";


// FUNCTIONS + EVENTS
$("#addTrain").on("click", function() {

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


// MAIN PROCESS + INITIAL CODE
database.ref().on("child_added", function(snapshot) {
    console.log(childSnapshot.val().trainName);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().nextArrival);
    console.log(childSnapshot.val().minutesAway);

  // update the variable with data from the database
  trainName = snapshot.val().trainName;
  destination = snapshot.val().destination;
  nextArrival = snapshot.val().nextArrival;
  minutesAway = snapshot.val().minutesAway;


 // Capture Button Click
     $("#runSearch").on("click", function(event) {
// don't refresh the page
      event.preventDefault();
// Replaces the content in the "currentTrainSchedule" div
      $("#currentTrainSchedule").empty();

// Output all of the new information into the Current Train Schedule section
      $("#currentTrainSchedule").append("<h1>" + trainName);
      $("#currentTrainSchedule").append("<h4>" + destination);
      $("#currentTrainSchedule").append("<h4>" + nextArrival);
      $("#currentTrainSchedule").append("<h4>" + minutesAway);

// Clear sessionStorage
      sessionStorage.clear();

// Store all content into sessionStorage
      sessionStorage.setItem("trainName", trainName);
      sessionStorage.setItem("destination", destination);
      sessionStorage.setItem("nextArrival", nextArrival);
      sessionStorage.setItem("minutesAway", minutesAway);
        });

  // By default display the content from sessionStorage
      $("#currentTrainSchedule").empty();
      $("#currentTrainSchedule").append("<h2>" + sessionStorage.getItem("trainName"));
      $("#currentTrainSchedule").append("<h4>" + sessionStorage.getItem("destination"));
      $("#currentTrainSchedule").append("<h4>" + sessionStorage.getItem("nextArrival"));
      $("#currentTrainSchedule").append("<h4>" + sessionStorage.getItem("minutesAway"));


////////


