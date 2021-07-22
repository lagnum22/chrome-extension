console.log("hello");

console.log("HELLLOOOOOOOOOO!1!");

fetch(
  "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": "84582e5e59msh40d14621e3363cap156654jsn704614847e2d",
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    },
  }
)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });

//Goal: to get element div that is 400px by 400px to appear on screen

//create div and add the preset styling from css to it
const test = document.createElement("div");
test.classList.add("test-div");
//add sizing properties to element
//append it to the body of whichever site we go to
//create a variable to get documunt body
const domBody = document.querySelector("body");
//prepend the square to the body...it should affect the look of the page
domBody.prepend(test);

//Goal2: create a form for user to input data

//create user input box
const commentBox = document.createElement("form"); //creates form
commentBox.classList.add("comment-box");
test.appendChild(commentBox); //adds form to black div

const textInput = document.createElement("input"); //creates the input
textInput.type = "text";
textInput.placeholder = "Enter your query here";
textInput.classList.add("text-input");
commentBox.appendChild(textInput); //adds the text input to the form

const submitButton = document.createElement("button");
submitButton.classList.add("submit-button");
submitButton.innerText = "Submit";
test.appendChild(submitButton);

//...eventually, create eventlistener for submit button, and then we use api
