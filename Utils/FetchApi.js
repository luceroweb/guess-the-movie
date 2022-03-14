import axios from "axios";

export default async function FetchApi() {
  let movies = [];

  await axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=59a35a38a15babb3dad4e83c83a72748&language=en-US"
    )
    .then((res) => (movies = res.data.results))
    .catch((err) => console.log(err.response.data));

  return movies;
}

export async function getPerformerName(movieId) {
  let credits = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=59a35a38a15babb3dad4e83c83a72748&language=en-US`
    )
    .catch((err) => console.log(err))
  return credits;
}

export async function getMovieChanges(movieId) {
  let details = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/changes?api_key=59a35a38a15babb3dad4e83c83a72748&language=en-US`
    )
    .catch((err) => console.log(err))
    return details;
    }

export async function getYouTubeId(movieId) {
  let youTubeId = null;

  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=59a35a38a15babb3dad4e83c83a72748&language=en-US`
    )
    .then((response) => (youTubeId = response.data?.results[0]?.key||null))
    .catch((err) => console.log("Fetch API Error",err))

  return youTubeId;
  
}

export async function getGenreName(genreId) {
  let matchGenre = null;

  await axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=59a35a38a15babb3dad4e83c83a72748&language=en-US`
    )
    .then((response) =>
      {
        matchGenre = response.data.genres.filter((genre) => genre.id === genreId);
        matchGenre = matchGenre[0].name;
      })
    .catch((err) => console.log("Fetch API Error",err))
  
    return matchGenre;
}
