import { useState, createContext, useContext } from 'react';
import { getUser } from './services/fetch-utils';

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(getUser());

  const stateAndSetters = {
    movies, setMovies,
    user, setUser,
  };

  return <DataContext.Provider value={stateAndSetters}>
    {children}
  </DataContext.Provider>;
}

export function useDataContext() {
  return useContext(DataContext);
}