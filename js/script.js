/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


 // quotes array that holds object properties.

const quotes = [
  {
    quote: 'I am thankful for my struggle because without it, I would not have stumbled across my strength.',
    source: 'Alex Elle',
    role: 'Author',
    citation: 'Country Living',
    year: 2020
  },
  {
    quote: 'Women belong in all places where decisions are being made. It should not be that women are the exception.',
    source: 'Ruth Bader Ginsburg',
    role: 'Judge',
    citation: 'Country Living',
    year: 2003
  },
  {
    quote: 'I found that ultimately if you truly pour your heart into what you believe in even if it makes you vulnerable amazing things can and will happen.',
    source: 'Emma Watson',
    role: 'Actor',
    citation: 'Country Living',
    year: 2010
  },
  {
    quote: 'She does not know what the future holds, but she is grateful for slow and steady growth.',
    source: 'Morgan Harper Nichols',
    role: 'Artist',
    citation: 'Country Living',
    year: 2014
  },
  {
    quote: 'We do not need magic to transform our world. We carry all of the power we need inside ourselves already.',
    source: 'J.K Rowling',
    role: 'Author',
    citation: 'Country Living',
    year: 2008
  },
  {
    quote: 'The way I see it, if you want the rainbow, you gotta put up with the rain!',
    source: 'Dolly Parton',
    role: 'Singer',
    citation: 'Country Living',
    year: 2005
  },
];

/***
 * `getRandomQuote` function
***/
//getrandomQuotes function gets a random quote from the array
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  for (let i = 0; i < quotes.length; i++) {
    let randomObject = quotes[randomNumber];
    return randomObject;
 }
}

// 1. Create a variable that generates a random number
// between zero and the last index in the `quotes` array

// 2. Use the random number variable and bracket notation 
// to grab a random object from the `quotes` array, and 
// store it in a variable

// 3. Return the variable storing the random quote object


/***
 * `printQuote` function
***/
// printQuote function will call the getRandomQuotes function and print on page

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  //let backgroundColor= randomBackGround(colors);
  let html ="";
  html += "<p class = 'quote' >" + randomQuote.quote + "</p>";
  html += "<p class = 'source' >" + randomQuote.source ;
  html += "<p class = 'role' >" + randomQuote.role ;

  if (randomQuote.citation) {
    html += "<span class = 'citation'>" + randomQuote.citation + "</span>";
  }
  if (randomQuote.year) {
    html += "<span class = 'year'> "+ randomQuote.year + "</span>"
  }
  html+="</p>";
  const quoteBox =document.getElementById("quote-box");
  const body =document.querySelector('body');// grabs the body element 
  body.style.backgroundColor= randomBackGround();// updates the body color to a new background color
  quoteBox.innerHTML=html;
  document

  return html;
}

//Extra credit 
//auto refreshes the quotes using setInterval method every 10 seconds.
setInterval(printQuote,10000)

// a function  to get a random backgroundcolor
var colors = ['purple', 'pink', 'fuscia', 'coral', 'rose', 'red'];
function randomBackGround(){
  let randomColor = Math.floor(Math.random()* colors.length)
  for (let i = 0; i < colors.length; i++) {
    let randomBack = colors[randomColor];
    return randomBack;
}
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);