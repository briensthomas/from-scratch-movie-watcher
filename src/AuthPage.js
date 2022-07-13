import React from 'react';
import { useState } from 'react';
import { useDataContext } from './DataProvider';
import { signInUser, signUpUser } from './services/fetch-utils';

export default function AuthPage() {
  const { setUser } = useDataContext();

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');


//   function clearForms() {
//     setSignInEmail('')
//     setSignInPassword('')
//     setSignUpEmail('')
//     setSignUp('')
//   }

  async function handleSignUp(e) {
    e.preventDefault();
    const user = await signUpUser(signUpEmail, signUpPassword);

    setUser(user);
  }
  
  
  async function handleSignIn(e) {
    e.preventDefault();
    const user = await signInUser(signInEmail, signInPassword);
    
    setUser(user);
    console.log(user);
  }

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <label>Email
          <input
            value={signUpEmail}
            onChange={e => setSignUpEmail(e.target.value)} />
        </label>
        <label>Password
          <input type='password'
            value={signUpPassword}
            onChange={e => setSignUpPassword(e.target.value)} />
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <label>Email
          <input
            value={signInEmail}
            onChange={e => setSignInEmail(e.target.value)} />
        </label>
        <label>Password
          <input type='password'
            value={signInPassword}
            onChange={e => setSignInPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
