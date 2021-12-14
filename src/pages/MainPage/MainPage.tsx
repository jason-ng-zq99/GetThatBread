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

  function CheckLogin(username: string, password: string) {
    if (username === "ayam_brand_o0o" && password === "1234") {
      setsuccess(true);
    } else {
      setsuccess(false);
    }
    console.log(success);
  }

  return (
    <MainContainer>
      <GlobalStyle />
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <StyledInput
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </InputContainer>
      <ButtonContainer>
        <StyledButton onClick={() => CheckLogin(email, password)}>
          Login
        </StyledButton>
        <StyledButton>Sign Up</StyledButton>
      </ButtonContainer>
      <HorizontalRule />
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
  );
};

export default MainPage;
