export const requests = {
  tranding: `trending/all/week?api_key=${process.env.REACT_APP_KEY}`,
  original: `discover/tv?api_key=${process.env.REACT_APP_KEY}&with_networks=213`,
  actionMovies: `discover/movie?api_key=${process.env.REACT_APP_KEY}&with_genres=28`,
  animationMovies: `discover/movie?api_key=${process.env.REACT_APP_KEY}&with_genres=16`,
  comedyMovies: `discover/movie?api_key=${process.env.REACT_APP_KEY}&with_genres=35`,
  documentaries: `discover/movie?api_key=${process.env.REACT_APP_KEY}&with_genres=99`,
  horrorMovies: `discover/movie?api_key=${process.env.REACT_APP_KEY}&with_genres=27`,
  warMovies: `discover/movie?api_key=${process.env.REACT_APP_KEY}&with_genres=10752`,
};
