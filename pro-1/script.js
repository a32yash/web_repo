//TMDB API Key
const API_KEY = "api_key=39739d48d603f3ee5bed37168ad9a329";
// Base url / common every url
 const BASE_URL = "https://api.themoviedb.org/3";
 // first Page will Show u the Popular Movies that is in the db
 const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
//  to use image path
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;
// to show the details we are creating this 
//const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
// When the page loads we want to call the function getmovies
 getMovies(API_URL);
function getMovies(url) {
//   lastUrl = url;
fetch(url)
 .then((res) => res.json()).then((data) => {
  // console the data to see what we have 
  // in console first 20 pages [movies ] and you can do pagination
  // console.log(data.results);
  // we can show resuls object here , result is an array
        // console.log(data);
        showMovies(data.results);
});
 }
function showMovies(data) {
  // console.log(data.results);
  // before looping we are setting an empty string so that there is a slate work with
  main.innerHTML = '';
// for each movie we need to create a card
console.log(data);
 data.forEach((movie) => {
  console.log("1");
  // to use title,poster,rating , desc part from the movie object
 const { title, poster_path, vote_average, overview } = movie;
// first create a div
    const movieEl = document.createElement("div");
    // add a classlist to it
          movieEl.classList.add("movie");
          // in  movie div we have all the other elements so dynamically add 
movieEl.innerHTML = `
    <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
               
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        
        `;
// append all the elements into the main tag
    main.appendChild(movieEl);
  });
}

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
 form.addEventListener("submit", (e) => {
   e.preventDefault();
 const searchTerm = search.value;
 if (searchTerm) {
    getMovies(searchURL + "&query=" + searchTerm);
  } else {
    getMovies(API_URL);
  }
 });
