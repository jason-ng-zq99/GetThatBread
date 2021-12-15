import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  background: rgba(30, 100, 250, 0.15);
}
 
`;

export const MainContainer = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  height: 50%;
  width: 40%;
  border-radius: 10px;
  color: #ffffff;
  letter-spacing: 0.4rem;
`;

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: gray;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  margin-top: 1em;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  text-transform: uppercase;
  color: black;
`;

export const InputContainer = styled.div`
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

export const ForgotPassword = styled.h4`
  cursor: pointer;
  color: black;
`;

export const ImageContainer = styled.img`
  height: 50%;
  width: 50%;
  margin: 2rem 0 0.8rem 0; 
  border: solid 3px rgba(30, 50, 235, 0.8);
  border-radius: 50px;
`

export const Text = styled.h3`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  font-family: Helvetica;
  letter-spacing: 0.1rem;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
`

export const SmallText = styled.h5`
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  font-family: Helvetica;
  letter-spacing: 0rem;
`