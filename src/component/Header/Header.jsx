import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Divider } from "@mui/material";
import Drawer from "@mui/material/Drawer";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerContent = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <Button onClick={toggleDrawer(false)}></Button>
      <h3 style={{ marginLeft: 7 }}>Giỏ hàng</h3>
      <Divider />
      <div className="list-cart">
        <div className="box-cart">
          <div>
            <img src="https://picsum.photos/200/300" width={"50px"} height={"50px"} />
          </div>
          <div>
            <p>Iphone</p>
            <p>$999</p>
            <div style={{display:"flex"}}>
            <button>+</button>
            <p>Số lượng</p>
            <button>-</button>
            </div>

          </div>
        </div>
        <div className="box-cart">SP1</div> 
        <div className="box-cart">SP1</div> 
        <div className="box-cart">SP1</div>

      </div>
    </Box>
  );

  return (
    <div className="header">
      <div className="header1">
        {/* Logo and search */}
        <div>
          <h1>Shopify</h1>
          <div className="input">
            <input placeholder="Search for a product ..."></input>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ marginLeft: "5px", color: "white" }}
            />
          </div>
        </div>
        {/* Logo and search */}

        {/* Icon */}
        <div className="user">
          <h4 style={{ cursor: "pointer" }}>Product</h4>
          <FontAwesomeIcon
            icon={faUser}
            style={{
              marginLeft: "20px",
              marginRight: "5px",
              color: "gray",
              cursor: "pointer",
            }}
          />
          <h4 style={{ cursor: "pointer" }}>Login</h4>
          <div style={{ position: "relative" }}>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{
                marginLeft: "20px",
                marginRight: "5px",
                color: "gray",
                cursor: "pointer",
              }}
              onClick={toggleDrawer(true)}
            />
            <b
              style={{
                position: "absolute",
                top: "-10px",
                right: "-12px",
                background: "red",
                color: "white",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              17
            </b>
          </div>
        </div>
        {/* Icon */}

        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {DrawerContent}
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
