import { client } from './client.js';

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

export async function fetchAllMovies(title) {
  const data = await fetch(`/.netlify/functions/movies?title=${title}`);
  const { results } = await data.json();

  console.log(results);
  return results;
}