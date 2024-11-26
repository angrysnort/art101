// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// November 2024
// License: Public Domain

$(document).ready(function () {
  // A click event on the button!
  $('#button').click(function () {
      // Using the core $.ajax() method
      $.ajax({
           // The URL for the request (from the api docs)
          url: "https://yesno.wtf/api",
          // There is no extra data for this API.
          // Whether this is a POST or GET request
          type: "GET",
          // The type of data we expect back
          dataType: "json",
              // What do we do when the api call is successful.
              // All the action goes in here:
          success: function (data) {
              // Display the answer and image in the #output div
              // Got the data.answer from the "answer" GET on the API's endpoint.
              // Got the data.image from the "image" GET on the API's endpoint.
              // The 'data.' is a JS object that calls on parts of the API to return things. Credit to ChatGPT for helping me find this.
              $('#output').html(`
                  <p>Answer: <strong>${data.answer}</strong></p>
                  <img src="${data.image}" alt="${data.answer}" style="max-width: 300px;">
              `);
          },
          // What we do if the api call fails:
          error: function (jqXHR, textStatus, errorThrown) { 
          // Do stuff
          console.log("Error:", textStatus, errorThrown);
          }
      });
  });
});