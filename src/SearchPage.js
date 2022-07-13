import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { useDataContext } from './DataProvider';

export default function SearchPage() {
  const { movies, getAllMovies, handleFetchWatchlist, setUser, user, watchlist } = useDataContext();
  const [title, setTitle] = useState('A Bug\'s Life');

  useEffect(() => {
    if (!watchlist) handleFetchWatchlist();
    setUser(user);
  }, [user]); //eslint-disable-line

  return (
    <div className='search'>
      <section className='search-input'>

        <input value={title}
          onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={() => getAllMovies(title)}>Search</button>
      </section>
      <MovieList movies={movies} getAllMovies={getAllMovies} title={title}/>
    </div>
  );
}
