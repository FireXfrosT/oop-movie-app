// recommendations.js
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'c1aecf62';
    const minYear = 2000; // Minimum year for the recommended movies
  
    fetchRandomMovies(apiKey, minYear);
  
    async function fetchRandomMovies(apiKey, minYear) {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&type=movie&y=${minYear}&r=json`);
      const data = await response.json();
  
      if (data.Response === 'True') {
        const movies = data.Search;
        const randomMovies = shuffleArray(movies); // Randomize the movies array
        displayMovies(randomMovies);
      } else {
        console.error(data.Error);
      }
    }
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
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
  