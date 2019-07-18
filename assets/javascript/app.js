


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

    console.log(schedule);

    // Code in the logic for storing the most recent schedule.
    database.ref().set(schedule);
  });
  

  // trainprediction code calculations
  
function timeConverter(frequency, trainTime) {
  var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
}


  database.ref().on("value", function (snap) {
    var dbschedule = snap.val();
    $("#trainName-display").text(dbschedule.trainName);
    $("#destination-display").text(dbschedule.destination);
    $("#trainTime-display").text(dbschedule.trainTime);
    $("#frequency-display").text(dbschedule.frequency);

    //create another div that stores the nextTimeArrival
    //$("#NextTime").append(timeconverter(dbschedule.frequency, dbschedule.trainTime))
  }, function(err) {
    console.log("Error: " + err.code);
  });
  
