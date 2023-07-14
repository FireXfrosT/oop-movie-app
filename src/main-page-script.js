document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
  
    let currentItem = 0;
  
    function showNextItem() {
      carouselItems[currentItem].classList.remove('active');
      currentItem = (currentItem + 1) % carouselItems.length;
      carouselItems[currentItem].classList.add('active');
    }
  
    // Change the featured movie every 7 seconds
    setInterval(showNextItem, 7000);
  });

// Sample movie data
const movies = [
    {
      title: "The Conjuring 2",
      poster: "https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_FMjpg_UX1000_.jpg",
      description: "Description of Movie 1",
    },
    {
      title: "The Nun",
      poster: "https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg",
      description: "Description of Movie 2",
    },
    {
      title: "Insidious",
      poster: "https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_.jpg",
      description: "Description of Movie 3",
    },
  ];
  
  // Function to generate movie items
  function generateMovieItems() {
    const movieList = document.getElementById("selected-movie-list");
  
    // Clear existing content
    movieList.innerHTML = "";
  
    // Generate movie items
    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("selected-movie-item");
  
      const moviePoster = document.createElement("img");
      moviePoster.src = movie.poster;
      moviePoster.alt = movie.title;
      moviePoster.classList.add("selected-movie-poster");
      movieItem.appendChild(moviePoster);
  
      const movieTitle = document.createElement("h2");
      movieTitle.textContent = movie.title;
      movieItem.appendChild(movieTitle);
  
      const movieDescription = document.createElement("p");
      movieDescription.textContent = movie.description;
      movieDescription.classList.add("selected-movie-description");
      movieItem.appendChild(movieDescription);
  
      movieList.appendChild(movieItem);
    });
  }
  
  // Call the function to generate movie items
  generateMovieItems();
  