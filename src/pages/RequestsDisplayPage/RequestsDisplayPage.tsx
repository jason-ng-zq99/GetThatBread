import React, { useState } from "react";
import { Table } from 'antd'

const RequestsDisplayPage = () => {
  interface ItemProps {
    requestNumber: number
    quantity: number
    itemDescription: string
    returnDate: string 
  }

  let keyCount = 3
  let indexCount = 3

  const [items, setItems] = useState<ItemProps[]>([
    {
      requestNumber: 1,
      quantity: 365,
      itemDescription: 'potato',
      returnDate: new Date().toDateString(),
    },
    {
      requestNumber: 2,
      quantity: 20,
      itemDescription: 'tomato',
      returnDate: new Date().toDateString(),
    },
    {
      requestNumber: 3,
      quantity: 60,
      itemDescription: 'oregano',
      returnDate: new Date().toDateString(),
    },
  ])

  const columns = [
    {
      title: 'Request Number',
      dataIndex: 'requestNumber',
      key: 'requestNumber'
    },
    {
      title: 'Item Description',
      dataIndex: 'itemDescription',
      key: 'itemDescription'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity'
    },
    {
      title: 'Return Date',
      dataIndex: 'returnDate',
      key: 'returnDate'
    },
  ]
  return (
    <>
      <Table columns={columns} dataSource={items} />
    </>
  )
}

export default RequestsDisplayPage