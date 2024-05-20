import React from 'react'
import { useSelector } from 'react-redux'
import BoxProduct from '../BoxProduct';

const TopProduct = () => {
  const dataTopProduct = useSelector((state) => state.productSlice.products)
  return (
    <div>
      <div className="trending">
        <div style={{display:"flex",alignItems:"center",gap:"15px",marginLeft:'35px'}}>
          <img src='https://cdn-icons-png.flaticon.com/512/7198/7198872.png' width={"40px"} height={"40px"}/>
          <h1>Trending Product</h1>
        </div>
        <div className="trending-product">
          <div className="list-product">
            {dataTopProduct.map((item) => (
              <BoxProduct key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopProduct