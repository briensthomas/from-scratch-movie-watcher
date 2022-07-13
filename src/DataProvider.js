import { useState, createContext, useContext } from 'react';
import { getUser, fetchAllMovies } from './services/fetch-utils';

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(getUser());
  const URL = 'https://image.tmdb.org/t/p/original/';

  const stateAndSetters = {
    user, setUser,
    getAllMovies, movies,
    URL,
  };

  async function getAllMovies(title) {
    const movies = await fetchAllMovies(title);

    setMovies(movies);
  }

  return <DataContext.Provider value={stateAndSetters}>
    {children}
  </DataContext.Provider>;
}

export function useDataContext() {
  return useContext(DataContext);
}