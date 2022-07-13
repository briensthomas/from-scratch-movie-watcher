import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers.js';
import { client } from './client.js';


// Auth Functions
export async function signUpUser(email, password) {
  const { user } = await client.auth.signUp({ email, password });

  return user;
}

export async function signInUser(email, password) {
  const { user } = await client.auth.signIn({ email, password });

  return user;
}

export async function logout() {
  await client.auth.signOut();
}

export function getUser() {
  return client.auth.user();
}

// Fetch all movies Function/Search
export async function fetchAllMovies(title) {
  const data = await fetch(`/.netlify/functions/movies?title=${title}`);
  const { results } = await data.json();

  return results;
}


// Watchlist or Favorite movies for user
export async function createWatchlist(watchlist) {
  const { body } = await client.from('movie_watchlist')
    .insert(watchlist);

  return body;
}

export async function fetchWatchlist(id) {
  const { body } = await client.from('movie_watchlist')
    .select('*')
    .match({ user_id: getUser().id });

  return body;
}

export async function deleteFromWatchlist(id) {
  const { body } = await client.from('movie_watchlist')
    .delete()
    .match({ id })
    .single();

  return body;
}