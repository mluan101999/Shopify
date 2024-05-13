import React from "react";
import Header from "../component/Header/Header";
import { useSelector } from "react-redux";
import WishlistProduct from "../component/Main/WishlistProduct";
const Wishlist = () => {
  const wishlistItem = useSelector((state) => state.wishlistSlice.wishlistItem);
  console.log(wishlistItem);
  return (
    <div>
      <Header />
      <div className="wishlist">
        <h1 style={{color:'blueviolet'}}>Wishlist</h1>
        {wishlistItem.length !== 0 ? (
          <div className="wishlist-product">
            {wishlistItem.map((item) => (
              <WishlistProduct key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" width={"80%"} height={"490px"}/>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
