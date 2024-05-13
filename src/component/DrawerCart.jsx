import { Box, Button, Divider, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import CartList from "./Header/CartList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { updateOpenDrawer } from "../redux/feature/drawerSlice";
import { NavLink } from "react-router-dom";

export const DrawerCart = ({ cartItem }) => {
  const dispatch = useDispatch();
  const isOpenDrawer = useSelector((state) => state.drawerSlice.isOpenDrawer);
  const [open, setOpen] = useState(isOpenDrawer);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  useEffect(() => {
    setOpen(isOpenDrawer);
  }, [isOpenDrawer]);
  let total = 0;
  const getTotal = cartItem.map((item) => {
    return (total +=
      (item.price - (item.discountPercentage / 100) * item.price).toFixed(2) *
      item.quantity);
  });
  const DrawerContent = (
    <Box sx={{ width: 300 }} role="presentation">
      <h3 style={{ marginLeft: 16 }}>Cart</h3>
      <Divider />  
      {cartItem.map((item) => (
        <CartList key={item.id} item={item} />
      ))}
      {cartItem.length !== 0 ? (
        <div style={{}}>
          <h3 style={{ marginLeft: 16 }}>Total: {total.toFixed(2)} $</h3>
          <NavLink
            to="/checkout"
            style={{ color: "black", textDecoration: "none" }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "rgb(204, 49, 139)",
                width: "90%",
                margin: "0px 15px",
              }}
              onClick={() => {
                dispatch(updateOpenDrawer(false));
              }}
            >
              <FontAwesomeIcon
                icon={faReceipt}
                style={{
                  padding: 0,
                  marginRight: "10px",
                  color: "white",
                }}
              />
              Checkout
            </Button>{" "}
          </NavLink>
        </div>
      ) : (
        <div></div>
      )}
    </Box>
  );
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => dispatch(updateOpenDrawer(false))}
    >
      {DrawerContent}
    </Drawer>
  );
};
