
var topRatedController = {
   async init() {
      await getTopRatedMovies().then((movies) => {
        topRatedModel.topRatedMovies = movies;
        topRatedView.init();
      });
    }
  };
  
  