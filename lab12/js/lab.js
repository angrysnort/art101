// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// November 2024
// License: Public Domain

// I am not doing anything Harry Potter related because fuck JKR, so I'm doing cheese instead.
// The cheeses: Cheddar, Ghost Pepper Jack, Swiss and Mozzarella
// This is my original code before cleaning it up to use an array instead. The only function that survived the purge was theCheeseButton.
/*
function cheeseHat (str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Cheddar"
    }
    else if (mod == 1) {
        return "Ghost Pepper Jack"
    }
    else if (mod == 2) {
        return "Swiss"
    }
    else if (mod == 3) {
        return "Mozzarella"
    }
}

function cheeseDescription(cheese) {
    let cheeseDesc;
    if (cheese == "Cheddar") {
        cheeseDesc = "<p>You, my dairy bretheren, could be described as slightly nutty, but everyone in the room can recognize you. You're reliable, but you have a certain depth about you that goes unnoticed by many.</p>";
    }
    else if (cheese == "Ghost Pepper Jack") {
        cheeseDesc = "<p>You, my dairy bretheren, could be described as fiery and unapologetically bold, and you know you have an effect on people's nerves-- whether that be enjoyed or despised by them is up in the air.</p>";
    }
    else if (cheese == "Swiss") {
        cheeseDesc = "<p>You, my dairy bretheren, could be described as quirky and unpredictable, but open and vulnerable to all of your peers. You might be slightly misunderstood or an acquired taste, but those who love you LOVE you.</p>";
    }
    else if (cheese == "Mozzarella") {
        cheeseDesc = "<p>You, my dairy bretheren, could be described as warm and loveable to everyone around you. You're always welcomed in every space, but you might be a bit TOO soft sometimes.</p>";
    }
    document.getElementById("descOutput").innerHTML = cheeseDesc;
}
*/

var theCheeseButton = document.getElementById("button");
theCheeseButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var cheese = cheeseHat(name);
    document.getElementById("output").innerHTML = "<p>The Cheese Hat has determined what cheese you are. You are " + cheese + "!! Behold the unending wisdom of the Cheese Hat!!<br> Here is what your cheese says about you:</p>";
    cheeseDescription(cheese);
});

// Here begins the Array functions.

function cheeseHat(str) {
    const cheeses = ["Cheddar", "Ghost Pepper Jack", "Swiss", "Mozzarella"];
    // Thank you to ChatGPT for helping me figure out the logistics for this line in particular
    return cheeses[str.length % cheeses.length];
}

function cheeseDescription(cheese) {
    const descriptions = {
        "Cheddar": "<p>You, my dairy brethren, could be described as slightly nutty, but everyone in the room can recognize you. You're reliable, but you have a certain depth about you that goes unnoticed by many.</p>",
        
        "Ghost Pepper Jack": "<p>You, my dairy brethren, could be described as fiery and unapologetically bold, and you know you have an effect on people's nerves—whether that be enjoyed or despised by them is up in the air.</p>",
        
        "Swiss": "<p>You, my dairy brethren, could be described as quirky and unpredictable, but open and vulnerable to all of your peers. You might be slightly misunderstood or an acquired taste, but those who love you LOVE you.</p>",
        
        "Mozzarella": "<p>You, my dairy brethren, could be described as warm and lovable to everyone around you. You're always welcomed in every space, but you might be a bit TOO soft sometimes.</p>"
    };
}