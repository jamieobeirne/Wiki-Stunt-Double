"use strict";


/*use query string to retrieve data in place of local stroage*/
var shortenedURL = document.location.search.replace(/^.*?=/," " );
var removeDataAfterTitle = shortenedURL.substring(0, shortenedURL.indexOf("&"));

var finalTitle = removeDataAfterTitle.replace(/%20/g, " ");  
/*remove the white space*/
document.getElementById("inputDisplay").innerHTML = finalTitle; 
/*display input topic at top*/


/* isolates each answer using .match and regular expressions */ 
var shortenedURLNoSpace= shortenedURL.replace(/%20/g, " ");  
var response1= shortenedURLNoSpace.match(/result1=([^&]*)/);
var response2= shortenedURLNoSpace.match(/result2=([^&]*)/);
var response3= shortenedURLNoSpace.match(/result3=([^&]*)/);
var response4= shortenedURLNoSpace.match(/result4=([^&]*)/);
var response5= shortenedURLNoSpace.match(/result5=([^&]*)/);
var response6= shortenedURLNoSpace.match(/result6=([^&]*)/);
var response7= shortenedURLNoSpace.match(/result7=([^&]*)/);
var response8= shortenedURLNoSpace.match(/result8=([^&]*)/);
var response9= shortenedURLNoSpace.match(/result9=([^&]*)/);


/*inserts each response into response page (2ndpage) */
document.getElementById("resultDisplay1").innerHTML = response1[1];
document.getElementById("resultDisplay2").innerHTML = response2[1];
document.getElementById("resultDisplay3").innerHTML = response3[1];
document.getElementById("resultDisplay4").innerHTML = response4[1];
document.getElementById("resultDisplay5").innerHTML = response5[1];
document.getElementById("resultDisplay6").innerHTML = response6[1];
document.getElementById("resultDisplay7").innerHTML = response7[1];
document.getElementById("resultDisplay8").innerHTML = response8[1];
document.getElementById("resultDisplay9").innerHTML = response9[1];


/*passing results to final.htmal */
/*passing results to final.htmal */
function finalResult1(){
    window.location.href = "final.html" + "?inputValue=" + response1[1];
}
function finalResult2(){
    window.location.href = "final.html" + "?inputValue=" + response2[1];
}
function finalResult3(){
    window.location.href = "final.html" + "?inputValue=" + response3[1];
}
function finalResult4(){
    window.location.href = "final.html" + "?inputValue=" + response4[1];
}
function finalResult5(){
    window.location.href = "final.html" + "?inputValue=" + response5[1];
}
function finalResult6(){
    window.location.href = "final.html" + "?inputValue=" + response6[1];
}
function finalResult7(){
    window.location.href = "final.html" + "?inputValue=" + response7[1];
}
function finalResult8(){
    window.location.href = "final.html" + "?inputValue=" + response8[1];
}
function finalResult9(){
    window.location.href = "final.html" + "?inputValue=" + response9[1];
}







/**allows user input on 2nd page to use search box in header. This is copied from index.js*/
const endpointURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=";
var titleSearchResults;
var i;

const input = document.getElementById("userInputPageTwo");
input.addEventListener("keydown", function(event) { 
        if (event.key=="Enter"){
            event.preventDefault();
            getInputValue();
        }
});


function getInputValue(){  /***** creates url with user input after button click */
    let inputVal = document.getElementById("userInputPageTwo").value; 
    let longSearchURL = endpointURL + inputVal;


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

const input2 = document.getElementById("userInputPageTwoResponsiveSearch");
input2.addEventListener("keydown", function(event) { 
        if (event.key=="Enter"){
            event.preventDefault();
            getInputValue2();
        }
});


function getInputValue2(){  /***** creates url with user input after button click */
    let inputVal2 = document.getElementById("userInputPageTwoResponsiveSearch").value; 
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

  
  









      





 



  