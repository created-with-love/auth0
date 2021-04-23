import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { css } from '@emotion/react';
import './App.css';

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  const [, setToken] = useState(() =>
    localStorage.getItem('userToken') ? localStorage.getItem('userToken') : '',
  );
  const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getToken = () => {
      return getAccessTokenSilently();
    };

    if (isAuthenticated) {
      getToken().then(tok => {
        setToken(tok);
        localStorage.setItem('userToken', tok);
        console.log(tok);
      });
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) {
    return (
      <ClipLoader
        color={`#ffffff`}
        loading={isLoading}
        css={override}
        size={150}
      />
    );
  }

  return (
    <>
      <h1>This is App#1</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
}

export default App;
