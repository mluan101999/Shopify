import React from 'react'
import { Button } from "@mui/material";
import banner from '../../../assets/images/banner.jpg';

const Banner = () => {
  return (
    <div className="banner">
        <div className="banner-content">
          <div className="banner-content-left">
            <img src={banner} width={"100%"} />
          </div>
          <div className="banner-content-right">
            <h2>Don't miss the offer</h2>
            <h3>Grab it now</h3>
            <Button
              style={{
                background: "white",
                color: "black",
                borderRadius: "7px",
              }}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
  )
}

export default Banner