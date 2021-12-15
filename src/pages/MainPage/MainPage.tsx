import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "./styles/MainPage.styled";

const MainPage = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password === "1234" && email === "ayam_brand_o0o") {
      navigate("/MakeBorrowRequestPage");
    }
  };

  const Redirect = () => {};

  return (
    <MainContainer>
      <GlobalStyle />
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <StyledInput
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <ButtonContainer>
        <StyledButton onClick={handleSubmit}>Login</StyledButton>
        <StyledButton>Sign Up</StyledButton>
      </ButtonContainer>
      <HorizontalRule />
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
  );
};

export default MainPage;
