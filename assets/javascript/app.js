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

var randomDate = "02/23/1999";
var randomFormat = "MM/DD/YYYY";
var convertedDate = moment(randomDate, randomFormat);
var tMinutesTillTrain = 0;

// Capture Button Click
$("#add-train").on("click", function (event) {

  event.preventDefault();

  moment.HTML5_FMT.TIME
  console.log($("#trainTime-input").val().trim())
  var schedule = {
    trainName: $("#trainName-input").val().trim(),
    destination: $("#destination-input").val().trim(),
    //update the traintime to the correct syntax
    trainTime: $("#trainTime-input").val().trim(),
    frequency: $("#frequency-input").val().trim()
  };

   // Code in the logic for storing the most recent schedule.
  database.ref().push(schedule);

  // Clear the textbox when done
  $("#trainName-input").val("");
  $("#destination-input").val("");
  $("#trainTime-input").val("");
  $("#frequency-input").val("");
});

database.ref().on("child_added", function (snap) {
  var dbschedule = snap.val();
  var trainName = dbschedule.trainName;
  var destination = dbschedule.destination;
  var firstTime = dbschedule.trainTime;
  var tFrequency = dbschedule.frequency;

  console.log(dbschedule);
  var Remainder = "0";

  // First Time (pushed back 1 year to make sure it comes before current time)
  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
  console.log(firstTimeConverted);

  // Current Time
  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

  // Difference between the times
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);

  // Time apart (remainder)
  var tRemainder = diffTime % tFrequency;
  console.log(tRemainder);

  // Minute Until Train
  var tMinutesTillTrain = tFrequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

  // Next Train
  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(tFrequency),
    $("<td>").text(tMinutesTillTrain),
    $("<td>").text(moment(nextTrain).format('hh:mm')),
  );
  // Append the new row to the table
  $("tbody").append(newRow);

}, function (err) {
  console.log("Error: " + err.code);
});

// 

