import React from 'react';
import { useSelector } from 'react-redux';


import Main from '../Main/Main';

import MainAutorizationUserData from './userData/MainAutorizationUserData';
import MainAuthorizationForm from './form/MainAuthorizationForm';


function MainAuthorization() {
  const loading = useSelector((state) => state.users.loading);
  const isAuth = useSelector((state) => state.users.isAuth);
  const hasErrors = useSelector((state) => state.users.hasErrors);

  const renderUsers = () => {
    if (loading) return <p>Loading users...</p>
    if (hasErrors) return <p>Unable to display users.</p>
    return !isAuth ? <MainAuthorizationForm /> : <MainAutorizationUserData />
  }

  return (
    <Main children={
      renderUsers()
    } />
  );
}

export default MainAuthorization