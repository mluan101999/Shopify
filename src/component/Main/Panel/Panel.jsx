import React from 'react'
import hero from "../../../assets/images/hero.png";

const Panel = () => {
  return (
    <div className="panel">
      <div className="panel-content">
        <div className="panel-content-left">
          <h4>Staring at $999</h4>
          <h1>The best notebook collection 2024</h1>
          <h3>Exclusive offer -10% of this week</h3>
          <button className="animated-button">
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className="text">Shop Now</span>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>

        </div>
        <div className="panel-content-right">
          <img src={hero} width={"500px"} />
        </div>
      </div>
    </div>
  )
}

export default Panel