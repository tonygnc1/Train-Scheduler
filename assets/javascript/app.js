


// Variable to reference the database
var firebaseConfig = {
  apiKey: "AIzaSyACrcB6S9mnHIdJ6X6mJidILBa1pe_BoaI",
  authDomain: "click-button-9b66c.firebaseapp.com",
  databaseURL: "https://click-button-9b66c.firebaseio.com",
  projectId: "click-button-9b66c",
  storageBucket: "",
  messagingSenderId: "1055405648284",
  appId: "1:1055405648284:web:2b4b5796c1563cf8"
};

firebase.initializeApp(firebaseConfig);

//InitialValue
var database = firebase.database();

// Capture Button Click
$("#add-train").on("click", function (event) {

  event.preventDefault();

  var schedule = {
    trainName: $("#trainName-input").val().trim(),
    destination: $("#destination-input").val().trim(),
    //update the traintime to the correct syntax
    trainTime: $("#trainTime-input").val().trim(),
    frequency: $("#frequency-input").val().trim()
  };

  // console.log(schedule);

  // Code in the logic for storing the most recent schedule.
  database.ref().push(schedule);

  //  // Append the button to the to do item
  //  $("#add-user").prepend(schedule);
  //  // Add the button and to schedule 
  //  $("#add-user").append(schedule);

   // Clear the textbox when done
$("#trainName-input").val("");
$("#destination-input").val("");
$("#trainTime-input").val("");
$("#frequency-input").val("");
});


// trainprediction code calculations

function timeConverter(frequency, trainTime) {
  var tMinutesTillTrain = tFrequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
}


database.ref().on("value", function (snap) {
  var dbschedule = snap.val();

var trainName = dbschedule.trainName;
var destination = dbschedule.destination;
var trainTime = dbschedule.trainTime;
var frequency = dbschedule.frequency;

var newRow = $("<tr>").append(
  $("<td>").text(trainName),
  $("<td>").text(destination),
  $("<td>").text(trainTime),
  $("<td>").text(frequency)
);

// Append the new row to the table
$("tbody").append(newRow);

console.log(dbschedule);

}, function (err) {
  console.log("Error: " + err.code);
});


