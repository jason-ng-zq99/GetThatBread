import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  InputContainer,
  ErrorContainer,
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
  const [wrong, setWrong] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password === "1234" && email === "ayam_brand_o0o") {
      navigate("/MakeBorrowRequestPage");
    } else {
      setWrong(true);
      setEmail("");
      setPassword("");
    }
  };

  const errorMessage = () => {
    if (wrong) {
      return <ErrorContainer>Error Wrong Password!</ErrorContainer>;
    }
  };

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
      {errorMessage()}
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
