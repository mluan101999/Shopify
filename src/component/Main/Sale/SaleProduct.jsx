import React from 'react';
import { useSelector } from 'react-redux';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import BoxProduct from '../BoxProduct';
import BoxProductSlide from '../../BoxProductSlide';

const SaleProduct = () => {
    const dataTopProduct = useSelector((state) => state.productSlice.products)
    const properties = {
        duration: 5000,
        slidesToShow: 5, 
        slidesToScroll: 2,
        infinite: true,
        arrows: true
    };
    return (
        <div className='slideProduct'>
            <div>
                <h1><i>FLASH SALE - HOT SUMMER</i></h1>
            </div>
            <Slide {...properties}>
                {dataTopProduct.map((item) => (
                    <BoxProductSlide key={item.id} item={item} />
                ))}
            </Slide>
            <div>See All Product</div>
        </div>

    );
};

export default SaleProduct;
