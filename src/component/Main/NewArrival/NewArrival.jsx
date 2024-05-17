import React from "react";
import { useSelector } from "react-redux";
import BoxProduct from "../BoxProduct";

const NewArrival = () => {
  const dataNewProduct = useSelector((state) => state.productSlice.newProduct);
  return (
    <div className="new">
      <div style={{ display: "flex", alignItems: "center", gap: "15px", marginLeft: '35px' }}>
        <img src='https://cdn-icons-png.freepik.com/256/11111/11111156.png?semt=ais_hybrid' width={"50px"} height={"50px"} color="red"/>
        <h1>New Arrival</h1>
      </div>
      <div className="new-product">
        <div className="list-new-product">
          {dataNewProduct.map((item) => (
            <BoxProduct key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;

