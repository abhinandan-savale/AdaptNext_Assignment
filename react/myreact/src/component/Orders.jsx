import React, { Component } from 'react'
import OrderTable from "./OrderTable";
import './Orders.css'
import shop from "./shop.png";
import rectangle from  './rectangle.png'

const Orders = () => {

  const currentData = [
    {
      Squre:<img src={rectangle} alt=""/>,
      channel:<img src={shop} alt=''/>,
      trackingNumber: "#TKN20203754",
      orderDate: "2022-06-03",
      city: "Lucknow",
      customerName: "Abhinandan savale",
      orderValue: "122.00",
      status: "Pending",
    },
    {
      channel:<img src={shop} alt=''/>,
      trackingNumber: "#TKN20203774",
      orderDate: "2022-06-03",
      city: "Lucknow",
      customerName: "Abhay patil",
      orderValue: "123.00",
      status: "Pending",
    },
    {
      channel:<img src={shop} alt=''/>,
      trackingNumber: "#TKN20203754",
      orderDate: "2022-05-04",
      city: "Lucknow",
      customerName: "Abhishek Dixit",
      orderValue: "100",
      status: "Pending",
    },
    
  ];
    return (
      <div>
        <> Orders</>
        <div className='hhh'>
        <OrderTable currentData={currentData} />
        </div>
      </div>
    );
  };
export default Orders