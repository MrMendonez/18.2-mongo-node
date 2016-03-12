$(document).ready(function() {
  console.log("This worked!");

  $.getJSON("/all", function(data) {
    for(var i = 0; i < data.length; i++) {
      var newTr = "<tr>";
      newTr += "<td>" + data[i].name + "</td>";
      newTr += "<td>" + data[i].numlegs + "</td>";
      newTr += "<td>" + data[i].class + "</td>";
      newTr += "<td>" + data[i].weight + "</td>";
      newTr += "<td>" + data[i].whatIWouldReallyCallIt + "</td>";
      newTr += "</tr>";
      $('#results tbody').append(newTr);
    }
  })

  $("button.sort").on("click", function() {
    // get and log to the console data from the /weight endpoint
    $.getJSON("/" + $(this).val(), function(data) {
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
        console.log("A button was clicked!");
      }
    })
  });

});