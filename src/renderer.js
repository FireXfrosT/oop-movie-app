// renderer.js

document.addEventListener('DOMContentLoaded', function() {
  const apiKey = 'c1aecf62';
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', function() {
    const movieTitleInput = document.getElementById('movie-title');
    const movieTitle = movieTitleInput.value;

    if (movieTitle) {
      fetchMovies(movieTitle);
    }
  });

  async function fetchMovies(movieTitle) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`);
    const data = await response.json();

    if (data.Response === 'True') {
      const movies = data.Search;
      displayMovies(movies);
    } else {
      console.error(data.Error);
    }
  }

  function displayMovies(movies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    movies.forEach(function(movie) {
      const listItem = document.createElement('li');
      listItem.classList.add('movie-item');

      const movieTitle = document.createElement('h3');
      movieTitle.textContent = movie.Title;
      listItem.appendChild(movieTitle);

      const movieYear = document.createElement('p');
      movieYear.textContent = `Year: ${movie.Year}`;
      listItem.appendChild(movieYear);

      const movieID = document.createElement('p');
      movieID.textContent = `ID: ${movie.imdbID}`;
      listItem.appendChild(movieID);

      const moviePoster = document.createElement('img');
      moviePoster.src = movie.Poster;
      listItem.appendChild(moviePoster);

      listItem.addEventListener('click', function() {
        openMovieDetailsPage(movie.imdbID);
      });

      movieList.appendChild(listItem);
    });
  }

  function openMovieDetailsPage(imdbID) {
    window.location.href = `movie-details.html?id=${imdbID}`;
  }
});
