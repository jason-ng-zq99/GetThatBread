import React, { useState } from "react";
import {
  MainContainer,
  InputContainer,
  WelcomeText,
  ButtonContainer,
  HorizontalRule,
  ForgotPassword,
  GlobalStyle,
  StyledInput,
  StyledButton,
} from "./MainPage.styled";

const MainPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [success, setsuccess] = useState(false);

  function CheckLogin(username: string, password: string) {}

  return (
    <MainContainer>
      <GlobalStyle />
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <StyledInput type="text" placeholder="Email" />
      </InputContainer>
      <InputContainer>
        <StyledInput type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <StyledButton>Login</StyledButton>
        <StyledButton>Sign Up</StyledButton>
      </ButtonContainer>
      <HorizontalRule />
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
  );
};

export default MainPage;
