import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieItem = ({ title, year, imdbID, type, poster }) => {
  return (
    <div className='movie-item' style={{ background: `url(${poster})` }}>
      <section className='details'>
        <h3>{title}</h3>
        <small>
          {year} {type}
        </small>
        <Link to={`/movie-info/${imdbID}`}>More Details</Link>
      </section>
    </div>
  );
};

MovieItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  imdb: PropTypes.string,
  type: PropTypes.string,
  poster: PropTypes.string,
};

export default MovieItem;
