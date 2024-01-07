import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      opening_crawl: 'This is the opening text of the movie',
      release_date: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      opening_crawl: 'This is the second opening text of the movie',
      release_date: '2021-05-19',
    },
  ];
  const [movies, setMovies] = useState(dummyMovies);

  function MoviesAPI(){

    
    fetch('https://swapi.py4e.com/api/films')
    .then(x => x.json())
    .then(x => setMovies(x.results));

    console.log(movies)
  }
  

  return (
    <React.Fragment>
      <section>
        <button onClick={MoviesAPI}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
