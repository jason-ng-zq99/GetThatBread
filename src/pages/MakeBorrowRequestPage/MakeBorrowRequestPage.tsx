import React, { ChangeEvent, useState } from 'react'
import 'antd/dist/antd.css'
import { Table, Space, Button } from 'antd'
import {
  MainContainer,
  InputContainer,
  WelcomeText,
  ButtonContainer,
  HorizontalRule,
  GlobalStyle,
  StyledInput,
  StyledButton,
  RequestTableContainer,
} from "./styles/MakeBorrowRequestPage.styled";


const MakeBorrowRequestPage = () => {
  interface ItemProps {
    key: number
    requestNumber: number
    requester: string
    itemDescription: string
    quantity: number
  }

  let keyNumber = 3
  let requestNumber = 3

  const [newItemDescription, setItemDescription] = useState('');
  const [newQuantity, setItemQuantity] = useState(1);
  const [borrowRequests, setBorrowRequests] = useState<ItemProps[]>([
    {
      key: 1,
      requestNumber: 1,
      requester: 'ikan_brand',
      itemDescription: 'potato',
      quantity: 365,
    },
    {
      key: 2,
      requestNumber: 2,
      requester: 'ayam_brand_o0o',
      itemDescription: 'tomato',
      quantity: 20,
    },
    {
      key: 3,
      requestNumber: 3,
      requester: 'ayam_brand_o0o',
      itemDescription: 'oregano',
      quantity: 60,
    }
  ])

  const columns = [
    {
      title: 'Request Number',
      dataIndex: 'requestNumber',
      key: 'requestNumber',
    },
    {
      title: 'Requester',
      dataIndex: 'requester',
      key: 'requester',
    },
    {
      title: 'Item Description',
      dataIndex: 'itemDescription',
      key: 'itemDescription',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: function actions(itemAffected: ItemProps) {
        return (
          <Space size="middle">
            <Button danger onClick={() => handleDeleteItem(itemAffected)}>
              Delete
            </Button>
          </Space>
        )
      },
    },
  ];

  const handleDeleteItem = (requestToDelete: ItemProps) => {
    const updatedList = borrowRequests.filter((borrowRequest) => borrowRequest.requestNumber !== requestToDelete.requestNumber)
    setBorrowRequests(updatedList)
  }

  const handleNewItemDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setItemDescription(e.target.value)
  }

  const handleNewItemQuantity = (newItemQuantity: number) => {
    setItemQuantity(newItemQuantity)
  }

  const addRequest = (itemName: string, itemQuantity: number) => {
    keyNumber++
    requestNumber++
    const newRequest: ItemProps = {
      key: keyNumber,
      requestNumber: requestNumber,
      requester: 'ayam_brand_o0o',
      quantity: itemQuantity,
      itemDescription: itemName,
    }
    const updatedList = [...borrowRequests, newRequest]
    setBorrowRequests(updatedList)
  }

  const handleSubmit = () => {
    addRequest(newItemDescription, newQuantity)
    setItemDescription('')
    setItemQuantity(0)
  }

  return (
    <>
    <MainContainer>
      <GlobalStyle />
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <StyledInput
          type="text"
          placeholder="Item Description"
          value={newItemDescription}
          onChange={(e) => handleNewItemDescription(e)}
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
        <StyledButton onClick={() => handleSubmit()}>
          Create Request
        </StyledButton>
      </ButtonContainer>
      <HorizontalRule />
    </MainContainer>
    <RequestTableContainer>
      <Table columns={columns} dataSource={borrowRequests} />
    </RequestTableContainer>
    </>
  );
};

export default MakeBorrowRequestPage;