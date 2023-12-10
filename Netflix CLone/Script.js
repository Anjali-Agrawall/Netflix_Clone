const api="api_key=5e12216a56a23e48de771b6d9b5220b4";

const base_url="https://api.themoviedb.org/3";

const banner_url="https://image.tmdb.org/t/p/original";
const img_url="https://image.tmdb.org/t/p/w500";

const requests={

    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,  
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_geners=28`,       //to get the geners number tmdb geners code website
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_geners=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_geners=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_geners=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_geners=99`,
};

function truncate(str,n){
    return str?.length > n ? str.substr(0 , n-1)+ "..." : str;
}

//banner

fetch(requests.fetchNetflixOriginals)
.then((res)=> res.json())

.then((data)=> {
   const setMovie=
   data.results[Math.floor(Math.random() * data.results.length-1)];

   var banner=document.getElementById("banner");
   var banner_title=document.getElementById("banner_title");
   var banner_desc=document.getElementById("banner_description");

   banner.style.backgroundImage=
   "url(" + banner_url + setMovie.backdrop_path + ")";
   banner_desc.innerText=truncate(setMovie.overview, 150);
   banner_title.innerText=setMovie.name;
});

fetch(requests.fetchNetflixOriginals)
.then((res)=> res.json())

.then((data)=> {
   const headrow = document.getElementById("headrow");
   const row=document.createElement("div");

   row.className="row";
   row.classList.add("netflixrow");

   headrow.appendChild(row);

   const title=document.createElement("h2");

   title.className="row_title";
   title.innerText="NETFLIX ORIGINALS";

   row.appendChild(title);

   const row_posters=document.createElement("div");
   row_posters.className="row_posters";
   row.appendChild(row_posters);

   data.results.forEach((movie) => {

    const poster = document.createElement("img"); 
    poster.className = "row_posterLarge";
    
    var s = movie.name.replace(/\s+/g, "");
    
    poster.id = s;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);
    });
    });
    
//trending

    
    fetch(requests.fetchTrending)
    .then((res) => res.json())
    
    .then((data) => {
    const headrow = document.getElementById("headrow");
    const row=document.createElement("div");

    row.className="row";

    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Trending";
    row.appendChild(title);

   const row_posters = document.createElement("div");
   row_posters.className = "row_posters";
   row.appendChild(row_posters);
   
   data.results.forEach((movie) => {
    //console.log(movie);
    const poster = document.createElement("img");
    poster.className="row_posterLarge";
    var s2=movie.id;

    poster.id=s2;
    poster.src=img_url+movie.poster_path;
    row_posters.appendChild(poster);
   });
});

// action

fetch(requests.fetchActionMovies)
.then((res) => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Action Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => { 
    //console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});

// comedy

fetch(requests.fetchComedyMovies)
.then((res) => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className ="row" ;
    headrow.appendChild(row);

    const title = document.createElement ("h2");
    title.className = "row_title";
    title.innerText = "Comedy Movies";
    row.appendChild(title);

    const row_posters = document.createElement ("div") ;
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
        const poster=document.createElement("img");
        poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});

//Horror

fetch(requests.fetchHorrorMovies)
.then((res) => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className ="row" ;
    headrow.appendChild(row);

    const title = document.createElement ("h2");
    title.className = "row_title";
    title.innerText = "Horror Movies";
    row.appendChild(title);

    const row_posters = document.createElement ("div") ;
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
        const poster=document.createElement("img");
        poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});

//Romance

fetch(requests.fetchRomanceMovies)
.then((res) => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className ="row" ;
    headrow.appendChild(row);

    const title = document.createElement ("h2");
    title.className = "row_title";
    title.innerText = "Romantic Movies";
    row.appendChild(title);

    const row_posters = document.createElement ("div") ;
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
        const poster=document.createElement("img");
        poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});

//Documentaries

fetch(requests.fetchDocumentaries)
.then((res) => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className ="row" ;
    headrow.appendChild(row);

    const title = document.createElement ("h2");
    title.className = "row_title";
    title.innerText = "Documentaries";
    row.appendChild(title);

    const row_posters = document.createElement ("div") ;
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
        const poster=document.createElement("img");
        poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});



        

