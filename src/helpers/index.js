export const formatRespData = (movies) => movies.reduce((acc, movie) => {
  acc[movie.imdbID] = movie;
  return acc;
}, {});
