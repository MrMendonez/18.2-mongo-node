$(document).ready(function() {
  console.log("This worked!");

  $.getJSON("/all", function(data) {
    for(var i = 0; i < data.length; i++) {
      $('#results').append("<tr><td>" + data[i].name + "</td><td>" + data[i].numlegs + "</td><td>" + data[i].class + "</td><td>" + data[i].weight + "</td><td>" + data[i].whatIWouldReallyCallIt + "</td>");
    }
  })

  $("#weightsort").on("click", function() {
    // get and log to the console data from the /weight endpoint
    $.getJSON("/weight", function(data) {
      for(var i = 0; i < data.length; i++) {
        data[i];
      };
      console.log("Weight button clicked!");
    })
  });

  $("#namesort").on("click", function() {
    $.getJSON("/name", function(data) {
      console.log(data);
    })
    console.log("Name button clicked!");
  });
});