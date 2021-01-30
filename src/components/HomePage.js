import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import SearchIcon from '@material-ui/icons/Search';

const HomePage = ({ movie, setMovie }) => {
  const [foundMovies, setFoundMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=f6eb10ca&s=${movie
          .split(' ')
          .join('+')}`
      )
      .then((res) => {
        if (res.data.Response === 'True') {
          setFoundMovies(res.data.Search);
        } else {
          //   setFoundMovies([]);
        }
      });
  }, [movie]);

  return (
    <div className='home-page'>
      <section className='home-page__top'>
        <header>Movie Infos</header>
        <div className='search-wrapper'>
          <SearchIcon />
          <input
            type='text'
            placeholder='Search movie here...'
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          />
        </div>
      </section>
      <MovieList movies={foundMovies} />
    </div>
  );
};

export default HomePage;
