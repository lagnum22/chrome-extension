console.log("hello");

console.log("HELLLOOOOOOOOOO!1!");

//Goal 1: to get element div that is 400px by 400px to appear on screen

//add sizing properties to element
//append it to the body of whichever site we go to
//create a variable to get documunt body
const domBody = document.querySelector("div.body");
//prepend the square to the body...it should affect the look of the page
const popUp = document.createElement("div");
popUp.classList.add("pop-up");

domBody.appendChild(popUp);

//Goal 2: create a form for user to input data

const form = document.createElement("form"); //creates form
form.classList.add("form");

const textInput = document.createElement("input"); //creates the input
textInput.type = "text";
textInput.placeholder = "Enter your query here";
textInput.classList.add("text-input");

form.appendChild(textInput); //adds the text input to the form

const submitButton = document.createElement("button");
submitButton.classList.add("submit-button");
submitButton.innerText = "Submit";
//append both search form and submitbutton to pop-up
//create div inside the popup
const header = document.createElement("div");
header.classList.add("header");

header.appendChild(form);
header.appendChild(submitButton);
popUp.appendChild(header);
//...eventually, create eventlistener for submit button, and then we use api
const radioArray = document.getElementsByName("optradio");

submitButton.addEventListener("click", (e) => {
  let string = textInput.value;
  console.log("radio array: ", radioArray);
  let rating = "g";
  radioArray.forEach((setting) => {
    if (setting.checked === true) {
      rating = setting.value;
    }
  });
  console.log("rating: ", rating);
  //alert(string);
  //create randome number
  let random = Math.floor(Math.random() * 25);
  console.log("number ", random);
  //first arg of fetch is a url, in that url, there is a query string
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=Ko4SR2cn8W6ikTAtl0kkkcHDrGz8VE6f&q=${string}&limit=25&offset=0&rating=${rating}&lang=en`
  )
    .then((data) => data.json())
    .then((memes) => {
      //console.log(memes.data[0]);
      // console.log("source: ", memes.data[0].images.original.mp4);
      //create the image element
      const div = document.createElement("div");
      // div.innerHTML = memes.data[0].images.original.mp4;
      let imgSourceStr = memes.data[random].images.original.url;
      const img = document.createElement("img");

      img.src = imgSourceStr;
      img.classList.add("return-gif");
      console.log(img);
      //popUp.appendChild(div);
      popUp.appendChild(img);
    });
});

// =================Failed code==========================================
// fetch(
//   "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json",
//   {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "84582e5e59msh40d14621e3363cap156654jsn704614847e2d",
//       "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
//     },
//   }
// )
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// "data":
// [
//     {
//         "type": "gif",
//         "id": "fnmsu2lTw3r1e",
//         "url": "https://giphy.com/gifs/artists-on-tumblr-dinosaur-dinosaurs-fnmsu2lTw3r1e",
//         "slug": "artists-on-tumblr-dinosaur-dinosaurs-fnmsu2lTw3r1e",
//         "bitly_gif_url": "http://gph.is/1URu7Tc",
//         "bitly_url": "http://gph.is/1URu7Tc",
//         "embed_url": "https://giphy.com/embed/fnmsu2lTw3r1e",
//         "username": "",
//         "source": "http://wifflegif.com",
//         "title": "dinosaur GIF",
//         "rating": "g",
//         "content_url": "",
//         "source_tld": "wifflegif.com",
//         "source_post_url": "http://wifflegif.com",
//         "is_sticker": 0,
//         "import_datetime": "2016-06-14 16:19:38",
//         "trending_datetime": "1970-01-01 00:00:00",
//         "images":
//         {
//             "original":
//             {
//                 "height": "438",
//                 "width": "420",
//                 "size": "634631",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy.gif&ct=g",
//                 "mp4_size": "250191",
//                 "mp4": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy.mp4&ct=g",
//                 "webp_size": "370836",
//                 "webp": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy.webp&ct=g",
//                 "frames": "12",
//                 "hash": "2b3a4d8c6e51206d82f9ba4d2ef0ddc5"
//             },
//             "downsized":
//             {
//                 "height": "438",
//                 "width": "420",
//                 "size": "634631",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy.gif&ct=g"
//             },
//             "downsized_large":
//             {
//                 "height": "438",
//                 "width": "420",
//                 "size": "634631",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy.gif&ct=g"
//             },
//             "downsized_medium":
//             {
//                 "height": "438",
//                 "width": "420",
//                 "size": "634631",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy.gif&ct=g"
//             },
//             "downsized_small":
//             {
//                 "height": "394",
//                 "width": "377",
//                 "mp4_size": "78943",
//                 "mp4": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy-downsized-small.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy-downsized-small.mp4&ct=g"
//             },
//             "downsized_still":
//             {
//                 "height": "438",
//                 "width": "420",
//                 "size": "634631",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy_s.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy_s.gif&ct=g"
//             },
//             "fixed_height":
//             {
//                 "height": "200",
//                 "width": "192",
//                 "size": "160767",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/200.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200.gif&ct=g",
//                 "mp4_size": "52661",
//                 "mp4": "https://media2.giphy.com/media/fnmsu2lTw3r1e/200.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200.mp4&ct=g",
//                 "webp_size": "116672",
//                 "webp": "https://media2.giphy.com/media/fnmsu2lTw3r1e/200.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200.webp&ct=g"
//             },
//             "fixed_height_downsampled":
//             {
//                 "height": "200",
//                 "width": "192",
//                 "size": "67635",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/200_d.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200_d.gif&ct=g",
//                 "webp_size": "49556",
//                 "webp": "https://media2.giphy.com/media/fnmsu2lTw3r1e/200_d.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200_d.webp&ct=g"
//             },
//             "fixed_height_small":
//             {
//                 "height": "100",
//                 "width": "96",
//                 "size": "53636",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/100.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100.gif&ct=g",
//                 "mp4_size": "17607",
//                 "mp4": "https://media2.giphy.com/media/fnmsu2lTw3r1e/100.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100.mp4&ct=g",
//                 "webp_size": "42490",
//                 "webp": "https://media2.giphy.com/media/fnmsu2lTw3r1e/100.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100.webp&ct=g"
//             },
//             "fixed_height_small_still":
//             {
//                 "height": "100",
//                 "width": "96",
//                 "size": "5203",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/100_s.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100_s.gif&ct=g"
//             },
//             "fixed_height_still":
//             {
//                 "height": "200",
//                 "width": "192",
//                 "size": "14377",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/200_s.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200_s.gif&ct=g"
//             },
//             "fixed_width":
//             {
//                 "height": "209",
//                 "width": "200",
//                 "size": "172612",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/200w.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200w.gif&ct=g",
//                 "mp4_size": "57548",
//                 "mp4": "https://media2.giphy.com/media/fnmsu2lTw3r1e/200w.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200w.mp4&ct=g",
//                 "webp_size": "122962",
//                 "webp": "https://media2.giphy.com/media/fnmsu2lTw3r1e/200w.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200w.webp&ct=g"
//             },
//             "fixed_width_downsampled":
//             {
//                 "height": "209",
//                 "width": "200",
//                 "size": "72398",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/200w_d.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200w_d.gif&ct=g",
//                 "webp_size": "53634",
//                 "webp": "https://media2.giphy.com/media/fnmsu2lTw3r1e/200w_d.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200w_d.webp&ct=g"
//             },
//             "fixed_width_small":
//             {
//                 "height": "105",
//                 "width": "100",
//                 "size": "57875",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/100w.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100w.gif&ct=g",
//                 "mp4_size": "19098",
//                 "mp4": "https://media2.giphy.com/media/fnmsu2lTw3r1e/100w.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100w.mp4&ct=g",
//                 "webp_size": "45916",
//                 "webp": "https://media2.giphy.com/media/fnmsu2lTw3r1e/100w.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100w.webp&ct=g"
//             },
//             "fixed_width_small_still":
//             {
//                 "height": "105",
//                 "width": "100",
//                 "size": "5551",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/100w_s.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100w_s.gif&ct=g"
//             },
//             "fixed_width_still":
//             {
//                 "height": "209",
//                 "width": "200",
//                 "size": "15496",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/200w_s.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200w_s.gif&ct=g"
//             },
//             "looping":
//             {
//                 "mp4_size": "2949141",
//                 "mp4": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy-loop.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy-loop.mp4&ct=g"
//             },
//             "original_still":
//             {
//                 "height": "438",
//                 "width": "420",
//                 "size": "55706",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy_s.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy_s.gif&ct=g"
//             },
//             "original_mp4":
//             {
//                 "height": "500",
//                 "width": "480",
//                 "mp4_size": "250191",
//                 "mp4": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy.mp4&ct=g"
//             },
//             "preview":
//             {
//                 "height": "208",
//                 "width": "199",
//                 "mp4_size": "30815",
//                 "mp4": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy-preview.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy-preview.mp4&ct=g"
//             },
//             "preview_gif":
//             {
//                 "height": "90",
//                 "width": "86",
//                 "size": "48853",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy-preview.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy-preview.gif&ct=g"
//             },
//             "preview_webp":
//             {
//                 "height": "128",
//                 "width": "122",
//                 "size": "46926",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/giphy-preview.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy-preview.webp&ct=g"
//             },
//             "480w_still":
//             {
//                 "height": "501",
//                 "width": "480",
//                 "size": "634631",
//                 "url": "https://media2.giphy.com/media/fnmsu2lTw3r1e/480w_s.jpg?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=480w_s.jpg&ct=g"
//             }
//         },
//         "analytics_response_payload": "e=Z2lmX2lkPWZubXN1MmxUdzNyMWUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0yZTg2MjBmYTN5eXY0ZnRlenVzbWlnaWQ2ZmdvcmlzcnFoaDlsZjhhZjFvOTR1bXYmY3Q9Z2lm",
//         "analytics":
//         {
//             "onload":
//             {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWZubXN1MmxUdzNyMWUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0yZTg2MjBmYTN5eXY0ZnRlenVzbWlnaWQ2ZmdvcmlzcnFoaDlsZjhhZjFvOTR1bXYmY3Q9Z2lm&action_type=SEEN"
//             },
//             "onclick":
//             {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWZubXN1MmxUdzNyMWUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0yZTg2MjBmYTN5eXY0ZnRlenVzbWlnaWQ2ZmdvcmlzcnFoaDlsZjhhZjFvOTR1bXYmY3Q9Z2lm&action_type=CLICK"
//             },
//             "onsent":
//             {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWZubXN1MmxUdzNyMWUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0yZTg2MjBmYTN5eXY0ZnRlenVzbWlnaWQ2ZmdvcmlzcnFoaDlsZjhhZjFvOTR1bXYmY3Q9Z2lm&action_type=SENT"
//             }
//         }
//     },
//     {
//         "type": "gif",
//         "id": "iVqXV4vE4DDYk",
//         "url": "https://giphy.com/gifs/dinosaur-iVqXV4vE4DDYk",
//         "slug": "dinosaur-iVqXV4vE4DDYk",
//         "bitly_gif_url": "http://gph.is/2uSVBDf",
//         "bitly_url": "http://gph.is/2uSVBDf",
//         "embed_url": "https://giphy.com/embed/iVqXV4vE4DDYk",
//         "username": "",
//         "source": "https://www.reddit.com/r/gifs/comments/6u9jop/a_wild_dinosaur_appeared/",
//         "title": "",
//         "rating": "g",
//         "content_url": "",
//         "source_tld": "www.reddit.com",
//         "source_post_url": "https://www.reddit.com/r/gifs/comments/6u9jop/a_wild_dinosaur_appeared/",
//         "is_sticker": 0,
//         "import_datetime": "2017-08-17 12:17:00",
//         "trending_datetime": "0000-00-00 00:00:00",
//         "images":
//         {
//             "original":
//             {
//                 "height": "270",
//                 "width": "480",
//                 "size": "4694661",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy.gif&ct=g",
//                 "mp4_size": "1304874",
//                 "mp4": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy.mp4&ct=g",
//                 "webp_size": "1860368",
//                 "webp": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy.webp&ct=g",
//                 "frames": "45",
//                 "hash": "15d5b368a314ff2d7a4dbdbf4c4e615b"
//             },
//             "downsized":
//             {
//                 "height": "140",
//                 "width": "250",
//                 "size": "1193431",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy-downsized.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy-downsized.gif&ct=g"
//             },
//             "downsized_large":
//             {
//                 "height": "270",
//                 "width": "480",
//                 "size": "4694661",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy.gif&ct=g"
//             },
//             "downsized_medium":
//             {
//                 "height": "270",
//                 "width": "480",
//                 "size": "4694661",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy.gif&ct=g"
//             },
//             "downsized_small":
//             {
//                 "height": "108",
//                 "width": "192",
//                 "mp4_size": "101186",
//                 "mp4": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy-downsized-small.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy-downsized-small.mp4&ct=g"
//             },
//             "downsized_still":
//             {
//                 "height": "140",
//                 "width": "250",
//                 "size": "30172",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy-downsized_s.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy-downsized_s.gif&ct=g"
//             },
//             "fixed_height":
//             {
//                 "height": "200",
//                 "width": "356",
//                 "size": "2420986",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/200.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200.gif&ct=g",
//                 "mp4_size": "562897",
//                 "mp4": "https://media1.giphy.com/media/iVqXV4vE4DDYk/200.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200.mp4&ct=g",
//                 "webp_size": "979744",
//                 "webp": "https://media1.giphy.com/media/iVqXV4vE4DDYk/200.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200.webp&ct=g"
//             },
//             "fixed_height_downsampled":
//             {
//                 "height": "200",
//                 "width": "356",
//                 "size": "328689",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/200_d.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200_d.gif&ct=g",
//                 "webp_size": "131698",
//                 "webp": "https://media1.giphy.com/media/iVqXV4vE4DDYk/200_d.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200_d.webp&ct=g"
//             },
//             "fixed_height_small":
//             {
//                 "height": "100",
//                 "width": "178",
//                 "size": "652279",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/100.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100.gif&ct=g",
//                 "mp4_size": "281210",
//                 "mp4": "https://media1.giphy.com/media/iVqXV4vE4DDYk/100.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100.mp4&ct=g",
//                 "webp_size": "303268",
//                 "webp": "https://media1.giphy.com/media/iVqXV4vE4DDYk/100.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100.webp&ct=g"
//             },
//             "fixed_height_small_still":
//             {
//                 "height": "100",
//                 "width": "178",
//                 "size": "16528",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/100_s.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100_s.gif&ct=g"
//             },
//             "fixed_height_still":
//             {
//                 "height": "200",
//                 "width": "356",
//                 "size": "61073",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/200_s.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200_s.gif&ct=g"
//             },
//             "fixed_width":
//             {
//                 "height": "113",
//                 "width": "200",
//                 "size": "789285",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/200w.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200w.gif&ct=g",
//                 "mp4_size": "194586",
//                 "mp4": "https://media1.giphy.com/media/iVqXV4vE4DDYk/200w.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200w.mp4&ct=g",
//                 "webp_size": "367078",
//                 "webp": "https://media1.giphy.com/media/iVqXV4vE4DDYk/200w.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200w.webp&ct=g"
//             },
//             "fixed_width_downsampled":
//             {
//                 "height": "113",
//                 "width": "200",
//                 "size": "107825",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/200w_d.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200w_d.gif&ct=g",
//                 "webp_size": "49106",
//                 "webp": "https://media1.giphy.com/media/iVqXV4vE4DDYk/200w_d.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200w_d.webp&ct=g"
//             },
//             "fixed_width_small":
//             {
//                 "height": "57",
//                 "width": "100",
//                 "size": "223905",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/100w.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100w.gif&ct=g",
//                 "mp4_size": "46005",
//                 "mp4": "https://media1.giphy.com/media/iVqXV4vE4DDYk/100w.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100w.mp4&ct=g",
//                 "webp_size": "110978",
//                 "webp": "https://media1.giphy.com/media/iVqXV4vE4DDYk/100w.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100w.webp&ct=g"
//             },
//             "fixed_width_small_still":
//             {
//                 "height": "57",
//                 "width": "100",
//                 "size": "6037",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/100w_s.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=100w_s.gif&ct=g"
//             },
//             "fixed_width_still":
//             {
//                 "height": "113",
//                 "width": "200",
//                 "size": "19900",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/200w_s.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=200w_s.gif&ct=g"
//             },
//             "looping":
//             {
//                 "mp4_size": "6521134",
//                 "mp4": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy-loop.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy-loop.mp4&ct=g"
//             },
//             "original_still":
//             {
//                 "height": "270",
//                 "width": "480",
//                 "size": "107707",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy_s.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy_s.gif&ct=g"
//             },
//             "original_mp4":
//             {
//                 "height": "270",
//                 "width": "480",
//                 "mp4_size": "1304874",
//                 "mp4": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy.mp4&ct=g"
//             },
//             "preview":
//             {
//                 "height": "84",
//                 "width": "149",
//                 "mp4_size": "44199",
//                 "mp4": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy-preview.mp4?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy-preview.mp4&ct=g"
//             },
//             "preview_gif":
//             {
//                 "height": "60",
//                 "width": "107",
//                 "size": "47641",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy-preview.gif?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy-preview.gif&ct=g"
//             },
//             "preview_webp":
//             {
//                 "height": "80",
//                 "width": "142",
//                 "size": "47334",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/giphy-preview.webp?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=giphy-preview.webp&ct=g"
//             },
//             "480w_still":
//             {
//                 "height": "270",
//                 "width": "480",
//                 "size": "4694661",
//                 "url": "https://media1.giphy.com/media/iVqXV4vE4DDYk/480w_s.jpg?cid=2e8620fa3yyv4ftezusmigid6fgorisrqhh9lf8af1o94umv&rid=480w_s.jpg&ct=g"
//             }
//         },
//         "analytics_response_payload": "e=Z2lmX2lkPWlWcVhWNHZFNEREWWsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0yZTg2MjBmYTN5eXY0ZnRlenVzbWlnaWQ2ZmdvcmlzcnFoaDlsZjhhZjFvOTR1bXYmY3Q9Z2lm",
//         "analytics":
//         {
//             "onload":
//             {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWlWcVhWNHZFNEREWWsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0yZTg2MjBmYTN5eXY0ZnRlenVzbWlnaWQ2ZmdvcmlzcnFoaDlsZjhhZjFvOTR1bXYmY3Q9Z2lm&action_type=SEEN"
//             },
//             "onclick":
//             {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWlWcVhWNHZFNEREWWsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0yZTg2MjBmYTN5eXY0ZnRlenVzbWlnaWQ2ZmdvcmlzcnFoaDlsZjhhZjFvOTR1bXYmY3Q9Z2lm&action_type=CLICK"
//             },
//             "onsent":
//             {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWlWcVhWNHZFNEREWWsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0yZTg2MjBmYTN5eXY0ZnRlenVzbWlnaWQ2ZmdvcmlzcnFoaDlsZjhhZjFvOTR1bXYmY3Q9Z2lm&action_type=SENT"
//             }
//         }
//     },
//     {
//         "type": "gif",
//         "id": "LbwJp26pqGf0k",
//         "url": "https://giphy.com/gifs/dinosaur-LbwJp26pqGf0k",
//         "slug": "dinosaur-LbwJp26pqGf0k",
//         "bitly_gif_url": "http://gph.is/2cn9Eut",
//         "bitly_url": "http://gph.is/2cn9Eut",
//         "embed_url": "https://giphy.com/embed/LbwJp26pqGf0k",
//         "username": "",
//         "source": "http://www.revelist.com/funny/t-rex-pole-dancing/1036",
//         "title": "T Rex Dinosaur GIF",
//         "rating": "g",
//         "content_url": "",
//         "source_tld": "www.revelist.com",
//         "source_post_url": "http://www.revelist.com/funny/t-rex-pole-dancing/1036",
//         "is_sticker": 0,
//         "import_datetime": "2016-09-11 08:59:38",
//         "trending_datetime": "2017-10-31 16:46:02",
//         "images":
//         {
