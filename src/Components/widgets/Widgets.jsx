import React from 'react'
import "./widgets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widgets = ({type}) => {

  let data;

  //Temporary 
  const amount = 100
  const diff = 20

  switch(type){
     case "user":
       data = {
         title: "USERS",
         isMoney: false,
         link: "See All Users",
         icon: (
          <PersonOutlineOutlinedIcon className='icon' style={{color:'crimson', backgroundColor: "rgba(255,0,0,0.2)"}}/>
         )
       };
       break;

       case "order":
       data = {
         title: "ORDERS",
         isMoney: false,
         link: "View All Orders",
         icon: (
          <ShoppingCartOutlinedIcon className='icon' style={{color:'goldenrod', backgroundColor: "rgba(218,165,32,0.2)"}}/>
         )
       };
       break;

       case "earning":
       data = {
         title: "EARNINGS",
         isMoney: true,
         link: "View Net Earnings",
         icon: (
          <MonetizationOnOutlinedIcon className='icon' style={{color:'green', backgroundColor: "rgba(0,128,0,0.2)"}} />
         )
       };
       break;

       case "balance":
       data = {
         title: "BALANCE",
         isMoney: true,
         link: "See Details",
         icon: (
          <AccountBalanceOutlinedIcon className='icon' style={{color:'purple', backgroundColor: "rgba(128,0,128,0.2)"}} />
         )
       };
       break;

       default : 
        break; 
       


  }
  

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">

          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
          </div>
          
          {data.icon}

        </div>
    </div>
  )
}

export default Widgets