import React, { useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { updateStateLogin } from "../../redux/feature/authentSlice";
import { removeFromWishlist } from "../../redux/feature/wishlistSlice";

const WishlistProduct = ({ item }) => {
  const isLogin = useSelector((state) => state.authentSlice.isLogin);
  const dispatch = useDispatch();
  const handleClose = () => {
    console.log(formLogin);
    setOpen(false);
  };

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
    <div key={item.id} className="box-product" style={{marginBottom:"10px"}}>
      <Link to={{ pathname: `/product/${item.id}` }}>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="inline-block h-60"
        />
      </Link>
      <p>{item.category}</p>
      <h4>{item.title}</h4>
      <Rating
        name="text-feedback"
        value={item.rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "35%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "blue", fontSize: "20px" }}>
            ${" "}
            {(
              item.price -
              (item.discountPercentage / 100) * item.price
            ).toFixed(2)}
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <strike style={{ fontSize: "12px" }}>${item.price}</strike>
            <p
              style={{
                fontSize: "13px",
                marginLeft: "5px",
                fontWeight: "bold",
              }}
            >
              -{item.discountPercentage}%
            </p>
          </div>
        </div>
        <div
          style={{
            width: "65%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          
          
          <Toaster />
        </div>
      </div>
      <div style={{display:"flex",gap:"10px",marginTop:"5px"}}>
      <Button
            variant="contained"
            style={{ backgroundColor: "rgb(204, 49, 139)" }}
            onClick={() => handleAddToCart(item)}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{
                padding: 0,
                marginRight: "5px",
                color: "white",
              }}
            />
            ADD TO CART
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "rgb(209, 70, 70)" }}
            onClick={() => dispatch(removeFromWishlist(item.id))}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{
                padding: 0,
                marginRight: "5px",
                color: "white",
              }}
            />
            DELETE
          </Button>
      </div>
    </div>
  );
};

export default WishlistProduct;
