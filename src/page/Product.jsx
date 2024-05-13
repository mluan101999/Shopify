import React, { useEffect, useState } from "react";
import Header from "../component/Header/Header";
import ApiService from "../service/ApiServices";
import BoxProduct from "../component/Main/BoxProduct";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Product = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const loadAllProducts = async () => {
    const res = await ApiService.ApiAllProduct();
    setAllProduct(res.data.products);
  };
  const loadDataCategories = async () => {
    const res = await ApiService.ApiAllCategory();
    setCategories(res.data);
  };
  useEffect(() => {
    loadAllProducts();
  }, []);
  useEffect(() => {
    loadDataCategories();
  }, []);

  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const getallProduct = allProduct.map((item) => {
    return item;
  });
  const updateAllProduct = getallProduct.filter(
    (product) => product.category === category
  );

  console.log(category);
  return (
    <div>
      <Header />

      <div className="allProduct">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1>All Product</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 style={{ margin: "0px", marginRight: "5px" }}>Category:</h3>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="medium">
              <InputLabel id="demo-select-large-label">Select</InputLabel>
              <Select
                defaultValue="All"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={category}
                label="Age"
                onChange={handleChange}
              >
                {categories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "5px",
            flexWrap: "wrap",
            width: "100%",
            height: "auto",
          }}
        >
          {category === ""
            ? allProduct.map((item) => <BoxProduct key={item.id} item={item} />)
            : updateAllProduct.map((item) => (
                <BoxProduct key={item.id} item={item} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
