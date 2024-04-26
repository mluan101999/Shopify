import { Button } from "@mui/material";
import React from "react";
import hero from "../assets/images/hero.png";
import offer1 from "../assets/images/1.jpg";
import offer2 from "../assets/images/2.jpg";

import offer3 from "../assets/images/3.jpg";

import offer4 from "../assets/images/4.jpg";

const Main = () => {
  return (
    <div>
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

      <div className="offer">
       <div className="offer-option">
        <img src={offer1} width={"23%"} />
        <img src={offer2} width={"23%"} />
        <img src={offer3} width={"23%"} />
        <img src={offer4} width={"23%"} />
       </div>
      </div>
    </div>
  );
};

export default Main;
