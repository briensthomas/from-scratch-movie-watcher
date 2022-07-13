import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import AuthPage from './AuthPage';
import Favorites from './Favorites';
import './App.css';
import { logout } from './services/fetch-utils';
import { useDataContext } from './DataProvider';
import SearchPage from './SearchPage';

export default function App() {
  const { user } = useDataContext();

  async function handleLogout() {
    await logout();
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Auth Page</Link>
            </li>
            <li>
              <Link to="/movies">Movies List Search</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites (Watch List) </Link>
            </li>
            {
              user
              && <li>
                <button onClick={handleLogout}>Logout</button></li>
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
          <Route exact path="/favorites">
            {
              !user
                ? <Redirect to='/' />
                : <Favorites />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}