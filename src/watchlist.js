document.addEventListener('DOMContentLoaded', function() {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    const watchlistElement = document.getElementById('watchlist');
  
    function displayWatchlist() {
      watchlistElement.innerHTML = '';
  
      watchlist.forEach(function(movie) {
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
  
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Watchlist';
        listItem.appendChild(removeButton);
  
        listItem.addEventListener('click', function() {
          openMovieDetailsPage(movie.imdbID);
        });
  
        removeButton.addEventListener('click', function(event) {
          event.stopPropagation();
          removeFromWatchlist(movie.imdbID);
        });
  
        watchlistElement.appendChild(listItem);
      });
    }
  
    function openMovieDetailsPage(imdbID) {
      window.location.href = `movie-details.html?id=${imdbID}`;
    }
  
    function removeFromWatchlist(imdbID) {
      const index = watchlist.findIndex(movie => movie.imdbID === imdbID);
      if (index !== -1) {
        watchlist.splice(index, 1);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        displayWatchlist();
      }
    }
  
    displayWatchlist();
  
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
  