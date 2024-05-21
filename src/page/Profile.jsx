import React from 'react'
import Header from '../component/Header/Header'
import avt from "../assets/images/avt.jpg"
import { Divider } from '@mui/material'
const Profile = () => {
  return (
    <>
      <Header />
      <div className='profile'>
        <div style={{display:"flex",marginLeft:"20px"}}>
          <img src={avt} width={"200px"} height={"200px"} style={{ objectFit: 'cover', borderRadius: "100%", margin: "10px 60px" }} />
          <div style={{width:"50%",height:"185px",padding:"15px",display:"flex",flexDirection:"column",borderRadius:"30px"}}>
            <h1 style={{marginTop:"40px"}}>Lang Minh Luan</h1>
            <h3>React Developer</h3>
          </div>
        </div>
        <div className='profileBottom'>
          <div className='profileLeft'>
          <div style={{ backgroundColor: "#d5dee6", padding: "10px", borderRadius: "30px", width: "80%" }}> 
            <p>Birthday: 29/10/1999</p>
            <p>Email: mluan101999@gmail.com</p>
            <p>Phone: 0762930580</p>
            <h3>EDUCATION</h3>
            <Divider style={{ width: "80%", margin: 0 }} />
            <p>Infomation Technology</p>
            <h4>CanTho University</h4>
            <p>2017 - 2022</p>
            <h3>SKILL</h3>
            <Divider style={{ width: "80%", margin: 0 }} />
            <p>HTML, CSS, JAVASCRIPT, REACTJS, SQL</p>
            <h3>LANGUAGE</h3>
            <Divider style={{ width: "80%", margin: 0 }} />
            <p>English</p>
            <p>Vietnamese</p>
          </div>
        </div>
        <div className='profileRight'>
          <div style={{padding: "10px", borderRadius: "30px", width: "80%" }}>
            <h3>OBJECTIVE</h3>
            <Divider style={{ width: "80%", margin: 0 }} />
            <p>To become a software developer in the future. Learning about new technologies.</p>
            <h3>WORK EXPERIENCE</h3>
            <Divider style={{ width: "80%", margin: 0 }} />
            <p>November 2022 - present</p>
            <h4>HauGiang Hospital</h4>
            <p>IT Support</p>
            <ul>
              <li>
                Support users in using medical examination and treatment software and database management
              </li>
            </ul>
            <h3>ACTIVITIES</h3>
            <Divider style={{ width: "80%", margin: 0 }} />
            <p>June 2019 - July 2019</p>
            <h4>Service Learning Programme</h4>
            <p>Volunteer</p>
            <ul>
              <li>
              Teaching computer science and English to children in difficult circumstances
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>

    </>
  )
}

export default Profile