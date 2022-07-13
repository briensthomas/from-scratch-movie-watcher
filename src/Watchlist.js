import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDataContext } from './DataProvider';
import MovieList from './MovieList';

export default function Favorites() {
  const { handleFetchWatchlist,
    watchlist, 
     
  } = useDataContext();
  const { id } = useParams();

  useEffect(() => {
    handleFetchWatchlist(id);
  }, [id]); //eslint-disable-line

  return (
    <div className='watchlist'>
      <h2>My Watchlist</h2>
      {
        <MovieList movies={watchlist} />
      }
    </div>
  );
}
