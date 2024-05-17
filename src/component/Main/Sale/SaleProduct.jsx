import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import BoxProductSlide from '../../BoxProductSlide';
import { BsFillLightningFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const SaleProduct = () => {
    const saleProducts = useSelector((state) => state.productSlice.saleProducts);
    // const dataTopProduct = useSelector((state) => state.productSlice.products)
    if (!saleProducts || saleProducts.length === 0) {
        return <div></div>;
    }
    const properties = {
        duration: 2000,
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        arrows: true
    };

    return (
        <div style={{ width: "100%", backgroundColor: "#eaeaea" }}>
            <div className='slideProduct'>
                <div style={{ display: 'flex', alignItems: "center", marginBottom: '-10px', marginTop: '-35px',marginLeft:"35px" }}>
                    <BsFillLightningFill style={{ color: "#ff989c", width: "40px", height: "35px" }} />
                    <h1 className='h1-sale'><i>FLASH SALE - HOT SUMMER</i></h1>
                </div>
                <Slide {...properties}>
                    {saleProducts.map((item) => (
                        <BoxProductSlide key={item.id} item={item} />
                    ))}
                </Slide>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "15px" }}>
                    <NavLink to="/product">
                        <button className="full-rounded button1" style={{cursor:"pointer"}}>
                            <span>See All Product</span>
                            <div className="border full-rounded"></div>
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>

    );
};

export default SaleProduct;
