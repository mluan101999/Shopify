import React from 'react'
import { Button } from "@mui/material";
import banner from '../../../assets/images/banner.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-content-left">
          <img src={banner} width={"100%"} height={"100%"} />
        </div>
        <div className="banner-content-right">
          <h2>Don't miss the offer</h2>
          <h3>Grab it now</h3>
          <button class="animated-button">
            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span class="text">Shop Now</span>
            <span class="circle"></span>
            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Banner