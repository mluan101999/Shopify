import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  reduceFromCart,
  removeFromCart,
} from "../../redux/feature/cartSlice";
// import { IoMdAddCircleOutline } from "react-icons/io";


const CartList = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        ...item,
        quantity: 0,
      })
    );
  };
  return (
    <div className="list-cart">
      <div className="box-cart">
        <div>
          <img src={item.thumbnail} width={"60px"} height={"60px"} />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <p>{item.title}</p>
          <p style={{ fontWeight: "bold" }}>
            ${parseFloat((item.price - (item.discountPercentage / 100) * item.price) * item.quantity).toFixed(2)}
          </p>
          <div style={{ display: "flex",marginBottom:"7px" }}>
          <button
              style={{ marginRight: "5px" }}
              onClick={() => dispatch(reduceFromCart(item.id))}
            >
              -
            </button>
            <p style={{ fontWeight: "bold" }}>{item.quantity}</p>
           
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => handleAddToCart(item)}
            >
              +
            </button>
            <button
              style={{
                marginLeft: "116px",
                backgroundColor: "#eb0f0f",
                borderRadius: "5px",
                color: "white",
              }}
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
