import React from "react";
import { useSelector } from "react-redux";
import BoxProduct from "../BoxProduct";

const NewArrival = () => {
  const dataNewProduct = useSelector((state) => state.productSlice.newProduct);
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

