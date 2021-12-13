import React from 'react';
import { MainContainer, LoginContainer, LoginComponent } from './MainPage.styled';

const MainPage = () => {
  return (
    <MainContainer>
        <LoginContainer>
          <LoginComponent>Username</LoginComponent>
          <LoginComponent>Password</LoginComponent>
        </LoginContainer>
    </MainContainer>
  )
}

export default MainPage;