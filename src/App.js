import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import MovieInfo from './components/MovieInfo';
import { useState } from 'react';

function App() {
  const [movie, setMovie] = useState('');

  return (
    <div className='App'>
      <Route
        path='/'
        exact
        render={() => <HomePage movie={movie} setMovie={setMovie} />}
      />
      <Route
        exact
        path='/movie-info/:id'
        render={(props) => <MovieInfo imdbID={props.match.params.id} />}
      />
    </div>
  );
}

export default App;
