import React, { useEffect, useState } from "react";
import Header from "../component/Header/Header";
import { useParams } from "react-router-dom";
import ApiService from "../service/ApiServices";
import { Button, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import {
  faBagShopping,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import BoxProduct from "../component/Main/BoxProduct";
import { useDispatch, useSelector } from "react-redux";
import { updateStateLogin } from "../redux/feature/authentSlice";
import { addToCart } from "../redux/feature/cartSlice";
import { updateOpenDrawer } from "../redux/feature/drawerSlice";
import { addToWishlist } from "../redux/feature/wishlistSlice";

export const DetailProduct = () => {
  const isLogin = useSelector((state) => state.authentSlice.isLogin);
  const dispatch = useDispatch();
  const [detailProduct, setDetailProduct] = useState({
    id: null,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  });
  const [similarProduct, setSimilarProduct] = useState([]);
  const [img,setImg] = useState(null);
  const { id } = useParams();
  const loadDataDetail = async () => {
    const data = await ApiService.ApiDetail(id);
    setDetailProduct(data.data);
  };
  const loadDataSimilarProduct = async () => {
    const data = await ApiService.ApiSimilar(detailProduct.category);
    setSimilarProduct(data.data.products);
  };
  useEffect(() => {
    loadDataDetail();
  }, []);

  useEffect(() => {
    loadDataSimilarProduct();
  }, [detailProduct.category]);

  const handleAddToCart = (detailProduct) => {
    if (isLogin) {
      dispatch(
        addToCart({
          ...detailProduct,
          quantity: 0,
        })
      );
    } else {
      dispatch(updateStateLogin(true));
    }
  };

  const handleBuyNow = () => {
    if(isLogin){
      dispatch(
        addToCart({
          ...detailProduct,
          quantity: 0,
        })
      );
      dispatch(updateOpenDrawer(true));
    }else {
      dispatch(updateStateLogin(true));
    }
  };

  const handleAddToWishlist = () => {
    if(isLogin){
      dispatch(addToWishlist(detailProduct))
    }else{
      dispatch(updateStateLogin(true));
    }
  }

  const handleGetImg =(img) => {
    setImg(img)
  }
  console.log(img);
  return (
    <>
      <Header />
      <div className="detail">
        <div className="detail-content">
          <div style={{ width: "25%", height: "auto" }}>
            <div>
              <img
                src={img ?? detailProduct.thumbnail}
                width={"300px"}
                height={"300px"}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
                marginTop: "10px",
              }}
            >
              {detailProduct.images.map((img,index) => (
                <img
                  key={index}
                  src={img}
                  width={"60px"}
                  height={"50px"}
                  style={{ objectFit: "cover" }}
                  onClick={() => handleGetImg(img)}
                />
              ))}
            </div>
          </div>
          <div style={{ width: "40%", height: "auto" }}>
            <h2>{detailProduct.title}</h2>
            <Rating
              name="text-feedback"
              value={detailProduct.rating}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <h4 style={{ color: "rgb(69, 102, 223)" }}>
              {" "}
              ${" "}
              {(
                detailProduct.price -
                (detailProduct.discountPercentage / 100) * detailProduct.price
              ).toFixed(2)}
            </h4>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "-10px",
              }}
            >
              <strike style={{ fontSize: "12px" }}>
                ${detailProduct.price}
              </strike>
              <p
                style={{
                  fontSize: "13px",
                  marginLeft: "5px",
                  fontWeight: "bold",
                }}
              >
                -{detailProduct.discountPercentage}%
              </p>
            </div>
            <p>Branch: {detailProduct.brand}</p>
            <p>Category: {detailProduct.category}</p>
            <p>Stock: {detailProduct.stock}</p>
            <h4>About this product</h4>
            <p>{detailProduct.description}</p>
            <div className="buttonPageDetail">
              <Button
                variant="contained"
                style={{ backgroundColor: "rgb(204, 49, 139)" }}
                onClick={() => handleAddToCart(detailProduct)}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{
                    padding: 0,
                    marginRight: "5px",
                    color: "white",
                  }}
                />
                ADD TO CART
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "rgb(69, 102, 223)" }}
                onClick={handleBuyNow}
              >
                <FontAwesomeIcon
                  icon={faBagShopping}
                  style={{
                    padding: 0,
                    marginRight: "5px",
                    color: "white",
                  }}
                />
                BUY NOW
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "rgb(47, 240, 159)" }}
                onClick={handleAddToWishlist}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                    padding: 0,
                    marginRight: "5px",
                    color: "white",
                  }}
                />
                ADD TO WISHLIST
              </Button>
            </div>
          </div>
          <div style={{ width: "35%", height: "auto" }}>
            <h2>Reviews</h2>
            {["Nghiêm", "Đức", "Hải", "Minh", "Hằng"].map((item, index) => (
              <div style={{ marginTop: "4px" }} key={item}>
                <h3 style={{ margin: "1px" }}>{item}</h3>
                <Rating
                  name="text-feedback"
                  value={index + 1}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <p style={{ margin: "1px" }}>
                  The product is nice. I got the delivery on time. I am using it
                  for the last four months. My exprience with this product is
                  very good.
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr></hr>
        <div>
          <h1>Similar Product</h1>
          <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
            {similarProduct.map((item) => (
              <BoxProduct key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
