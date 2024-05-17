import React, { useEffect } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Panel from "../component/Main/Panel/Panel";
import Policy from "../component/Main/Policy/Policy";
import ApiService from "../service/ApiServices";
import TopProduct from "../component/Main/TopProduct/TopProduct";
import { useDispatch } from "react-redux";
import { ListProduct, NewProduct,SaleProducts } from "../redux/feature/productSlice";
import Banner from "../component/Main/Banner/Banner";
import NewArrival from "../component/Main/NewArrival/NewArrival";
import { loadCartFromStore } from "../redux/feature/cartSlice";
import SaleProduct from "../component/Main/Sale/SaleProduct";

const Home = () => {
  const dispatch = useDispatch();
  const loadDataTopProduct = async () => {
    const res = await ApiService.ApiTopProduct();
    const { products } = res.data;
    dispatch(ListProduct(products.slice(0, 8)));
    dispatch(NewProduct(products.slice(9,17)));
  };
  const loadDataSaleProduct = async () =>{
    const res = await ApiService.ApiAllProduct();
    const {products} = res.data;
    // console.log(products);
    const saleProduct = products.sort((a,b) => b.discountPercentage - a.discountPercentage).slice(0,15);
    console.log(saleProduct,"sale");
    dispatch(SaleProducts(saleProduct))
  }
  if(localStorage.getItem('cartItems')){
    const arrayItems = JSON.parse(localStorage.getItem('cartItems'));
    dispatch(loadCartFromStore(arrayItems));
  }else{
    localStorage.setItem('cartItems', []);
  }
  useEffect(() => {
    loadDataTopProduct();
    loadDataSaleProduct();
  }, []);

  return (
    <div>
      <Header />
      <Panel />
      <Policy />
      <SaleProduct/>
      <TopProduct />
      <Banner />
      <NewArrival/>
      {/* <Divider />   */}
      <Footer/>
    </div>
  );
};

export default Home;
