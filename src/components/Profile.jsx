import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import avatar from '../img/def_avatar.png';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  const image = user?.picture ? user.picture : avatar;

  return (
    isAuthenticated && (
      <div>
        <img src={image} alt={user?.name} width={250} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <JSONPretty data={user} />
      </div>
    )
  );
};

export default Profile;
