export const mapper = data => {
  return data.map(({ poster_path, id, original_title, vote_average }) => ({
    poster_path,
    id,
    original_title,
    vote_average,
  }));
};