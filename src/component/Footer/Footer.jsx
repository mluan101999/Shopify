import React from 'react'
import payment from "../../assets/images/ttoan.png"
import ship from "../../assets/images/dvvc.png"
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h4>About Us</h4>
        <p>Introduce</p>
        <p>Recruitment</p>
      </div>
      <div>
        <h4>Policy</h4>
        <p>Warranty Policy</p>
        <p>Payment policy</p>
        <p>Delivery policy</p>
        <p>Privacy Policy</p>
      </div>
      <div>
        <h4>Infomation</h4>
        <p>Shop system</p>
        <p>Shopping guide</p>
        <p>Look up warranty address</p>
      </div>
      <div>
        <h4>Contact</h4>
        <p style={{fontSize:"14px"}}>Purchase: <b>0762930580</b></p>
        <p style={{fontSize:"14px"}}>Guarantee: <b>0762930580</b></p>        
        <p style={{fontSize:"14px"}}>Email: <a href='https://mail.google.com/'>mluan101999@gmail.com</a></p>
      </div>
      <div>
        <div style={{margin:"0px"}}>
        <h4>Carrier</h4>
        <img src={ship} alt=""  width={"400px"} height={"auto"} style={{marginTop:"-20px"}}/>
        </div>
        <div style={{margin:"0px"}}>
        <h4>Payment</h4>
        <img src={payment} alt=""  width={"400px"} height={"auto"} style={{marginTop:"-20px"}}/>
        </div>      
      </div>
    </div>
  )
}

export default Footer