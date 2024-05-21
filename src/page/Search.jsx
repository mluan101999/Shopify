import React, { useEffect, useState } from 'react'
import Header from '../component/Header/Header'
import { useLocation } from 'react-router-dom'
import ApiService from '../service/ApiServices'
import BoxProduct from '../component/Main/BoxProduct'

const Search = () => {
    const location = useLocation()
    const { searchValue } = location.state || {};
    const [searchProduct, setSearchProduct] = useState([])
    const loadDataSearch = async () => {
        const res = await ApiService.ApiSearchProduct(searchValue);
        console.log(res.data.products);
        setSearchProduct(res.data.products)
    }

    useEffect(() => {
        loadDataSearch();
    }, [searchValue]);

    return (
        <div>
            <Header />
            <div style={{ width: "100%", height: "100%" }}>
                <div className='search'>
                    <h1 style={{ color: '#b43bd5' }}>Search Result For: {searchValue}</h1>
                    <div className='searchItems'>
                        {searchProduct.length ? searchProduct.map(item => <BoxProduct key={item.id} item={item} />) : <h4>No product found</h4>}            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
