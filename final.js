"use strict";

var shortenedURL= document.location.search.replace(/^.*?=/," " );
var final= shortenedURL.replace(/%20/g, " ");  /*remove the white space*/
console.log(final);

document.getElementById("finalTitle").innerHTML = final; /*display input*/


const endpointURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=";
let finalAPI = endpointURL + final;


fetch(finalAPI)                    
    .then(
        function (response){  /*.then(response => response.json())*/
            return response.json();
        }
    )
    .then(
        function (data){ /*.then(data => console.log(data.query.search))*/
        console.log(data);
        var IDkeys = Object.keys(data.query.pages);
        var articleContent = data.query.pages[IDkeys].extract;
        var articleContentLineBreaks = articleContent.replace(/;\s*/g, ";\n\n");
        document.getElementById("articleContentID").innerHTML = articleContent;
    } 
);



/**allows user input on final page to use search box in header. */
/* This is copied from index.js*/
const endpointURL2 = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=";
var titleSearchResults;
var i;

const input = document.getElementById("userInputFinal");
input.addEventListener("keydown", function(event) { 
        if (event.key=="Enter"){
            event.preventDefault();
            getInputValue();
        }
});


function getInputValue(){  /***** creates url with user input after button click */
    let inputVal = document.getElementById("userInputFinal").value; 
    let longSearchURL = endpointURL2 + inputVal;


    fetch(longSearchURL)                    
        .then(
             function (response){  /*.then(response => response.json())*/
                return response.json();
             }
        )
        .then(
            function (data){ /*.then(data => console.log(data.query.search))*/
                var resultsIteration = "";
                var totalResults;
                for (i=0; i <(data.query.search).length; i++){
                   titleSearchResults = data.query.search[i].title;
                   
                   resultsIteration = resultsIteration + "&result" + i + "=" + titleSearchResults;
                }
                //window.location.href = "searchResults.html";  /*using local storages to pass data*/
                window.location.href = "searchResults.html" + "?inputValue=" + inputVal + resultsIteration;
            } 
        );
}


/* to fire hamburger menu and open it */
function turnOnOffHamburger() {   /*hamburger menu click action to open/close*/
    var x = document.getElementById("hamburgerNavigation");
    if (x.style.display === "inline") {
      x.style.display = "none";
    } else {
      x.style.display = "inline";
    }
}


/*to close hamburger menu pop up*/
/*be careful to note that these are ID's not classes -- easy mistake  */
document.onclick = function(Offhamburger){
    var hasHamburgerNavigation = false;
    for(var node = Offhamburger.target; node != document.body; node = node.parentNode){
        if(node.id == "hamburgerNavigationMenu" | node.id == "hamburger_onClick"){
          hasHamburgerNavigation = true;
          break;
        }
      }
  
    var x = document.getElementById("hamburgerNavigation");  
    if(hasHamburgerNavigation){
      console.log("inside");
    } else{
      console.log("outside");
      x.style.display = "none";
    }
}



/* to expand search window, input box in for small screens after clicking search icon*/
function expandSearch(){
  console.log("yes yes");
  var x = document.getElementById("magnifierIconWrapperID");
  x.style.display = "inline";
}

function closeSearch(){
  var x = document.getElementById("magnifierIconWrapperID");
  x.style.display = "none";
}




/**allows user input in responsive /small screen input. */
/*this is copied from above with different ID*/
const endpointURL3 = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=";
var titleSearchResults2;
var y;

const input2 = document.getElementById("userInputFinalResponsiveSearch");
input2.addEventListener("keydown", function(event) { 
        if (event.key=="Enter"){
            event.preventDefault();
            getInputValue2();
        }
});


function getInputValue2(){  /***** creates url with user input after button click */
    let inputVal2 = document.getElementById("userInputFinalResponsiveSearch").value; 
    let longSearchURL = endpointURL3 + inputVal2;


    fetch(longSearchURL)                    
        .then(
             function (response){  /*.then(response => response.json())*/
                return response.json();
             }
        )
        .then(
            function (data){ /*.then(data => console.log(data.query.search))*/
                var resultsIteration = "";
                var totalResults;
                for (y=0; y <(data.query.search).length; y++){
                   titleSearchResults2 = data.query.search[y].title;
                   
                   resultsIteration = resultsIteration + "&result" + y + "=" + titleSearchResults2;
                }
                //window.location.href = "searchResults.html";  /*using local storages to pass data*/
                window.location.href = "searchResults.html" + "?inputValue=" + inputVal2 + resultsIteration;
            } 
        );
}



