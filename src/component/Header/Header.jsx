import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Dialog, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DialogLogin from "../DialogLogin";
import { updateStateLogin } from "../../redux/feature/authentSlice";
import LoginPopup from "../LoginPopup";
import { NavLink } from "react-router-dom";
import { DrawerCart } from "../DrawerCart";
import { updateOpenDrawer } from "../../redux/feature/drawerSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.authentSlice.isLogin);
  const cartItem = useSelector((state) => state.cartSlice.cartItem);

  const handleClickLogin = () => {
    dispatch(updateStateLogin(true));
  };

  const handleOpenDrawerCart = () => {
    if (!isLogin) {
      dispatch(updateStateLogin(true));
    } else {
      dispatch(updateOpenDrawer(true));
    }
  };

  return (
    <div className="header">
      <div className="header1">
        {/* Logo and search */}
        <div>
          <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
            <h1 className="h1-header">LuanStore</h1>
          </NavLink>
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
          <NavLink
            to="/product"
            style={{ color: "black", textDecoration: "none" }}
          >
            <h4 style={{ cursor: "pointer" }}>Product</h4>
          </NavLink>
          {isLogin ? (
            <FontAwesomeIcon
              icon={faUser}
              style={{
                marginLeft: "20px",
                marginRight: "5px",
                color: "gray",
                cursor: "pointer",
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faUser}
              style={{
                marginLeft: "20px",
                marginRight: "5px",
                color: "gray",
                cursor: "pointer",
                visibility: "hidden",
              }}
            />
          )}

          <h4 style={{ cursor: "pointer" }}>
            {isLogin ? (
              <LoginPopup />
            ) : (
              <Button variant="contained" onClick={handleClickLogin}>
                Login
              </Button>
            )}
          </h4>
          <div style={{ position: "relative", cursor: "pointer" }}>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{
                marginLeft: "20px",
                marginRight: "5px",
                color: "gray",
              }}
              onClick={handleOpenDrawerCart}
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
              {cartItem.length}
            </b>
          </div>
        </div>
        {/* Icon */}
        <DialogLogin />
       
        <DrawerCart cartItem={cartItem}/>
      </div>
    </div>
  );
};

export default Header;
