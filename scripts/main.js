window.onload = (event) => {
};

function Movie (name, genre, seen) {
  this.name = name;
  this.genre = genre;
  this.seen = seen;
  this.info = function() {
    return ("name: " + name + ", genre: " + genre + ", seen: " + seen);
  };
  this.toggleSeen = function() {
    if (this.seen === true) {
      this.seen = false;
    }
    else if (this.seen === false) {
      this.seen = true;
    }
    populateMovies();
  };
}



function addMovieToLibrary(movie) {
  movieArray.push(movie);
}


function buildLibrary () {

}
  

  
  
  const button = document.getElementById('submit');
  button.onclick = function () {
    
     const movie = new Movie (name.value, genre.value, seen.checked);
     addMovieToLibrary(movie);
     buildLibrary();

     populateMovies();
  };
  
function setMovies() {
  
   let savedMovies=localStorage.getItem("movieArray");
   savedMovies=JSON.parse(savedMovies);
  for (let i = 0; i < savedMovies.length; i++)
  {
    if(savedMovies[i]) {
      const name1 = savedMovies[i].name.toString();
      const genre1 = savedMovies[i].genre.toString();
      const seen1 = savedMovies[i].seen;
      const movie1 = new Movie (name1, genre1, seen1);
      addMovieToLibrary(movie1);
    }
  }
  
  buildLibrary();

}
  
  
function populateMovies() {
  localStorage.setItem("movieArray", JSON.stringify(movieArray));
}