import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import BoxProduct from "./BoxProduct";
import banner from "../../assets/images/banner.jpg";
import ApiService from "../../service/ApiServices";
import Panel from "./Panel/Panel";
import Banner from "./Banner/Banner";
import Policy from "./Policy/Policy";

const Main = () => {
  const [dataTopProduct, setDataTopProduct] = useState([]);
  const [dataNewProduct, setDataNewProduct] = useState([]);
  // const [filterProduct, setFilterProduct] = useState({
  //   keySearch: "",
  //   limit: 8,
  //   skip:0
  // });

  const loadDataTopProduct = async () => {
    const res = await ApiService.ApiTopProduct();
    if (res.status === 200) {
      const { products, limit, skip } = res.data;
      setDataTopProduct(res.data.products);
      // setFilterProduct({
      //   ...filterProduct,
      //   skip,
      //   limit
      // })
    }
  };
  const loadDataNewProduct = async () => {
    const res = await ApiService.ApiNewProduct();
    if (res.status === 200) {
      const { products, limit, skip } = res.data;
      setDataNewProduct(products);
      // setFilterProduct({
      //   ...filterProduct,
      //   skip,
      //   limit
      // })
    }
  };
  useEffect(() => {
    loadDataTopProduct();
    loadDataNewProduct();
  }, []);

  return (
    <div>
      <Panel />
      <Policy />

      <div className="trending">
        <h1>Trending Product</h1>
        <div className="trending-product">
          <div className="list-product">
            {dataTopProduct.map((item) => {
              return (
                <div key={item.id} className="box-product">
                  <img src={item.thumbnail} />
                  <p>{item.category}</p>
                  <h4>{item.title}</h4>
                  <Rating
                    name="text-feedback"
                    value={item.rating}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        width: "35%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <p style={{ color: "blue", fontSize: "20px" }}>
                        ${" "}
                        {(
                          item.price -
                          (item.discountPercentage / 100) * item.price
                        ).toFixed(2)}
                      </p>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <p style={{ fontSize: "12px" }}>
                          <strike>${item.price}</strike>
                        </p>
                        <p
                          style={{
                            fontSize: "13px",
                            marginLeft: "5px",
                            fontWeight: "bold",
                          }}
                        >
                          -{item.discountPercentage}%
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "65%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "rgb(204, 49, 139)" }}
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Banner />

      <div className="new">
        <h1>New Arrival</h1>
        <div className="new-product">
          <div className="list-new-product">
            {dataNewProduct.map((item) => {
              return (
                <div key={item.id} className="box-product">
                  <img src={item.thumbnail} />
                  <p>
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </p>
                  <h4>{item.title}</h4>
                  <Rating
                    name="text-feedback"
                    value={item.rating}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        width: "35%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <p style={{ color: "blue", fontSize: "20px" }}>
                        ${" "}
                        {(
                          item.price -
                          (item.discountPercentage / 100) * item.price
                        ).toFixed(2)}
                      </p>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <p style={{ fontSize: "12px" }}>
                          <strike>${item.price}</strike>
                        </p>
                        <p
                          style={{
                            fontSize: "13px",
                            marginLeft: "5px",
                            fontWeight: "bold",
                          }}
                        >
                          -{item.discountPercentage}%
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "65%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "rgb(204, 49, 139)" }}
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
