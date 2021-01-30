import React from 'react';
import MovieItem from './MovieItem';
import uuid from 'react-uuid';

const MovieList = ({ movies }) => {
  return (
    <div className='movie-list'>
      {movies.map((movie) => {
        const { Title, Year, imdbID, Type, Poster } = movie;

        return (
          <MovieItem
            title={Title}
            year={Year}
            imdbID={imdbID}
            type={Type}
            poster={Poster}
            key={uuid()}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
