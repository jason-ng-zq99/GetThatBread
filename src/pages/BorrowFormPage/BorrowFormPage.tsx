import Search from "antd/lib/transfer/search";
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
  ImageContainer,
  Text,
  DetailsContainer,
  SmallText
} from "./BorrowFormPage.styled";

const [searchQuery, setSearchQuery] = useState("");
const [filteredName, setFilteredName] = useState("");

const objects = [
    'banana',
    'broomstick',
    'broken cup'
]

const displayObject = objects.map((object) =>{
    return(
        <li>{object}</li>
    )
}
)

const BorrowPage = () => {
  const [success, setsuccess] = useState(false);
/*
  function handleSearch(newSearchQuery){
      setSearchQuery(newSearchQuery);
      objects.map((object) => {
          if (object.includes(searchQuery)){
              setFilteredName(object)
          }
      })
  }
*/
  return (
    <MainContainer>
      <GlobalStyle />
      <WelcomeText>Borrow Page</WelcomeText>
      <InputContainer>
        <StyledInput type="text" placeholder="Search" />
      </InputContainer>
        <ImageContainer src={`${process.env.PUBLIC_URL}/loan_item_1.jpg`}/>
      <DetailsContainer>
        <Text>
            Owner Name: AyamBrando0o
        </Text>
        <Text>
            Species: fungi
        </Text>
        <Text>
            Item Description: In good condition
        </Text>
      </DetailsContainer>
      <HorizontalRule />
      <ButtonContainer>
        <StyledButton>Borrow</StyledButton>
      </ButtonContainer>
      <SmallText>
            By borrowing you agree to our Terms and Conditions
      </SmallText>
    </MainContainer>
  );
};

export default BorrowPage;
