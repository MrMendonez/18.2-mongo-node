$(document).ready(function() {
  console.log("This worked!");

  $("#weightsort").on("click", function() {
    // get and log to the console data from the /weight endpoint
    $.getJSON("/weight", function(data) {
      console.log(data);
    })
    console.log("Weight button clicked!");
  });

  $("#namesort").on("click", function() {
    $.getJSON("/name", function(data) {
      console.log(data);
    })
    console.log("Name button clicked!");
  });
})