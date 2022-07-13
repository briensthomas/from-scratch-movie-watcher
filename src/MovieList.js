import React from 'react';
import { useDataContext } from './DataProvider';

export default function MovieList({ movies }) {
  const { URL } = useDataContext();

  return (
    <div className='movies-list'>
      {
        movies.map((movie, i) => 
          <div className='movie-card' 
            key={movie.id + movie.title + i}>
            <h2>{movie.title}</h2>
            <img src={`${URL}${movie.poster_path}`} />
            <p>{movie.overview}</p>
          </div>)
      }
    </div>
  );
}
