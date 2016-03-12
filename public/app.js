$(document).ready(function() {
  console.log("This worked!");

  $.getJSON("/all", function(data) {
    for(var i = 0; i < data.length; i++) {
      $('#results tbody').append("<tr><td>" + data[i].name + "</td><td>" + data[i].numlegs + "</td><td>" + data[i].class + "</td><td>" + data[i].weight + "</td><td>" + data[i].whatIWouldReallyCallIt + "</td></tr>");
    }
  })

  $("#weightsort").on("click", function() {
    // get and log to the console data from the /weight endpoint
    $.getJSON("/weight", function(data) {
      $('#results tbody').empty();
      for(var i = 0; i < data.length; i++) {
          var newTr = "<tr>";
          newTr += "<td>" + data[i].name + "</td>";
          newTr += "<td>" + data[i].numlegs + "</td>";
          newTr += "<td>" + data[i].class + "</td>";
          newTr += "<td>" + data[i].weight + "</td>";
          newTr += "<td>" + data[i].whatIWouldReallyCallIt + "</td>";
          newTr += "</tr>";
          $('#results tbody').append(newTr);
        console.log("Weight button clicked!");
      }
    })
  });

  $("#namesort").on("click", function() {
    // get and log to the console data from the /name endpoint
    $.getJSON("/name", function(data) {
      $('#results tbody').empty();
      for(var i = 0; i < data.length; i++) {
        $('#results tbody').append("<tr><td>" + data[i].name + "</td><td>" + data[i].numlegs + "</td><td>" + data[i].class + "</td><td>" + data[i].weight + "</td><td>" + data[i].whatIWouldReallyCallIt + "</td></tr>");
        console.log("Weight button clicked!");
      }
    })
  });

});