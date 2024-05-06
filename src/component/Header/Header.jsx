import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Divider } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CartList from "./CartList";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItem = useSelector((state) => state.cartSlice.cartItem);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerContent = (
    <Box sx={{ width: 300 }} role="presentation">
      <Button onClick={toggleDrawer(false)}></Button>
      <h3 style={{ marginLeft: 7 }}>Cart</h3>
      <Divider />
      {cartItem.map((item) => (
        <CartList key={item.id} item={item} />
      ))}
      <h3>Total:200000000</h3>
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
          <div style={{ position: "relative", cursor: "pointer" }}>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{
                marginLeft: "20px",
                marginRight: "5px",
                color: "gray",
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
