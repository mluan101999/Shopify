import { Button, Rating } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import StarIcon from "@mui/icons-material/Star";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import BoxProduct from '../BoxProduct';

const TopProduct = () => {
    const dataTopProduct = useSelector((state) => state.productSlice.products)
  return (
    <div>
         <div className="trending">
        <h1>Trending Product</h1>
        <div className="trending-product">
          <div className="list-product">
            {dataTopProduct.map((item) => (
                <BoxProduct key={item.id} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopProduct