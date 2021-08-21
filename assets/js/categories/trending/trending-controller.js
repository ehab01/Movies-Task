var trendingController = {
  async init() {
    await getTrendingMovies().then((movies) => {
      trendingModel.trendingMovies = movies;
      trendingView.init();
    });
  },
};
