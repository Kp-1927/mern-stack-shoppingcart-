import React, { useContext } from 'react'
import {CartItem} from '../cart-item/CartItem';
import './cart.css'
import CartContext from '../../store/CartContext';
export const Cart = () => {
    const CartCtx = useContext(CartContext);
      const getTotalCost = (List) => {
        return List.reduce((totalCost, { product_price: itemCost }) => totalCost + parseFloat(itemCost),0);
      };
  return (
    <div className='cartcontainer'>
        <div className='cart-box mx-auto m-4'>
            {CartCtx.cartItems.map((item,index)=>
                <CartItem product_name ={item.product_name} product_price={item.product_price} qty={item.qty} key = {index}/>
            )}
        <div className='alert alert-success'>Total Price :₹{getTotalCost(CartCtx.cartItems)}</div>
        </div>
        
    </div>
  )
}
