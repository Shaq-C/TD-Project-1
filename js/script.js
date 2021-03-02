/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [  
  {quote:'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.', 
   source:'Steve Jobs',
   citation:'Motivating thoughts of Steve Jobs', 
   year: 2009},
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
   year: 1954}

];


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  let qt = quotes[randomQuote];
  return qt;
}


/***
 * `printQuote` function
***/
function printQuote(){
  let j = getRandomQuote();
  let html=''
  html = 
    `<p class="quote">${j.quote}` +
    `<p class="source">${j.source}`;
      if ( j.citation == true ) {
      html + `<span class="citation">${j.citation}</span>`}
      if ( typeof j.year == Number){ 
      html +`<span class="year">${j.year}</span>`}
    `</p>`
    
        
  document.getElementById("quote-box").innerHTML = html;
  
}
console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);