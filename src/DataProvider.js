import { useState, createContext, useContext } from 'react';

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [movies, setMovies] = useState([]);

  const stateAndSetters = {
    movies, setMovies
  };

  return <DataContext.Provider value={stateAndSetters}>
    {children}
  </DataContext.Provider>;
}

export function useDataContext() {
  return useContext(DataContext);
}