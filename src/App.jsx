import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import { DetailProduct } from "./page/DetailProduct";
import Product from "./page/Product";
import Checkout from "./page/Checkout";
import Wishlist from "./page/Wishlist";
import Profile from "./page/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="" >
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="product/:id" element={<DetailProduct />}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/wishlist" element={<Wishlist/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
