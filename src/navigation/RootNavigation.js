import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import UserStack from './UserStack';

const RootNavigation = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <NavigationContainer>
      {
        isAuth ? <UserStack /> 
               : <AuthStack />
      }
    </NavigationContainer>
  );
};

export default RootNavigation;
