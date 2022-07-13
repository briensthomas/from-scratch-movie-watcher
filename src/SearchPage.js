import { useState } from 'react';
import MovieList from './MovieList';
import { useDataContext } from './DataProvider';

export default function SearchPage() {
  const { movies, getAllMovies } = useDataContext();
  const [title, setTitle] = useState('a');

  return (
    <div>SearchPage
      <section>

        <input value={title}
          onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={() => getAllMovies(title)}>Search</button>
      </section>
      <MovieList movies={movies} getAllMovies={getAllMovies}/>
    </div>
  );
}
