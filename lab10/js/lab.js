// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// November 2024
// License: Public Domain

function generateRandomText() {
  const text = "Whenever I get a package of plain M&Ms, I make it my duty to continue the strength and robustness of the candy as a species. To this end, I hold M&M duels. Taking two candies between my thumb and forefinger, I apply pressure, squeezing them together until one of them cracks and splinters. That is the “loser,” and I eat the inferior one immediately. The winner gets to go another round. I have found that, in general, the brown and red M&Ms are tougher, and the newer blue ones are genetically inferior. I have hypothesized that the blue M&Ms as a race cannot survive long in the intense theater of competition that is the modern candy and snack-food world. Occasionally I will get a mutation, a candy that is misshapen, or pointier, or flatter than the rest. Almost invariably this proves to be a weakness, but on very rare occasions it gives the candy extra strength. In this way, the species continues to adapt to its environment. When I reach the end of the pack, I am left with one M&M, the strongest of the herd. Since it would make no sense to eat this one as well, I pack it neatly in an envelope and send it to M&M Mars, A Division of Mars, Inc., Hackettstown, NJ 17840-1503 U.S.A., along with a 3×5 card reading, “Please use this M&M for breeding purposes.” This week they wrote back to thank me, and sent me a coupon for a free 1/2 pound bag of plain M&Ms. I consider this “grant money.” I have set aside the weekend for a grand tournament. From a field of hundreds, we will discover the True Champion. There can be only one. ";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();
  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
