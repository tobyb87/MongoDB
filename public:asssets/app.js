
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display info on page
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
  }
});


// Click p tag
$(document).on("click", "p", function() {
  // remove / empty note
  $("#notes").empty();
  // id save
  var thisId = $(this).attr("data-id");

  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // add note
    .done(function(data) {
      console.log(data);
      // title of the article
      $("#notes").append("<h2>" + data.title + "</h2>");
      // new title
      $("#notes").append("<input id='titleinput' name='title' >");
      // new note body
      $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
      // A button to submit a new note
      $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
      // A button to save the article
      $("#notes").append("<button data-id='" + data._id + "' id='saveArticle'>Save Article</button>");
      // If there's a note in the article
      if (data.note) {
        // Place the title of the note 
        $("#titleinput").val(data.note.title);
        // Place the body of the note in the body
        $("#bodyinput").val(data.note.body);
      }
    });
});

// click the savenote button
$(document).on("click", "#savenote", function() {
  // Grab the id 
  var thisId = $(this).attr("data-id");

  
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
     
      title: $("#titleinput").val(),
      
      body: $("#bodyinput").val()
    }
  })
   
    .done(function(data) {
     
      console.log(data);
      
      $("#notes").empty();
    });

  
  $("#titleinput").val("");
  $("#bodyinput").val("");
});
