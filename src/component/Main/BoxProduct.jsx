import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";

const BoxProduct = ({item}) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) =>{
    dispatch(addToCart({
      ...item,
      quantity:0,
    }));
  }
  return (
    <div key={item.id} className="box-product">
    <img src={item.thumbnail} />
    <p>{item.category}</p>
    <h4>{item.title}</h4>
    <Rating
      name="text-feedback"
      value={item.rating}
      readOnly
      precision={0.5}
      emptyIcon={
        <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
      }
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
          $ {(item.price -((item.discountPercentage / 100) * item.price)).toFixed(2)}
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p style={{ fontSize: "12px" }}>
            <strike>${item.price}</strike>
          </p>
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
      </div>
    </div>
  </div>
  );
};

export default BoxProduct;
