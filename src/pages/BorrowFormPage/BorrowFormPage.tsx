import Search from "antd/lib/transfer/search";
import React, { ChangeEvent, EventHandler, FunctionComponent, useState } from "react";
import { FunctionBody } from "typescript";

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


const BorrowPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [search, setSearch]: [string, (search: string) => void] = React.useState("");

const objects = [
    'banana',
    'broomstick',
    'broken cup'
];

const handleChange = (e: { target: { value: string; }; }) => {
    setSearch(e.target.value);
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <WelcomeText>Borrow Page</WelcomeText>
      <StyledInput type="text" placeholder= "Search" onChange={(e) => setSearch(e.target.value)}/>
      <ul>
        {objects.map((object)=>{
            if(search!=""&&object.toLowerCase().includes(search.toLowerCase())){
                return (
                    <li>
                        <h5>{object}</h5>
                    </li>
                );
            }
            return null;
            }
        )
        }
      </ul>
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
