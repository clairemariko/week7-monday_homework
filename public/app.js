// console.log("hello browser");

// //this should appear in our console. 

// var tagline = document.getElementById('tagline');
// tagline.innerHTML = 'New tagline';

//this wont work as DOM hasnt finished created the tree and loaded into the browser before we go in and start manipulating it . so we use a callback

window.onload = function(){

  // console.log("hello browser");
 var area = document.getElementById('quote-list');

  var quoteArray = [
  {author: "Jay",
    text: "Visual Basic is the way forward, I don't know why we are doing JavaScript."
  },
  {author: "Rick",
    text: "The only CSS you need to know is background-color: tomato"
  },
  { author: "Keith",
    text: "Are those hand-cut artisan crisps?"
  },
  {author: "Valerie",
    text:"Scaffolding is nothing but a fiery hell"
  }];
  
  var quotes = function(){
    for (var i = 0; i < quoteArray.length; i++){

      var blockQuote = document.createElement('blockQuote');
      blockQuote.innerText = quoteArray[i]["text"]

      var cite = document.createElement('cite');
      cite.innerText = quoteArray[i]["author"]

      var listOfQuotes = document.createElement('li')
  
 
 blockQuote.appendChild(cite);
 listOfQuotes.appendChild(blockQuote)
 area.appendChild(listOfQuotes);
    }
  }
 quotes();


 var form =document.getElementById('quote-form');
 var addQuote =document.getElementById('quote-text-input');
 var quotes =document.getElementById('quote-list');

 var handleClick = function(){
   var listOfQuotes = document.createElement('li');
   listOfQuotes.innerText = addQuote.value;
   quotes.appendChild(listOfQuotes);
  }

  form.onsubmit = function( event ){
    event.preventDefault();

    handleClick();
  }



};






// using a loppto get the odd and even quotes
//   now we want to attach it to the DOM
//   var quotes = document.getElementsByClassName('quote');
//   for (var i = 0; i < quotes.length; i++) {
//     if (i % 2 === h0){
//     quotes[i].style.color = "Tomato";
//     quotes[i].style.backgroundColor = "Wheat";
//   }
//   else{
//     quotes[i].style.color = "Wheat";
//     quotes[i].style.backgroundColor ="Tomato";
//     }
//   }
// var tagline = document.getElementById('tagline');
// tagline.innerHTML = 'New tagline';




//if we type window in our browser and then expand the object we see that onload is set to null. 

var quoteArticle = document.createElement('article');
quoteArticle.classList.add('quote');

//we have use the create method, which is a valid html tag and we have a classlist object on our article, so we are adding a new classlist called 'quote'. 
var blockQuote = document.createElement('blackQuote');
blockQuote.innerText = "new quote...."

//nothing should change in the browser we have just set them in dom.

var cite = document.createElement('cite');
cite.innerText = "Albert Einstein";

//so we have just declared these variable and use innertext is simply a string compared to inner html. 

blockQuote.appendChild(cite);
//if we appendchild it stick it on the end of that blockquote

quoteArticle.appendChild(blockQuote);



// Make even quotes wheat, and odd quotes tomato.
// Make text color to be tomato when wheat background and vice versa. Beautiful.
// Change the text on quote of the day to featured quotes.
// Add a new quote to the featured quotes.
