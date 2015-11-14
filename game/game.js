// Hangman

//Pseudocode
//Define an array of common idioms
// Create a function that generates a random index number within an array of idioms and assign it to a variable
// create a function that saves the string at that index number as answer
// create a function that alters the string to replace all letters with a different symbol (like a question mark, but leaves spaces). Assign this to current_display

// create a function that requests a guess of a letter and assigns it to current guess

//Compare letter to current answer to see if it contains the letter. If the letter is contained, replace the same index in the current display array with the letter. Else, add the letter to an array called wrong_guesses

// create a function called guess that accepts a string and compares it to the current answer. If it is the same, "you  win!" if it is different, add the string to the wrong guesses array.

// create a function called new game that clears out the wrong guesses, and runs the new random number function, etc.

var answer = ""
var main_guess = ""
var cipher = ""
var wrong_guesses = [];
var current_guess = "";
var $win = $('<div class="overlay result">YOU WIN!</div><div class="overlay shade"></div>');
var $lose = $('<div class="overlay result">YOU LOSE!</div><div class="overlay shade"></div>');

//Define an array of common idioms
var common_idioms = ["A bitter pill","A dime a dozen","Ace in the hole","Achilles' heel","Actions speak louder than words","Add insult to injury","All ears","All thumbs","An arm and a leg","Apple of discord","At the drop of a hat","Back to the drawing board","Ball is in your court","Barking up the wrong tree","Basket case","Beat around the bush","Best of both worlds","Bite off more than one can chew","Bite the bullet","Bite the dust","Break a leg","Burn the midnight oil","Bust one's chops","By the seat of one's pants","By the skin of one's teeth","Call it a day","Cat nap, Chalk up","Chomp at the bit","Chew the fat","Chink in your armor","Clam up","Cold shoulder","Couch potato","Cut a rug","Cut the cheese","Cut the mustard","Don't have a cow ","Drop a dime ","Fit as a fiddle","For a song","From A to Z","To make from scratch","Get bent out of shape","Have a blast","Have eyes in the back of one's head ","Hit the road ","Hit the sack ","Let the cat out of the bag","Kick the bucket","No horse in this race","Off your rocker","Off the hook","Piece of cake","Pulling my leg","Pushing up daisies","Put the cat among the pigeons","Right as rain","Shoot the breeze","Sleep with the fishes","Spill the beans","Take the cake","Through thick and thin","Pick your nose","Tie one on","Steal your thunder","Under the weather","Whole nine yards","X Marks the spot"]

var images =[
"../imgs/hangman/hangman-0.png",
"../imgs/hangman/hangman-1.png",
"../imgs/hangman/hangman-2.png",
"../imgs/hangman/hangman-3.png",
"../imgs/hangman/hangman-4.png",
"../imgs/hangman/hangman-5.png",
"../imgs/hangman/hangman-6.png",
]


// Create a function that generates a random index number within an array of idioms
var random_index = function() {
  return Math.floor(Math.random() * (common_idioms.length - 0) + 0);
};

// create a variable saves the string at that index number as answer


function update_answer() {
  answer = common_idioms[random_index()].toUpperCase();
};

// create a function that alters the string to replace all letters with a different symbol (like a question mark, but leaves spaces). Assign this to cipher


function update_cipher() {
  cipher = answer.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, "_");
  $( ".bottom p" ).html(cipher);
};


// create a function that requests a guess of a letter and assigns it to current guess
function update_current_guess() {
current_guess = $("#guess").val().toUpperCase();
console.log(current_guess)
right_or_wrong();
notify_right_or_wrong();
compare_letter_and_replace();
archive_wrong_guesses();
$( ".bottom p" ).html(cipher);
};

//Compare letter to current answer to see if it contains the letter. If the letter is contained, replace the same index in the current display array with the letter. Else, add the letter to an array called wrong_guesses

function right_or_wrong() {
  return answer.search(current_guess) !== -1
}; // end right_or_wrong

function notify_right_or_wrong() {
  if (right_or_wrong()) { console.log("Good Guess!")
  } else {
    console.log("Nope!")
  };
};

function compare_letter_and_replace() {
  if (right_or_wrong()) {
    for (i = 0; i < answer.length; i++) {
      if (current_guess === answer.charAt(i)) {
        cipher = cipher.substr(0, i) + current_guess + cipher.substr(i + 1);
      }; //end if
    }; //end for loop
  }; //end if
}; // end compare_letter

// create a function called guess that accepts a string and compares it to the current answer. If it is the same, "you  win!" if it is different, add the string to the wrong guesses array.

function update_main_guess() {
main_guess = window.prompt("Enter your guess for the saying here","...type the phrase").toUpperCase();
validate_main_guess();
};

function validate_main_guess() {
  if (main_guess === answer) {
    you_win();
  } else {
    archive_wrong_main_guesses();
  };
};

function archive_wrong_guesses() {
 if (right_or_wrong() !== true) {
  wrong_guesses.push(current_guess);
  next_image();
  if (wrong_guesses.length >= images.length -1){
    you_lose();
  }; //end if

  $( "#past_guesses" ).append('<li class="">' + current_guess + '</li>');

  }; // end if
}; //end archive_wrong_guesses

function archive_wrong_main_guesses() {
  wrong_guesses.push(main_guess);
  next_image();
  if (wrong_guesses.length >= images.length -1){
    you_lose();
  };

  $( "#past_guesses" ).append('<li class="">' + main_guess + '</li>');
};

// create a function called new game that clears out the wrong guesses, and runs the new random number function, etc.

function new_game() {
  wrong_guesses = [];
  update_answer();
  update_cipher();
  $( "#past_guesses" ).html(''); // clear past guesses from html
  $( "#hangman" ).attr("src", "../imgs/hangman/hangman-0.png"); // reset hangman picture
}

function you_win() {
  cipher = answer
  $( ".bottom p" ).html(cipher);
  $(".main-container").append($win).mousedown(function() {
    $(".overlay").hide()
    });
}

function you_lose() {
  cipher = answer
  $( ".bottom p" ).html(cipher);
  $(".main-container").append($lose).mousedown(function() {
  $(".overlay").hide()
  });
}

//initialization
$( document ).ready(function() {
    update_answer();
    update_cipher();
});

function next_image() {
  $( "#hangman" ).attr("src",images[wrong_guesses.length]);
}



// Button functionality
$("#submit").click(update_current_guess); // update guess
$("#submit").click(function() {
  $("#reset").click();
});

$( "#new_game" ).click(new_game);
$( "#main_guess" ).click(update_main_guess);
$( ".result" ).click($win.show);



// new_game();
// console.log(cipher);
// update_current_guess();
// console.log(cipher);

// JQUERY FUNCTIONALITY





