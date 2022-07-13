import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import SearchPage from './SearchPage';
import AuthPage from './AuthPage';
import Watchlist from './Watchlist';
import './App.css';
import { logout } from './services/fetch-utils';
import { useDataContext } from './DataProvider';



export default function App() {
  const { user, setUser, setWatchlist, setMovies } = useDataContext();

  async function handleLogout() {
    setWatchlist('');
    setMovies('');
    await logout();
    setUser(null);
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Auth Page</Link>
            </li>
            {user &&
            <>
              <li>
                <Link to="/movies">Movies List Search</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist </Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button></li>
            </>
            }
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {
              user
                ? <Redirect to='/movies' /> 
                : <AuthPage />
            }
          </Route>
          <Route exact path="/movies">   
            {
              !user
                ? <Redirect to='/' />
                : <SearchPage />
            }
          </Route>
          <Route exact path="/watchlist">
            {
              !user
                ? <Redirect to='/' />
                : <Watchlist />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}