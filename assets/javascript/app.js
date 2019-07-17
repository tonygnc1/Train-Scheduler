


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
      trainTime: $("#trainTime-input").val().trim(),
      frequency: $("#frequency-input").val().trim()
    };
    // Code in the logic for storing the most recent user.
    db.ref().set(login);
  });
  // Don't forget to provide initial data to your Firebase database.
  // Firebase watcher + initial loader HINT: .on("value")
  db.ref().on("value", function (snap) {
    var schedule = snap.val();
    $("#trainName-display").text(schedule.trainName);
    $("#destination-display").text(schedule.destination);
    $("#trainTime-display").text(schedule.trainTime);
    $("#frequency-display").text(schedule.frequency);
  }, function(err) {
    console.log("Error: " + err.code);
  });
  
