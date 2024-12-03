// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// December 2024
// License: Public Domain

// A global variable to be appended to in the getLatestComicNumber function and to be called on by the buttons.
let latestComic;
const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // We need to declare a proxy because XKCD's API is "restricted by CORS." It's global because it's used twice and redundant code grinds my gears.
// Essentially, this is how to fix the "Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://xkcd.com/1/info.0.json. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 200." error.

// Function to get the latest comic number
function getLatestComicNumber() {
  const url = `https://xkcd.com/info.0.json`; // Using the URL without a comic number in it is how we can get it to display today's comic.
  // We also need to declare the URL for later operator use.

  $.ajax({
      url: proxyUrl + url, // Connects the proxy to XKCD's API to stop pissing CORS off.
      type: "GET",
      dataType: "json",
      success: function(data) {
          latestComic = data.num; // Stores the 'num' (aka, the number of the comic (which will be today's comic)) from the API into the global variable.
          totalComics = data.num; // This variable is only used later, we're just making it for now. Just know it's necessary and will come back.
          getAndPutData(latestComic);  // Fetches and displays the latest comic and dictates that getAndPutData is called on page load.
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.error("Error fetching latest comic:", textStatus, errorThrown);
      }
  });
}

// Function to get the comic data and update the webpage.
function getAndPutData(comicNum) {
  const url = `https://xkcd.com/${comicNum}/info.0.json`; // Can't be a global variable because it's *ever so slightly different* than the other one.
  $.ajax({
      url: proxyUrl + url, // Same shit with the proxy.
      type: "GET",
      dataType: "json",
      success: function(comicObj) {
          console.log("API call successful:", comicObj); // Checks if shit is actually working.

          $("#output").empty(); // Clears the output div to refresh it and display the comics separately if the user scrolls through them.

          const section = $("<section></section>"); // Creates a section so everything is contained in a cute little box and nothing leaves it.
          const title = $("<h1></h1>").text(comicObj.title); // Draws the title from the API's JSON.
          section.append(title); 

          const comicImage = $("<img>") // Because images have two parts-- the image itself and its alt text-- packing it into a variable is just easier than calling everything multiple times.
              .attr("src", comicObj.img)
              .attr("alt", comicObj.alt)
          section.append(comicImage);

          const comicNumber = $("<p></p>").text(`Comic #${comicObj.num}`); // Ohhh yay, the goddamn dollar sign is back. THIS puts a caption below the image and tells users what number comic it is.
          section.append(comicNumber);

          const publishDate = `${comicObj.month}/${comicObj.day}/${comicObj.year}`; // Wow, isn't this a hot mess? XKCD is a wonderful guy and doesn't have his comics' JSONs organized with a real date tag, so we have to make some shit up with the provided separated tags. This raised hell.
          const dateInfo = $("<p></p>").text(`Published on: ${publishDate}`); // Calls our homebrewed date tag to tell the user when the comic was published.
          section.append(dateInfo);

          $("#output").append(section); // Packs it all cute into our output div.
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.error("Error:", textStatus, errorThrown);
      }
  });
}

// Calls the first function.
getLatestComicNumber();

// Button click listeners. These buttons call the getAndPutData function themselves whenever they're clicked, which is why we don't call it ourselves (getAndPutData is also called on page load due to it being called within the getLatestComicNumber function).
$("#buttonPrev").on("click", function() {
  if (latestComic > 1) {
      latestComic--;
      getAndPutData(latestComic);
      // Basically, if the latest comic/today's comic number is greater than one, the number will then be subtracted once by the function. Because all of XKCD's comics are in order, this displays the previous comic.
  }
});

$("#buttonNext").on("click", function() {
  if (latestComic < totalComics) { // Told you it was gonna come back.
      latestComic++;
      getAndPutData(latestComic);
      // Essentially, if the latest comic/today's comic number is less than the total amount of comics currently extant, we can add one to the number. Again, because of XKCD's numbering conventions, this displays the next comic.
      // This works because we are directly altering the latestComic value with the buttons' operators, but the totalComics is still storing the 'num' value from the JSON separately.
  }
});

// Wow, that was a lot. Something-something through hell and high water.