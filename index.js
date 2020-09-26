"use strict";

const endpointURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=";
var titleSearchResults;
var i;


function getInputValue(){  /***** creates url with user input after clicking maginfying glass icon */
    let inputVal = document.getElementById("userInput").value; 
    let longSearchURL = endpointURL + inputVal;

    console.log("hello");

    /* the below is from final.js */
    fetch(longSearchURL)                    
        .then(
            function (response){  /*.then(response => response.json())*/
                return response.json();
            }
        )
        .then(
            function (data){ /*.then(data => console.log(data.query.search))*/
            var IDkeys = Object.keys(data.query.pages);
            var articleContent = data.query.pages[IDkeys].extract; 
            var resultsIteration = ""; 
            if (articleContent.includes("may refer to") | articleContent.includes("commonly refers to")) {
                console.log("multiple returns"); 
                const newEndpointURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=";
                const longSearchURL = newEndpointURL + inputVal;
    
                fetch(longSearchURL)                    
                    .then(
                    function (response){  /*.then(response => response.json())*/
                    return response.json();
                    }
                )

                .then(
                    function (data){ /*.then(data => console.log(data.query.search))*/
                        var totalResults;
                        for (i=0; i <(data.query.search).length; i++){
                           titleSearchResults = data.query.search[i].title;
                           
                           resultsIteration = resultsIteration + "&result" + i + "=" + titleSearchResults;
                        }
                        //window.location.href = "searchResults.html";  /*using local storages to pass data*/
                        window.location.href = "searchResults.html" + "?inputValue=" + inputVal + resultsIteration;
                    } 
                );
               
            } else {
                window.location.href = "final.html" + "?inputValue=" + inputVal + resultsIteration;;
            }

        } 
    );
    /* the above is from final.js */
}

/**allows user to input after pressing the return key. it then fires the above function*/
const input = document.getElementById("userInput"); 
input.addEventListener("keydown", function(event) {  /*"keydown" is important here*/
        if (event.key=="Enter"){
            event.preventDefault(); /*"stops default action of input box*/
            getInputValue();
        }
});





/******* below is a copy of the above code for the 2nd input box. **********************************/
/******* function name and id names have been changed  **********************************/  
function getInputValue2(){  /***** creates url with user input after clicking maginfying glass icon */
    let inputVal = document.getElementById("userInput2").value; 
    let longSearchURL = endpointURL + inputVal;

    /* the below is from final.js */
    fetch(longSearchURL)                    
        .then(
            function (response){  /*.then(response => response.json())*/
                return response.json();
            }
        )
        .then(
            function (data){ /*.then(data => console.log(data.query.search))*/
            var IDkeys = Object.keys(data.query.pages);
            var articleContent = data.query.pages[IDkeys].extract; 
            var resultsIteration = ""; 
            if (articleContent.includes("may refer to") | articleContent.includes("commonly refers to")) {
                console.log("multiple returns"); 
                const newEndpointURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=";
                const longSearchURL = newEndpointURL + inputVal;
    
                fetch(longSearchURL)                    
                    .then(
                    function (response){  /*.then(response => response.json())*/
                    return response.json();
                    }
                )

                .then(
                    function (data){ /*.then(data => console.log(data.query.search))*/
                        var totalResults;
                        for (i=0; i <(data.query.search).length; i++){
                           titleSearchResults = data.query.search[i].title;
                           
                           resultsIteration = resultsIteration + "&result" + i + "=" + titleSearchResults;
                        }
                        //window.location.href = "searchResults.html";  /*using local storages to pass data*/
                        window.location.href = "searchResults.html" + "?inputValue=" + inputVal + resultsIteration;
                    } 
                );
               
            } else {
                window.location.href = "final.html" + "?inputValue=" + inputVal + resultsIteration;;
            }

        } 
    );
    /* the above is from final.js */
}

/**allows user to input after pressing the return key. it then fires the above function*/
const input2 = document.getElementById("userInput2"); 
input2.addEventListener("keydown", function(event) {  /*"keydown" is important here*/
        if (event.key=="Enter"){
            event.preventDefault(); /*"stops default action of input box*/
            getInputValue2();
        }
});










