import React, { useState } from 'react'
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
} from "./styles/MakeBorrowRequestPage.styled";

const MakeBorrowRequestPage = () => {
  const [newItemDescription, setItemDescription] = useState("");
  const [newQuantity, setItemQuantity] = useState(1);

  const handleNewItemDescription = (newItemDescription: string) => {
    setItemDescription(newItemDescription)
  }

  const handleNewItemQuantity = (newItemQuantity: number) => {
    setItemQuantity(newItemQuantity)
  }

  // handleSubmit method to handle new items in the list 

  return (
    <MainContainer>
      <GlobalStyle />
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <StyledInput
          type="text"
          placeholder="Item Description"
          value={newItemDescription}
          onChange={(e) => handleNewItemDescription(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <StyledInput
          type="number"
          placeholder={"Quantity"}
          value={newQuantity}
          onChange={(e) => handleNewItemQuantity(e.target.valueAsNumber)}
        />
      </InputContainer>
      <ButtonContainer>
        {/* <StyledButton onClick={() => CheckLogin(email, password)}> */}
        <StyledButton>
          Create Request
        </StyledButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default MakeBorrowRequestPage;