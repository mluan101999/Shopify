import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const BoxProduct = () => {
  return (
    <div className="box-product">
      <img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" />
      <p>smartphone</p>
      <h4>Iphone 9</h4>
      <Rating
        name="text-feedback"
        value="4"
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <div style={{ width: "35%", display: "flex", flexDirection: "column" }}>
          <p style={{color:'blue',fontSize:'20px'}}>$999</p>
          <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <p style={{fontSize:'12px'}}><strike>$1099</strike></p>
          <p style={{fontSize:'13px',marginLeft:"5px",fontWeight:'bold'}}>-11,83%</p>
          </div>
        </div>
        <div style={{ width: "65%", display: "flex", flexDirection: "column" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "rgb(204, 49, 139)" }}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{
                padding:0,
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
