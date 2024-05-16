import React, { useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../redux/feature/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
// import { updateStateLogin } from "../../redux/feature/authentSlice";

const BoxProductSlide = ({ item }) => {
  const isLogin = useSelector((state) => state.authentSlice.isLogin);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    if (isLogin) {
      dispatch(
        addToCart({
          ...item,
          quantity: 0,
        })
      );
    } else {
      dispatch(updateStateLogin(true));
    }
  };
  return (
    <div className="slide-box-product">
      <Link to={{ pathname: `/product/${item.id}` }}>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="inline-block h-60"
        />
      </Link>
      <h4  style={{margin:"0" }}>{item.title}</h4>
      <strike style={{ fontSize: "12px" }}>${item.price}</strike>
      <div style={{margin:"0",display:'flex',alignItems:'center'}}>
        <p style={{ color: "red", fontSize: "18px",margin:"1px",fontWeight:"bold" }}>
          $ {(item.price -(item.discountPercentage / 100) * item.price).toFixed(2)}
        </p>
        <div style={{marginLeft:"10px",border:'2px solid red',borderRadius:"3px",backgroundColor:"rgb(255,237,237)"}}>
          <p style={{ color: "red", fontSize: "13px",margin:"1px" }}>-{item.discountPercentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default BoxProductSlide;
