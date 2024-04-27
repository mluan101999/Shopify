import React from 'react'
import { Button } from "@mui/material";
import hero from "../../../assets/images/hero.png";

const Panel = () => {
  return (
    <div className="panel">
        <div className="panel-content">
          <div className="panel-content-left">
            <h4>Staring at $999</h4>
            <h1>The best notebook collection 2024</h1>
            <h3>Exclusive offer -10% of this week</h3>
            <Button style={{ background: "white", color: "black" }}>
              Shop Now
            </Button>
          </div>
          <div className="panel-content-right">
            <img src={hero} width={"500px"} />
          </div>
        </div>
      </div>
  )
}

export default Panel