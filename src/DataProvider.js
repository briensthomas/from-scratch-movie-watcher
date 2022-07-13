import { useState, createContext, useContext } from 'react';
import { getUser, 
  fetchAllMovies, 
  createWatchlist, 
  fetchWatchlist, 
  deleteFromWatchlist } from './services/fetch-utils';

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(getUser());
  const URL = 'https://image.tmdb.org/t/p/original/';

  const [watchlist, setWatchlist] = useState('');


  const stateAndSetters = {
    user, setUser,
    getAllMovies, movies,
    URL,
    watchlist, handleAddToWatchlist,
    handleFetchWatchlist,
    handleDeleteFromWatchlist,

  };

  async function getAllMovies(title) {
    const movies = await fetchAllMovies(title);

    setMovies(movies);
  }

  async function handleFetchWatchlist(id) {
    const watchlist = await fetchWatchlist(id);

    setWatchlist(watchlist);
  }

  async function handleAddToWatchlist(watchlist) {
    await createWatchlist(watchlist);
    const updatedWatchlist = await fetchWatchlist();

    setWatchlist(updatedWatchlist);
  }

  async function handleDeleteFromWatchlist(id) {
    await deleteFromWatchlist(id);
    const updatedWatchlist = await fetchWatchlist();

    setWatchlist(updatedWatchlist);
  }

  return <DataContext.Provider value={stateAndSetters}>
    {children}
  </DataContext.Provider>;
}

export function useDataContext() {
  return useContext(DataContext);
}