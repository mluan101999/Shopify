import React from "react";

const CartList = ({item}) => {
  const handleIncrementCart = () => {}
  return (
    <div className="list-cart">
      <div className="box-cart">
        <div>
          <img
            src={item.thumbnail}
            width={"60px"}
            height={"60px"}
          />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <p>{item.title}</p>
          <p style={{fontWeight:"bold"}}>$ {(item.price -(item.discountPercentage / 100) * item.price).toFixed(2)}</p>
          <div style={{ display: "flex" }}>
            <button onClick={() => handleIncrementCart()}>+</button>
            <p style={{fontWeight:"bold"}}>{item.quantity}</p>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
