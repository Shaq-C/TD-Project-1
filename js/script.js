/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * Created `quotes` array of objects
***/
const quotes = [  
  {quote:'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.', 
   source:'Steve Jobs',
  },
  {quote: "Mama always said life was like a box of chocolates. You never know what you're gonna get", 
   source:'Tom Hanks',
   citation:'Forrest Gump', 
   year: 1994},
  {quote:'Carpe diem. Seize the day, boys. Make your lives extraordinary.', 
   source:'Robin Williams',
   citation:'Dead Poets Society', 
   year: 1989},
  {quote:'Who controls the past controls the future. Who controls the present controls the past.', 
   source:'George Orwell',
   citation:'Nineteen Eighty-Four', 
   year: 1949},
  {quote:'There is some good in this world, and it’s worth fighting for.', 
   source:'J.R.R. Tolkien',
   citation:'The Two Towers', 
  }

];


/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  //Created a variable that generates a random number
  let randomQuote = Math.floor(Math.random() * quotes.length);

  /*Used the random number variable and bracket notation to grab a random object from the 'quotes' array
  and assigned it to a new variable*/
  let qt = quotes[randomQuote];

  //Return the new variable.
  return qt;
}


/***
 * `printQuote` function
***/

function printQuote(){
  //Created a variable that calls the getRandomQuote() function
  let j = getRandomQuote();

  // Created a variable that initiates the HTML string 
  let html=''

  html = 
    `<p class="quote">${j.quote}` +
    `<p class="source">${j.source}`;

  /*Used an if statement to check if the citation or year property 
    exists, and if it does, concatenate a <span></span> 
    element, appropriate className, and citation property 
    to the HTML string */
    if ( j.citation ) {
      html += `<span class="citation">${j.citation}</span>`}
      if ( j.year ){ 
      html += `<span class="year">${j.year}</span>`}
    `</p>`
    
   /* Set the innerHTML of the quote-box div to equal the 
     complete HTML string*/     
  document.getElementById("quote-box").innerHTML = html;
  
}


document.getElementById('load-quote').addEventListener("click", printQuote, false);