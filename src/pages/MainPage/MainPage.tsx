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
  interface account {
    username: string;
    password: string;
  }

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, addAccount] = useState<account[]>([]);
  const [wrong, setWrong] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (checkLogin(email, password)) {
      navigate("/MakeBorrowRequestPage");
    } else {
      setWrong(true);
      setEmail("");
      setPassword("");
    }
  };

  function checkLogin(user: string, pwd: string) {
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].username === user && accounts[i].password === pwd) {
        return true;
      }
    }
    return false;
  }

  function signUp(user: string, pwd: string) {
    const newAccount: account = { username: user, password: pwd };
    addAccount([...accounts, newAccount]);
    setEmail("");
    setPassword("");
  }

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
          placeholder="Username"
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
        <StyledButton onClick={() => signUp(email, password)}>
          Sign Up
        </StyledButton>
      </ButtonContainer>
      <HorizontalRule />
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
  );
};

export default MainPage;
