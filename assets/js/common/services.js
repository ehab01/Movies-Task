const baseUrl = `https://api.themoviedb.org/3`;
const key = "f01ea0b2170e91b6a0ae4afad3aed3b2";
const getMoviesInTheatres = async () => {
  const url = `${baseUrl}/movie/now_playing?api_key=${key}&language=en-US`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const getTopRatedMovies = async () => {
  const url = `${baseUrl}/movie/top_rated?api_key=${key}&language=en-US`;
  const response = await fetch(url);
  const result = await response.json();

  return result;
};

const getTrendingMovies = async () => {
  const url = `${baseUrl}/trending/movie/day?api_key=${key}&language=en-US`;
  const response = await fetch(url);
  const result = await response.json();

  return result;
};

const getMovieDetails = async (id) => {
  const url = `${baseUrl}/movie/${id}?api_key=${key}&language=en-US`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};
