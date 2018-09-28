// Tackle tonight's homework one function at a time from start to finish.
// Write the correct DOM manipulatory code inside the function and check that it works.
// NOTE: Each function depends on the previous ones, so make sure your function works before moving on to 
// the next one!

// Every time you refresh the browser, you will have to click the buttons one by one in order from the 
// beginning to operate your application. (If really don't want the popups after you've completed a step, 
// you can check to disable each popup and speed up the process of debugging).

// Commit your work after each function is complete and working properly

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
// HINT: Make a console.log for each of your functions to make sure that, when you click, the correct 
// function is being called!

  // 1. create a section tag with an id of middle-earth
  const makeMiddleEarth = () => {
  const $middleEarth = $('<section/>')
  $middleEarth.attr('id', 'middle-earth');
  // 2. append the section to the body of the DOM.
  $('body').append($middleEarth);
// 3. use a for loop to iterate over the lands array that does the following:
for(let i = 0; i < lands.length; i++) {
    //   3a. creates an article tag (there should be one for each land when the loop is done)
  const $land = $('<article/>');
    //   3b. gives each land article an `id` tag of the corresponding land name
  $land.attr('id', lands[i]);
    //   3c. includes an h1 with the name of the land inside each land article
  $land.append(`<h1>${lands[i]}</h1>`);
    //   3d. appends each land to the middle-earth section
  $middleEarth.append($land);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

const makeHobbits = () => {
  const $hobbitList = $('<ul class="hobbits"></ul>')
  hobbits.forEach((hobbit) => {
    // console.log('hobbit');
    const $hobbit = $('<li/>')
    $hobbit.text(hobbit);
    $hobbit.addClass('hobbit');
    // $('.hobbit').append($hobbitList)
    $hobbit.appendTo($hobbitList);
  })
  $('#The-Shire').append($hobbitList);
}
//   // 1. display an unordered list of the hobbits in the shire.

//    // hint: create a 'ul' outside the loop upon which to append the 'li's
//    // 2. give each hobbit a class of "hobbit"

//    // losing the code below

  // hint: get 'The-Shire' by using its id

// };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  const $ring = $('<div/>').attr('id', 'the-ring');
  const $frodo = $('.hobbit:contains("Frodo")');
  $frodo.append($ring);
}

  // 1. create an empty div with an id of 'the-ring'

  // 2. add the ring as a child of Frodo

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain 
  // class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

// };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
    const $baddyList = $('<ul class="baddies"></ul>')
    baddies.forEach((baddy) => {
      // console.log('hobbit');
      const $baddy = $('<li/>').text(baddy).addClass('baddy');
      // $('.hobbit').append($hobbitList)
      $baddy.appendTo($baddyList);
    })
    $('#Mordor').append($baddyList);
  }
  // 1. display an unordered list of baddies in Mordor

  // 2. give each of the baddies a class of "baddy"

//   // 3. remember to append them to Mordor
// };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  const $buddyAside = $('<aside class="buddies"></aside>');
  const $buddyList = $('<ul class="buddy-list"></ul>');
  buddies.forEach((buddy) => {
    const $buddy = $('<li/>').text(buddy).addClass('buddy');
    // $('.hobbit').append($hobbitList)
    $buddy.appendTo($buddyList);
  });
  $buddyAside.append($buddyList);
  $('#middle-earth').append($buddyAside);

  // 1. create an aside tag and append it to middle-earth below mordor

  // 2. display an unordered list of buddies in the aside

  // 3. give each of the buddies a class of "buddy"

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {
    // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
$('.hobbit').parent().appendTo('#middle-earth #Rivendell');

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
    // 1. change the buddy 'Strider' textnode to "Aragorn"
$('.buddy:contains("Strider")').text('Aragorn');

  // hint: You can get a list of elements by tag name, such as 'aside'
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  // 1. create a new div with an id 'the-fellowship'
  const $thefellowship = $('<div/>').attr('id', 'the-fellowship');
  // 2. add an h1 with the text 'The Fellowship' to this new div
  $thefellowship.append('<h1>The Fellowship</h1>');
  // 3. append the fellowship to middle-earth
  $thefellowship.append($(".hobbits"));
  $thefellowship.append($(".buddies"));
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
$('#middle-earth').append($thefellowship);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
  $('.buddy:contains("Gandalf the Grey")').text('Gandalf the White').addClass("the-white");
  // 2. add a class "the-white" to this element
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// // ============
const hornOfGondor = () => {
   // 1. create a pop-up alert that the horn of gondor has been blown
alert("The Horn of Gondor has been blown");
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  $('.buddy:contains("Boromir")').css("text-decoration", "line-through");
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  $('.baddy:contains("The Uruk-hai")').remove();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// // ============
const itsDangerousToGoAlone = () => {
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside 
  // a ul in Mordor)

  // 2. add a div with an id of 'mount-doom' to Mordor

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom 
// has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor

  // 2. Move the ring from Frodo and give it to Gollum

  // 3. Move Gollum into Mount Doom

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete - Gollum and the ring are gone, the baddies are 
// done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {
  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
  $('#1').click();
  $('#2').click();
  $('#3').click();
  $('#4').click();
  $('#5').click();
  $('#6').click();
  $('#7').click();
  $('#8').click();
  $('#9').click();
});