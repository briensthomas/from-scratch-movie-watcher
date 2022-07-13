import { useEffect } from 'react';
import { useDataContext } from './DataProvider';

export default function MovieList({ movies }) {
  const { URL, 
    handleAddToWatchlist, 
    handleFetchWatchlist,
    handleDeleteFromWatchlist,
    watchlist,
  } = useDataContext();

  useEffect(() => {
    if (!watchlist) handleFetchWatchlist();
  }, []); //eslint-disable-line

  return (
    <div className='movies-list'>
      {
        movies && movies.map((movie, i) => {
          const alreadyOnWatchlist = watchlist && watchlist.find((watchlist) => 
            watchlist.title === movie.title);
          return <div className='movie-card' style={ alreadyOnWatchlist ? { border: '2px solid red' } : {}} 
            key={movie.id + movie.title + i}>
            <h2>{movie.title}</h2>
            <img src={`${URL}${movie.poster_path}`} />
            <p>{movie.overview}</p>
      
            <button className='watchlist-btn' onClick={() => 
              alreadyOnWatchlist 
                ? handleDeleteFromWatchlist(alreadyOnWatchlist.id)
                : handleAddToWatchlist({
                  api_id: movie.id,
                  poster_path: movie.poster_path,
                  title: movie.title
                })
            }>{ alreadyOnWatchlist ? '❤️' : '♡'} </button>
          </div>;
        })
      }
    </div>
  );
}
