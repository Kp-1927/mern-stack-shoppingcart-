import React, { useContext, useEffect } from 'react';
import ProductContext from '../../store/ProductContext';
import {Product} from '../product/Product'

export const ProductList = (props)=>{
    const ProductCtx = useContext(ProductContext)
    useEffect(()=>{
        getProducts();
    },[ProductCtx.products])

    const getProducts = async()=>{
        const data = await fetch("http://localhost:1111/product/");
        const products_data = await data.json();
        ProductCtx.setProducts(products_data.products);
      }

    return (
        <div>
            {props.children}
            {ProductCtx.products.map((product,index)=>
                <Product key ={index}
                pname = {product.product_name}
                pprice = {product.product_price}
                pimage = {product.product_image}/>
    )}
        </div>
    )
}

export default ProductList;