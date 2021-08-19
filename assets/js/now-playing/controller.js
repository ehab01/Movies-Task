
var controller = {
    async init (){
      await getMoviesInTheatres().then((movies) => {
        model.theatrMovies = movies;
        view.init();
      });
    }
  };
  
  