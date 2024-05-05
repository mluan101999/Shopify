import React, { useEffect } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Panel from "../component/Main/Panel/Panel";
import Policy from "../component/Main/Policy/Policy";
import ApiService from "../service/ApiServices";
import TopProduct from "../component/Main/TopProduct/TopProduct";
import { useDispatch } from "react-redux";
import { ListProduct, NewProduct } from "../redux/feature/productSlice";
import Banner from "../component/Main/Banner/Banner";
import NewArrival from "../component/Main/NewArrival/NewArrival";

const Home = () => {
  const dispatch = useDispatch();
  const loadDataTopProduct = async () => {
    const res = await ApiService.ApiTopProduct();
    const { products } = res.data;
    dispatch(ListProduct(products.slice(0, 8)));
    dispatch(NewProduct(products.slice(9,17)));
  };

  useEffect(() => {
    loadDataTopProduct();
  }, []);

  return (
    <div>
      <Header />
      <Panel />
      <Policy />
      <TopProduct />
      <Banner />
      <NewArrival/>
    </div>
  );
};

export default Home;
