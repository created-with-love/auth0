import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { css } from '@emotion/react';
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
  const { isLoading } = useAuth0();

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
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
}

export default App;
