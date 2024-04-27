import React from "react";


const PolicyOption = (props) => {
  return (
    <div
      style={{
        width: "23%",
        height: "auto",
        backgroundColor: "#DDDDDD",
        marginRight: "5",
        display: "flex",
        gap: 15,
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {props.icon }
      </div>
      <div>
        <h5 style={{padding:'0px',marginBottom:'0px'}}>{props.h5}</h5>
        <p style={{padding:'0px',marginTop:'0px',color:'#444'}}>{props.p}</p>
      </div>
    </div>
  );
};

export default PolicyOption;
