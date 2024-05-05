import React from "react";
import { Button, Rating } from "@mui/material";
import { useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import BoxProduct from "../BoxProduct";

const NewArrival = () => {
  const dataNewProduct = useSelector((state) => state.productSlice.newProduct);
  console.log(dataNewProduct)
  return (
    <div className="new">
      <h1>New Arrival</h1><div className="new-product">
        <div className="list-new-product">
          {dataNewProduct.map((item) => (
            <BoxProduct key={item.id} item={item}/>
          ))}
           
        </div>
      </div>
    </div>
  );
};

export default NewArrival;

{
  /* <div className="new">
      <h1>New Arrival</h1>
      
    </div> */
}
