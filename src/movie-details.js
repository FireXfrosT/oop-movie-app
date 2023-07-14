// movie-details.js
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(location.search);
  const imdbID = urlParams.get('id');

  if (imdbID) {
    fetchMovieDetails(imdbID);
  }

  async function fetchMovieDetails(imdbID) {
    const apiKey = 'c1aecf62';
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full&r=json`);
    const data = await response.json();

    if (data.Response === 'True') {
      displayMovieDetails(data);
    } else {
      console.error(data.Error);
    }
  }

  function displayMovieDetails(movie) {
    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML = '';

    const movieTitle = document.createElement('h2');
    movieTitle.textContent = movie.Title;
    movieDetails.appendChild(movieTitle);

    const movieYear = document.createElement('p');
    movieYear.textContent = `Year: ${movie.Year}`;
    movieDetails.appendChild(movieYear);

    const movieID = document.createElement('p');
    movieID.textContent = `ID: ${movie.imdbID}`;
    movieDetails.appendChild(movieID);

    const moviePoster = document.createElement('img');
    moviePoster.src = movie.Poster;
    movieDetails.appendChild(moviePoster);

    const movieSynopsis = document.createElement('p');
    movieSynopsis.textContent = `Synopsis: ${movie.Plot}`;
    movieDetails.appendChild(movieSynopsis);

    const movieCast = document.createElement('p');
    movieCast.textContent = `Cast: ${movie.Actors}`;
    movieDetails.appendChild(movieCast);

    const movieCrew = document.createElement('p');
    movieCrew.textContent = `Crew: ${movie.Director}`;
    movieDetails.appendChild(movieCrew);

    const movieReleaseDate = document.createElement('p');
    movieReleaseDate.textContent = `Release Date: ${movie.Released}`;
    movieDetails.appendChild(movieReleaseDate);

    const movieRatings = document.createElement('p');
    movieRatings.textContent = `Ratings: ${movie.imdbRating}/10`;
    movieDetails.appendChild(movieRatings);

    const addToWatchlistButton = document.createElement('button');
    addToWatchlistButton.textContent = 'Add to Watchlist';
    addToWatchlistButton.addEventListener('click', function() {
      addToWatchlist(movie);
    });
    movieDetails.appendChild(addToWatchlistButton);

    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function() {
      window.location.href = 'index.html';
    });

    const imdbLink = document.getElementById('imdb-link');
    imdbLink.href = `https://www.imdb.com/title/${movie.imdbID}`;
    imdbLink.textContent = 'More Details';
  }

  function addToWatchlist(movie) {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    watchlist.push(movie);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    alert('Movie added to watchlist!');
  }
});
