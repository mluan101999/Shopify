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
            ${parseFloat((item.price - (item.discountPercentage / 100) * item.price) *item.quantity).toFixed(2)}
          </p>
          <div style={{ display: "flex", marginBottom: "7px",alignItems:"center" }}>
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

            <button className="bin-button" onClick={() => dispatch(removeFromCart(item.id))}>
              <svg
                className="bin-top"
                viewBox="0 0 39 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="5"
                  x2="39"
                  y2="5"
                  stroke="white"
                  stroke-width="4"
                ></line>
                <line
                  x1="12"
                  y1="1.5"
                  x2="26.0357"
                  y2="1.5"
                  stroke="white"
                  stroke-width="3"
                ></line>
              </svg>
              <svg
                className="bin-bottom"
                viewBox="0 0 33 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_8_19" fill="white">
                  <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                </mask>
                <path
                  d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                  fill="white"
                  mask="url(#path-1-inside-1_8_19)"
                ></path>
                <path d="M12 6L12 29" stroke="white" stroke-width="4"></path>
                <path d="M21 6V29" stroke="white" stroke-width="4"></path>
              </svg>
            </button>
            {/* <button
              style={{
                marginLeft: "116px",
                backgroundColor: "#eb0f0f",
                borderRadius: "5px",
                color: "white",
              }}
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              X
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
