const tmdbKey = '1251f0e411b31a15cbce9dbf9668ff67';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
    const genreRequestEndpoint = '/genre/movie/list';
    const requestParams =`?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
    try{
      const response = await fetch(urlToFetch, {method: 'GET'});
      if(response.ok) {
        jsonResponse = await response.json();
        //console.log(jsonResponse);
        const genres = jsonResponse.genres;
        ///console.log(genres);
        return genres;
      }
    } 
    catch(error) {
      console.log(error);
    }
};



const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch, {method: 'GET'});
    if(response.ok){
      const jsonResponse = await response.json();
      const movies = await jsonResponse.results;
      console.log(movies);
      return movies;
    }
  }
  catch(error) {
    console.log(error);
  }
};

const getMovieInfo = async (movie) => {
    const movieId = movie.id;
    const movieEndPoint = `/movie/${movieId}`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${movieEndPoint}${requestParams}`;
    //console.log(urlToFetch);
    try {
      const response = await fetch(urlToFetch, {method:'GET'});
      if(response.ok){
        const movieInfo = await response.json();
        //console.log(movieInfo);
        return movieInfo;

      }
    } 
    catch(error){
      console.log(error);
    }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
    const movies = await getMovies();
    const randomMovie = getRandomMovie(movies);
    const info = await getMovieInfo(randomMovie);
    displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;