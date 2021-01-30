import axios from 'axios';
import { useEffect, useState } from 'react';

const MovieInfo = ({ imdbID }) => {
  const [movieInfo, setMovieInfo] = useState({});
  const {
    title,
    released,
    runtime,
    genre,
    director,
    writer,
    actors,
    plot,
    language,
    country,
    awards,
    poster,
    type,
    imdbvotes,
    dvd,
    boxoffice,
    production,
    imdbrating,
  } = movieInfo;

  // Function that converts all the properties of an object
  // to lowerCase
  const toLowerCaseProps = (obj) => {
    let result = {};
    Object.entries(obj).forEach((val) => {
      result[val[0].toLowerCase()] = val[1];
    });
    return result;
  };

  // Fetch movie info
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=f6eb10ca&i=${imdbID}`)
      .then((res) => {
        if (res.data.Response === 'True') {
          setMovieInfo(toLowerCaseProps(res.data));
        }
      });
  }, [imdbID]);

  return Object.entries(movieInfo).length === 0 ? (
    <></>
  ) : (
    <div className='movie-info'>
      <section className='movie-info__poster'>
        <img src={poster} alt='' />
      </section>
      <section className='movie-info__details'>
        <header>
          {title} {type}
        </header>
        <small>Released Date: {released}</small>
        <small>Rating: {imdbrating}</small>
        <table>
          <tbody>
            <tr>
              <td>Director:</td>
              <td>{director}</td>
            </tr>

            <tr>
              <td>Actors:</td>
              <td>{actors}</td>
            </tr>
            <tr>
              <td>Runtime:</td>
              <td>{runtime}</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>{genre}</td>
            </tr>
            <tr>
              <td>Awards:</td>
              <td>{awards}</td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>IMDB Votes:</td>
              <td>{imdbvotes}</td>
            </tr>
            <tr>
              <td>DVD:</td>
              <td>{dvd}</td>
            </tr>
            <tr>
              <td>Box Office:</td>
              <td>{boxoffice}</td>
            </tr>
            <tr>
              <td>Production:</td>
              <td>{production}</td>
            </tr>
            <tr>
              <td>Language:</td>
              <td>{language}</td>
            </tr>
            <tr>
              <td>Writer:</td>
              <td>{writer}</td>
            </tr>
            <tr>
              <td>Plot:</td>
              <td>{plot}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MovieInfo;
